package com.ext.cms.dao.main;

import java.util.List;

import com.jeecms.cms.dao.main.ChannelDao;
import com.jeecms.cms.entity.main.Channel;

public interface MyChannelDao extends ChannelDao {

	List<Channel> getListBySiteId(Integer siteId, boolean hasContentOnly, boolean displayOnly, boolean cacheable, Boolean recommend,
			int orderBy, Integer first, Integer count);

	Object getChildListByParentId(Integer parentId, boolean hasContentOnly, boolean displayOnly, boolean cacheable, Boolean recommend,
			int orderBy, Integer first, Integer count);

	List<Channel> getChildList(boolean hasContentOnly, boolean b, boolean c, Boolean recommend, int orderBy, int first,
			int count);

}
