package com.ext.cms.action.directive;

import static com.jeecms.cms.Constants.TPL_STYLE_LIST;
import static com.jeecms.cms.Constants.TPL_SUFFIX;
import static com.jeecms.common.web.Constants.UTF8;
import static com.jeecms.common.web.freemarker.DirectiveUtils.OUT_LIST;
import static com.jeecms.core.web.util.FrontUtils.PARAM_STYLE_LIST;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.ext.cms.action.directive.abs.MyAbstractChannelDirective;
import com.jeecms.cms.entity.main.Channel;
import com.jeecms.common.web.freemarker.DefaultObjectWrapperBuilderFactory;
import com.jeecms.common.web.freemarker.DirectiveUtils;
import com.jeecms.common.web.freemarker.DirectiveUtils.InvokeType;
import com.jeecms.common.web.freemarker.ParamsRequiredException;
import com.jeecms.core.entity.CmsSite;
import com.jeecms.core.web.util.FrontUtils;

import freemarker.core.Environment;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;

/**
 * 自定义栏目列表标签
 */
public class MyChannelListDirective extends MyAbstractChannelDirective {

	/**
	 * 模板名称
	 */
	public static final String TPL_NAME = "channel_list";

	/**
	 * 输入参数，栏目ID。允许多个栏目ID，用","分开。排斥其他所有筛选参数。
	 */
	public static final String PARAM_IDS = "ids";

	@SuppressWarnings("unchecked")
	public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body)
			throws TemplateException, IOException {
		CmsSite site = FrontUtils.getSite(env);

		List<Channel> list = getList(params, env);

		Map<String, TemplateModel> paramWrap = new HashMap<String, TemplateModel>(params);
		paramWrap.put(OUT_LIST, DefaultObjectWrapperBuilderFactory.getDefaultObjectWrapper().wrap(list));
		Map<String, TemplateModel> origMap = DirectiveUtils.addParamsToVariable(env, paramWrap);
		InvokeType type = DirectiveUtils.getInvokeType(params);
		String listStyle = DirectiveUtils.getString(PARAM_STYLE_LIST, params);
		if (InvokeType.sysDefined == type) {
			if (StringUtils.isBlank(listStyle)) {
				throw new ParamsRequiredException(PARAM_STYLE_LIST);
			}
			env.include(TPL_STYLE_LIST + listStyle + TPL_SUFFIX, UTF8, true);
		} else if (InvokeType.userDefined == type) {
			if (StringUtils.isBlank(listStyle)) {
				throw new ParamsRequiredException(PARAM_STYLE_LIST);
			}
			FrontUtils.includeTpl(TPL_STYLE_LIST, site, env);
		} else if (InvokeType.custom == type) {
			FrontUtils.includeTpl(TPL_NAME, site, params, env);
		} else if (InvokeType.body == type) {
			body.render(env.getOut());
		} else {
			throw new RuntimeException("invoke type not handled: " + type);
		}
		DirectiveUtils.removeParamsFromVariable(env, paramWrap, origMap);
	}

	protected List<Channel> getList(Map<String, TemplateModel> params, Environment env) throws TemplateException {
		CmsSite site = FrontUtils.getSite(env);
		
		Integer[] ids = DirectiveUtils.getIntArray(PARAM_IDS, params);
		
		if(ids != null) {
			// TODO:
			return myChannelMng.getListByIdsForTag(ids, getOrderBy(params));			
		} else {
			return (List<Channel>) super.getData(params, env);
		}
	}

	@Override
	protected boolean isPage() {
		return false;
	}

}
