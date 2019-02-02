package com.ext.cms.manager.main;

import java.util.List;

import com.jeecms.cms.entity.main.Channel;
import com.jeecms.cms.manager.main.ChannelMng;

/**
 * 自定义栏目管理接口
 * 
 */
public interface MyChannelMng extends ChannelMng {

	/**
	 * This method has been called from MyChannelListDirective.java
	 * @param ids
	 * @param orderBy
	 * @return
	 */
	List<Channel> getListByIdsForTag(Integer[] ids, int orderBy);

	public List<Channel> getListBySiteIdForTag(Integer siteId, boolean hasContentOnly, Boolean recommend,
			int orderBy, Integer first, Integer count);

	Object getChildListByParentIdForTag(Integer parentId, boolean hasContentOnly, Boolean recommend, int orderBy,
			Integer first, Integer count);

	public List<Channel> getChildListForTag(boolean hasContentOnly, Boolean recommend, int orderBy, int first, int count);

}
