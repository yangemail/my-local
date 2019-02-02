package com.ext.cms.action.directive.abs;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.ext.cms.manager.main.MyChannelMng;
import com.jeecms.cms.action.directive.abs.AbstractChannelDirective;
import com.jeecms.cms.manager.main.ChannelMng;
import com.jeecms.common.web.freemarker.DirectiveUtils;
import com.jeecms.core.entity.CmsSite;
import com.jeecms.core.web.util.FrontUtils;

import freemarker.core.Environment;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * 自定义栏目标签基类
 */
public abstract class MyAbstractChannelDirective extends AbstractChannelDirective {

	/**
	 * 输入参数，推荐。0：所有；1：推荐；2：不推荐。默认所有。
	 */
	public static final String PARAM_RECOMMEND = "recommend";
	/**
	 * 输入参数，标题图片。0：所有；1：有；2：没有。默认所有。
	 */
//	public static final String PARAM_IMAGE = "image";
	/**
	 * 输入参数，排序方式。
	 * <ul>
	 * <li>0：ID降序
	 * <li>1：ID升序
	 * <li>2：发布时间降序
	 * <li>3：发布时间升序
	 * <li>4：固定级别降序,发布时间降序
	 * <li>5：固定级别降序,发布时间升序
	 * 
	 * <li>6：日访问降序（推荐）
	 * <li>7：周访问降序
	 * <li>8：月访问降序
	 * <li>9：总访问降序
	 * 
	 * <li>10：日评论降序（推荐）
	 * <li>11：周评论降序
	 * <li>12：月评论降序
	 * <li>13：总评论降序
	 * 
	 * <li>14：日下载降序（推荐）
	 * <li>15：周下载降序
	 * <li>16：月下载降序
	 * <li>17：总下载降序
	 * 
	 * <li>18：周顶降序（推荐）
	 * <li>19：周顶降序
	 * <li>20：周顶降序
	 * <li>21：周顶降序
	 * </ul>
	 */
	public static final String PARAM_ORDER_BY = "orderBy";
	/**
	 * 开放（0私有，1公开的，2不设置该参数 忽略该参数值）
	 */
	public static final String PARAM_OPEN = "open";
	/**
	 * 仅限于子栏目（0包含父栏目，1仅包含子栏目）
	 */
	public static final String PARAM_CHILDREN = "child";

	/**
	 * 自定义字段前缀(类似s_author)
	 */
//	public static final String PARAM_ATTR_STRING_PERFIX = "s_";

	protected Integer getParentId(Map<String, TemplateModel> params) throws TemplateException {
		Integer parentId = DirectiveUtils.getInt(PARAM_PARENT_ID, params);
		return parentId;
	}

	protected Integer getSiteId(Map<String, TemplateModel> params) throws TemplateException {
		Integer siteId = DirectiveUtils.getInt(PARAM_SITE_ID, params);
		return siteId;
	}
	
	protected Boolean getIsChildrenOnly(Map<String, TemplateModel> params) throws TemplateException {
		Boolean isChildOnly = DirectiveUtils.getBool(PARAM_CHILDREN, params);
		return isChildOnly;
	}

//	protected Integer[] getSiteIds(Map<String, TemplateModel> params) throws TemplateException {
//		Integer[] siteIds = DirectiveUtils.getIntArray(PARAM_SITE_ID, params);
//		return siteIds;
//	}

//	protected Boolean getHasTitleImg(Map<String, TemplateModel> params) throws TemplateException {
//		String titleImg = DirectiveUtils.getString(PARAM_IMAGE, params);
//		if ("1".equals(titleImg)) {
//			return true;
//		} else if ("2".equals(titleImg)) {
//			return false;
//		} else {
//			return null;
//		}
//	}

	protected Boolean getRecommend(Map<String, TemplateModel> params) throws TemplateException {
		String recommend = DirectiveUtils.getString(PARAM_RECOMMEND, params);
		if ("1".equals(recommend)) {
			return true;
		} else if ("2".equals(recommend)) {
			return false;
		} else {
			return null;
		}
	}

	protected int getOrderBy(Map<String, TemplateModel> params) throws TemplateException {
		Integer orderBy = DirectiveUtils.getInt(PARAM_ORDER_BY, params);
		if (orderBy == null) {
			return 0;
		} else {
			return orderBy;
		}
	}

	protected Object getData(Map<String, TemplateModel> params, Environment env) throws TemplateException {
		int orderBy = getOrderBy(params);
		Boolean recommend = getRecommend(params);
		Integer parentId = getParentId(params);
		Boolean isChildOnly = getIsChildrenOnly(params);
		Integer siteId = getSiteId(params);
		int count = FrontUtils.getCount(params);
		boolean hasContentOnly = getHasContentOnly(params);
		
		if(isChildOnly != null && isChildOnly) {
			int first = FrontUtils.getFirst(params);
			return myChannelMng.getChildListForTag(hasContentOnly, recommend, orderBy, first, count);
		}
		// TODO: Analyse: recommend, pageNo, first
		if(parentId != null) {
			if(isPage()) {
				int pageNo = FrontUtils.getPageNo(env);
				// TODO:
				return myChannelMng.getChildListForTag(parentId, hasContentOnly);
			} else {
				int first = FrontUtils.getFirst(params);
				return myChannelMng.getChildListByParentIdForTag(parentId, hasContentOnly, recommend, orderBy, first, count);
			}
		}
//		if(siteId != null) {
//			if(isPage()) {
//				int pageNo = FrontUtils.getPageNo(env);
//				// TODO:
//				return myChannelMng.getTopListForTag(siteId, hasContentOnly);
//			} else {
//				int first = FrontUtils.getFirst(params);
//				return myChannelMng.getTopListForTag(siteId, hasContentOnly);
//			}
//		}
		
		// 主要条件为空，则执行此处代码
		if (siteId == null) {
			CmsSite site = FrontUtils.getSite(env);
			siteId = site.getId();
		}
		if (isPage()) {
			int pageNo = FrontUtils.getPageNo(env);
			// TODO:
//			return myChannelMng.getPageBySiteIdForTag(siteId, recommend, orderBy, pageNo, count);
			return null;
		} else {
			int first = FrontUtils.getFirst(params);
			return myChannelMng.getListBySiteIdForTag(siteId, hasContentOnly, recommend, orderBy, first, count);
//			return myChannelMng.getTopListForTag(siteId, hasContentOnly);
		}
	}

	abstract protected boolean isPage();

	@Autowired
	protected MyChannelMng myChannelMng;

}
