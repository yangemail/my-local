package com.ext.cms.dao.main.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ext.cms.dao.main.MyChannelDao;
import com.jeecms.cms.dao.main.impl.ChannelDaoImpl;
import com.jeecms.cms.entity.main.Channel;
import com.jeecms.common.hibernate4.Finder;

//@Repository
public class MyChannelDaoImpl extends ChannelDaoImpl implements MyChannelDao {

	@Override
	public List<Channel> getChildList(boolean hasContentOnly, boolean displayOnly, boolean cacheable, Boolean recommend, int orderBy,
			int first, int count) {
		return getChildListByParentId(-1, hasContentOnly, displayOnly,
				cacheable, recommend, orderBy, first, count);
	}
	
	@Override
	public List<Channel> getChildListByParentId(Integer parentId, boolean hasContentOnly, boolean displayOnly,
			boolean cacheable, Boolean recommend, int orderBy, Integer first, Integer count) {
		Finder f = byParentId(parentId, hasContentOnly, displayOnly, cacheable, recommend, orderBy);
		if (first != null) {
			f.setFirstResult(first);
		}
		if (count != null) {
			f.setMaxResults(count);
		}
		f.setCacheable(true);
		return find(f);
	}
	

	private Finder byParentId(Integer parentId, boolean hasContentOnly, boolean displayOnly, boolean cacheable,
			Boolean recommend, int orderBy) {
		Finder f = Finder.create("from Channel bean");
		
		if (parentId != -1) {
			f.append(" where bean.parent.id=:parentId");
			f.setParam("parentId", parentId);
		} else {
			f.append(" where bean.parent.id is not null");
		}
		if (hasContentOnly) {
			f.append(" and bean.hasContent=true");
		}
		if (displayOnly) {
			f.append(" and bean.display=true");
		}
		// TODO: Recommend in the table of Channel_ATTR
//		if (recommend != null) {
//			f.append(" and bean.recommend=:recommend");
//			f.setParam("recommend", recommend);
//		}
		// TODO: Order By, need to do Join or review and get ideas from other classes
		// By Default
		f.append(" order by bean.priority asc,bean.id asc");
		f.setCacheable(cacheable);
		return f;
	}

	
//	@SuppressWarnings("unchecked")
//	public List<Channel> getChildList(Integer parentId, boolean hasContentOnly, boolean displayOnly,
//			boolean cacheable) {
//		Finder f = getChildFinder(parentId, hasContentOnly, displayOnly, cacheable);
//		return find(f);
//	}
//
//	private Finder getChildFinder(Integer parentId, boolean hasContentOnly, boolean displayOnly, boolean cacheable) {
//		Finder f = Finder.create("from Channel bean");
//
//		if (parentId != -1) {
//			f.append(" where bean.parent.id=:parentId");
//			f.setParam("parentId", parentId);
//		} else {
//			f.append(" where bean.parent.id is not null");
//		}
//
//		if (hasContentOnly) {
//			f.append(" and bean.hasContent=true");
//		}
//		if (displayOnly) {
//			f.append(" and bean.display=true");
//		}
//		f.append(" order by bean.priority asc,bean.id asc");
//		f.setCacheable(true);
//		return f;
//	}

	@Override
	public List<Channel> getListBySiteId(Integer siteId, boolean hasContentOnly, boolean displayOnly,
			boolean cacheable, Boolean recommend, int orderBy, Integer first, Integer count) {
		Finder f = bySiteId(siteId, hasContentOnly, displayOnly, cacheable, recommend, orderBy);
		if (first != null) {
			f.setFirstResult(first);
		}
		if (count != null) {
			f.setMaxResults(count);
		}
		f.setCacheable(true);
		return find(f);
	}

	private Finder bySiteId(Integer siteId, boolean hasContentOnly, boolean displayOnly, boolean cacheable,
			Boolean recommend, int orderBy) {
		Finder f = Finder.create("from Channel bean");
		
//		f.append(" where bean.site.id=:siteId and bean.parent.id is null");
		f.append(" where bean.site.id=:siteId");
		f.setParam("siteId", siteId);
		if (hasContentOnly) {
			f.append(" and bean.hasContent=true");
		}
		if (displayOnly) {
			f.append(" and bean.display=true");
		}
		// TODO: Recommend in the table of Channel_ATTR
//		if (recommend != null) {
//			f.append(" and bean.recommend=:recommend");
//			f.setParam("recommend", recommend);
//		}
		// TODO: Order By, need to do Join or review and get ideas from other classes
		// By Default
		f.append(" order by bean.priority asc,bean.id asc");
		f.setCacheable(cacheable);
		return f;
	}


	


}
