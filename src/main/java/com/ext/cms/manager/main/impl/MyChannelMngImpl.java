package com.ext.cms.manager.main.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ext.cms.dao.main.MyChannelDao;
import com.ext.cms.manager.main.MyChannelMng;
import com.jeecms.cms.entity.main.Channel;
import com.jeecms.cms.manager.main.impl.ChannelMngImpl;

//@Service
//@Transactional
public class MyChannelMngImpl extends ChannelMngImpl implements MyChannelMng {

	@Autowired
	private MyChannelDao myChannelDao;

	@Override
	@Transactional(readOnly = true)
	public List<Channel> getListBySiteIdForTag(Integer siteId, boolean hasContentOnly, Boolean recommend,
			int orderBy, Integer first, Integer count) {
		return myChannelDao.getListBySiteId(siteId, hasContentOnly, true, true, recommend, orderBy, first, count);
	}

	@Override
	public List<Channel> getListByIdsForTag(Integer[] ids, int orderBy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object getChildListByParentIdForTag(Integer parentId, boolean hasContentOnly, Boolean recommend, int orderBy,
			Integer first, Integer count) {
		return myChannelDao.getChildListByParentId(parentId, hasContentOnly, true, true, recommend, orderBy, first, count);
	}

	@Override
	public List<Channel> getChildListForTag(boolean hasContentOnly, Boolean recommend, int orderBy, int first,
			int count) {
		return myChannelDao.getChildList(hasContentOnly, true, true, recommend, orderBy, first, count);
	}
	
	

}
