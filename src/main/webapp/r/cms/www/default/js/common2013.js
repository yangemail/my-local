jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};
//imagesLoaded
$.fn.imagesLoaded=function(callback){var $this=$(this),$images=$this.find('img').add($this.filter('img')),len=$images.length,blank='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';function triggerCallback(){callback.call($this,$images)}function imgLoaded(event){if(--len<=0&&event.target.src!==blank){setTimeout(triggerCallback);$images.unbind('load error',imgLoaded)}}if(!len){triggerCallback()}$images.bind('load error',imgLoaded).each(function(){if(this.complete||typeof this.complete==="undefined"){var src=this.src;this.src=blank;this.src=src}});return $this};

function uaredirect(f){try{if(document.getElementById("bdmark")!=null){return}var b=false;if(arguments[1]){var e=window.location.host;var a=window.location.href;if(isSubdomain(arguments[1],e)==1){f=f+"/#m/"+a;b=true}else{if(isSubdomain(arguments[1],e)==2){f=f+"/#m/"+a;b=true}else{f=a;b=false}}}else{b=true}if(b){var c=window.location.hash;if(!c.match("fromapp")){if((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))){location.replace(f)}}}}catch(d){}}function isSubdomain(c,d){this.getdomain=function(f){var e=f.indexOf("://");if(e>0){var h=f.substr(e+3)}else{var h=f}var g=/^www\./;if(g.test(h)){h=h.substr(4)}return h};if(c==d){return 1}else{var c=this.getdomain(c);var b=this.getdomain(d);if(c==b){return 1}else{c=c.replace(".","\\.");var a=new RegExp("\\."+c+"$");if(b.match(a)){return 2}else{return 0}}}};

function isIE6(){return getIEVersion() === '6'}
function getIEVersion(){
	var a=document;
	if(a.body.style.scrollbar3dLightColor!=undefined){
		if(a.body.style.opacity!=undefined){
			return "9"
		}else if(a.body.style.msBlockProgression!=undefined){
			return "8"
		}else if(a.body.style.msInterpolationMode!=undefined){
			return "7"
		}else if(a.body.style.textOverflow!=undefined){
			return "6"
		}else{
			return "IE5.5"
		}
	}
	return false;
}
var unique = function( array ) {//����ȥ��
	var ret = [], record = {}, it, tmp;
	var type = {
	"number": function(n){ return "_TUI_num" + n; },
	"string": function(n){ return n; },
	"boolean": function(n){ return "_TUI_boolean" + n; },
	"object": function(n){ return n === null ? "TUI_null" : $.data(n); },
	"undefined": function(n){ return "_TUI_undefined"; }
	};
	for ( var i = 0, length = array.length; i < length; i++ ) {
	it = tmp = array[i];
	tmp = type[typeof it](it);
	if( !record[tmp]) {
	ret.push(it);
	record[tmp] = true;
	}
	}
	return ret;
};
function changeTwoDecimal(x){//������λС������������
	var f_x = parseFloat(x);
	if (isNaN(f_x)){
		//console.info('function:changeTwoDecimal->parameter error');
		return false;
	}
	if(f_x.toString().lastIndexOf('.')!==-1){
		f_x=f_x.toFixed(2);
	}
	return f_x;
}
function changeTwoDecimal2(x){//������λС��������������
	var f_x = parseFloat(x);
	if (isNaN(f_x)){
		console.info('function:changeTwoDecimal->parameter error');
		return false;
	}
	f_x=f_x.toFixed(3);
	f_x = f_x.substring(0,f_x.lastIndexOf('.')+3);
	return f_x;
}
/*ѡ��л�
��������{ѡ����|��ť���||ѡ�������}
*/
function Show_TabADSMenu(tabadid_num,tabadnum,tabNums){
	for(var i=0;i<tabNums;i++){document.getElementById("tabadcontent_"+tabadid_num+i).style.display="none";}
	for(var i=0;i<tabNums;i++){document.getElementById("tabadmenu_"+tabadid_num+i).parentNode.className="";}
	document.getElementById("tabadmenu_"+tabadid_num+tabadnum).parentNode.className="selected";
	document.getElementById("tabadcontent_"+tabadid_num+tabadnum).style.display="block";
	return false;
}
function Show_TabADSMenu2(tabadid_num,tabadnum,tabNums){
	for(var i=0;i<tabNums;i++){document.getElementById("tabadcontent_"+tabadid_num+i).style.display="none";}
	for(var i=0;i<tabNums;i++){document.getElementById("tabadmenu_"+tabadid_num+i).className="";}
	document.getElementById("tabadmenu_"+tabadid_num+tabadnum).className="current";
	document.getElementById("tabadcontent_"+tabadid_num+tabadnum).style.display="block";
}
function loginout(siteUrl){
	
}
function is_login(siteUrl,tplPath,hasQQ,hasWX,source){
	
}
function is_login2(siteUrl,tplPath,hasQQ,hasWX,source){
	
}
function is_login3(siteUrl,hasQQ,hasWX,siteID,Forward){
	var Forward = encodeURIComponent(Forward);
	var url = siteUrl+"index.php?m=member&c=checklogin&a=init&jsoncallback=?",
		node = $("#login_info"),txt='';
	
	var hasQQs = hasQQ === '1';
	var hasWXs = hasWX === '1'
	var siteIDs = siteID === '1';
	var qqImg = !!hasQQs?'<dl><dt class="zn"><a href="'+siteUrl+'index.php?m=member&c=index&a=public_qq_loginnew&siteid='+siteID+'">QQ登录</a></dt></dl><dl class="xian"></dl>':'';
	var wxImg = !!hasWXs?'<dl><dt class="zn"><a href="'+siteUrl+'index.php?m=member&c=wechat&forward='+Forward+'">微信登录</a></dt></dl><dl class="xian"></dl>':'';
	var sj_btn = "";
		
	if(typeof siteUrl !== 'undefined'){window['siteUrl'] = siteUrl;}
	
	$.getJSON(url,function(data) {
		if(data[0].islogin==="1"){
			if(data[0].jibie === '1'||data[0].jibie === '2'||parseInt(data[0].manageshopid)>0){
				sj_btn = " <a href=\""+siteUrl+"index.php?m=yp&c=business\" class=\"shangjia\" target=\"_blank\">�̼�ƽ̨</a>";
			}
			txt="<p class=\"login_success\"><span class=\"username\">"+data[0].name+"</span>�����ã� <a href=\""+siteUrl+"index.php?m=member&c=index&a=init&siteid="+siteID+"\">��������</a>"+sj_btn+" <a href=\""+siteUrl+"index.php?m=member&c=index&a=logout&siteid="+siteID+"&forward="+Forward+"\">�˳�</a></p><dl class=\"xian\"></dl>";
			txt+="<input value=\"1\" id=\"isLogin\" type=\"hidden\" />";
			loadWEBmessage();//��Ϣϵͳ
		}else{
			txt='<dl style="width:84px;">'+
				'<dt>��ã�<a href="'+siteUrl+'index.php?m=member&c=index&a=login&siteid='+siteID+'&forward='+Forward+'" class="cur">���¼</a></dt>'+
			'</dl><dl>'+
				'<dt class="zn"><a href="'+siteUrl+'index.php?m=member&c=index&a=register&siteid='+siteID+'">���ע��</a></dt>'+
			'</dl><dl class="xian"></dl>'+qqImg+wxImg;
			txt+="<input value=\"0\" id=\"isLogin\" type=\"hidden\" />";
		}
		node.prepend(txt);
	}).error(function(err){
		//alert(err);
	});;
}
function getLoginUserInfo(siteUrl,tplPath,hasQQ,hasWX,source){
	
}
/*var orderPollingFrame = (function(){       
	return function(callback,speed){       
		window.setTimeout(callback, speed);       
	};       
})();*/


var message_pid="-1";
var message_isstop = false;//ҳ���Ƿ�ʧ����Ȩ
var message_isforced = false;//�Ƿ�ǿ�����ط���Ȩҳ��,����ʧʱ��ǿ������Ȩʱ,��ȫֹͣ��̽��
function loadWEBmessage(){
	var url = window['siteUrl']+'index.php?m=member&c=checklogin&a=message&jsoncallback=?';
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){WebMessageShow(data);}
		if(data[0].islogin === '1' || data[0].islogin === '0'){
			/*if( message_pid != '-1' &&  message_pid != data[0].pid){
		  		$('#message_show').html('�ҳ�涪ʧ,�������һ�����Ȩ');
		    }*/
			message_pid=data[0].pid;
			window.setTimeout(function(){loadWEBmessage()},3000);//����̽��:���ʱ���100-5000����,��̽��:���1-2��������
		}else{
			/*$('#message_show').html('��Ϣ��ȡ����һҳ��ȡ������ҳ��ץȡ��Ϣ������̽��');*/
			message_isstop = true;
			if(message_isforced){
				message_isforced=false;
			}else{
				if( message_pid === '-1' )message_pid='0';
			    window.setTimeout(function(){loadWEBmessage()},1*60000);////��ȡ����ÿ2���ӳ���һ������,���ҳ���Ƿ�ʧ
			}
		}
	}).error(function(err){//ʧ��2���Ӻ���һ��
		window.setTimeout(function(){loadWEBmessage()},2*60000);
	});
	/* 
	data[0].islogin:0����Ϣ,1:����ϢMSG,2:ֹͣ����̽��,��Ϊ��̽�������Ǽ��ʱ��.
	*/
	/*$(window).blur(function(){
		RunOnunload();
	});
	$(window).focus(function(){
		newloadWEBmessage();
	});*/
}
function newloadWEBmessage(){
	//��ҳ�淢���κ�ˢ�»���궯�����������ʱ,��ʾǰ�ҳ���Ѿ����ǽ���ҳ��,��ǰҳ�����³�ʼ����ǿ��ץ����Ϣ��ȡȨ
	//����:��η�ֹ��ҳ�沢��ִ��loadWEBmessage(),�Զ�ִ��һ��,ǿ��ִ��һ��.
	if(message_isstop){
	  	message_isstop = false;
		message_isforced =true;
    	message_pid="-1";
	    loadWEBmessage();
    }
}
function RunOnunload(){//��ǰҳ��ر�ʱִ��,�������ﵱǰ���ӹر�,���践���κ�����
	var url = window['siteUrl']+'index.php?m=member&c=checklogin&a=close&jsoncallback=?';
	$.getJSON(url,function(data){});
}
function WebMessageShow(data){
	var idata = data[0]['MSG'];
	
	var newOrderId='webMessage';
	function countItem(){
		var len = $('#'+newOrderId).find('.item').length;
		$('#WebMessageNum').html(len);
		if(len === 0){
			$('#'+newOrderId).hide();	
		}
	}
	if(typeof idata['mp3'] !== 'undefined' && idata['mp3'] !==''){
		WebMessageMusic(idata['mp3']);
	}
	if(!$('#'+newOrderId)[0]){
		var divs = document.createElement('div');
		divs.id = newOrderId;
		$('body').append(divs);
		divs.innerHTML = '<div class="hd">����<span id="WebMessageNum">0</span>������Ϣ</div><div class="bd" id="WebMessageInner"></div><a href="#" class="close">����</a><a href="#" class="remove">�Ƴ�</a>';
		$('#'+newOrderId).find('.close').click(function(e){
			e.preventDefault();
			$('#WebMessageInner').slideToggle();
			$(this).toggleClass('open');
		}).end().find('.remove').click(function(e){
			e.preventDefault();
			$('#'+newOrderId).hide();
		}).end().on( "click", ".view", function(e){
			if(typeof idata['notViewCloseALL'] !=='undefined' && idata['notViewCloseALL'] === '1'){//����鿴�Ƴ�ȫ��ͬ������Ϣ
				$(this).parent().parent().remove();
			}else{
				$('#'+newOrderId).find('.tplid_'+$(this).attr('data-tplid')).remove();
			}
			countItem();
		}).on( "click", ".del", function(e){
			e.preventDefault();
			$(this).parent().parent().remove();
			countItem();
		});
	}else{
		$('#'+newOrderId).show();
		$('#WebMessageInner').slideDown();
	}
	var txt = $('<div class="item tplid_'+idata.tplid+'">'+idata.title+'<p class="date">'+idata.dtappenddate+'</p><span class="panel"><a href="'+window['siteUrl']+'index.php?m=message&c=index&a=read&messageid='+idata.msgid+'" class="view" data-tplid="'+idata.tplid+'" target="_blank">�鿴��ϸ</a> <a href="#" class="del">����</a></span><s class="s"></s></div>');
	var WebMessageInner = $('#WebMessageInner');
	setTimeout(function(){WebMessageInner.append(txt);WebMessageInner[0].scrollTop = WebMessageInner[0].scrollHeight;},50);
	$('#WebMessageNum').html(parseInt($('#WebMessageNum').html())+1);
}
function WebMessageMusic(file){
	if(typeof window['my_jPlayer'] === 'undefined'){
		$.ajax({url:window['siteUrl']+"statics/js/mh/jquery.jplayer.min.js",dataType:'script'}).done(function(){
			setTimeout(function(){
				$('body').append('<div id="jquery_jplayer"></div>');
				window['my_jPlayer'] = $("#jquery_jplayer");
				my_jPlayer.jPlayer({
					ready: function (event) {
						$(this).jPlayer("setMedia",{mp3: file});
						if(typeof notplay === 'undefined'){window['my_jPlayer'].jPlayer('play');}
					},
					swfPath: window['tplPath']+"js", // jquery.jplayer.swf �ļ���ŵ�λ��
					supplied: "mp3",
					wmode: "window"
				});
			},200);
		});
	}else{
		window['my_jPlayer'].jPlayer("setMedia",{mp3: file});
		window['my_jPlayer'].jPlayer('play');
	}
	return false;
}
function get_user_isOnline(sid){
}
function get_bbs(bbsUrl,cat,num,node){
}
function get_live(liveUrl,cat,num,node){
}
function get_other(otherUrl,cat,num,node){
}
$.fn.confirmForm = function(){
	this.each(function(){
		var list = $(this).find('.gx_confirm');
		var forname = $(this).attr('data-name');
		var sid=$('input[name="'+forname+'"]:checked').attr('value');
		
		if(sid ==='1'){
			$(this).find('.gx_confirm').addClass('current').attr('data-val','1');
		}
		list.click(function(e){
			e.preventDefault();
			if($(this).attr('data-val') === '0'){
				$(this).attr('data-val','1');
				$(this).addClass('current');
				$('input[name="'+forname+'"][value="1"]').prop('checked',true);
			}else{
				$(this).attr('data-val','0');
				$(this).removeClass('current');
				$('input[name="'+forname+'"][value="0"]').prop('checked',true);
			}
		});
	});
}
$.fn.radioForm = function(){
	this.each(function(){
		var list = $(this).find('.gx_radio');
		var forname = $(this).attr('data-name');
		var sid=$('input[name="'+forname+'"]:checked').attr('value');
		if(sid !=='' && !!sid){
			$(this).find('.gx_radio').removeClass('current');
			$(this).find('.gx_radio[data-val="'+sid+'"]').addClass('current');
		}
		list.click(function(e){
			e.preventDefault();
			var target = $('input[name="'+forname+'"][value="'+$(this).attr('data-val')+'"]');
			if(!!target.prop('disabled')){return false;}
			target.prop('checked',true);
			list.removeClass('current');
			$(this).addClass('current');
		});
	});
}
$.fn.checkboxForm = function(){
	this.each(function(){
		var t = $(this);
		var list = $(this).find('.gx_check');
		var forname = $(this).attr('data-name');
		var form_list = $(this).find('input[name="'+forname+'"]:checked');
		form_list.each(function(){
			var sid = $(this).attr('value');
			t.find('.gx_check[data-val="'+sid+'"]').addClass('current');
		});
		list.click(function(e){
			e.preventDefault();
			var target = $('input[name="'+forname+'"][value="'+$(this).attr('data-val')+'"]');
			if(!!target.prop('disabled')){return false;}
			target.prop('checked',!target.prop('checked'));
			$(this).toggleClass('current');
		});
	});
}
$.fn.TabADS_tieba = function(){
	var obj = $(this);
	var currentClass = "current";
	var tabs = obj.find(".hd-inner").find("a");
	var conts = obj.find(".news");
	var t;
	tabs.eq(0).addClass(currentClass);
	conts.hide();
	conts.eq(0).show();
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				conts.hide().eq(i).show();
				tabs.removeClass(currentClass).eq(i).addClass(currentClass);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}
$.fn.TabADS4 = function(thisUrl,num,callback,isGO){
	var obj = $(this),
		currentClass = "selected",
		tabs = obj.find(".tab-hd").find(".item"),
		conts = obj.find(".tab-cont"),
		tab,cat,cont,is_success,t;
	
	callback = callback==='bbs'?get_bbs:(callback==='live'?get_live:get_other);
	tabs.eq(0).addClass(currentClass);
	conts.hide();
	conts.eq(0).show();
	isGO&&callback.call(this,thisUrl,tabs.eq(0).attr('data-cat'),num,conts.eq(0))
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				tab=tabs.eq(i);
				cont=conts.eq(i);
				conts.hide();
				cont.show();
				tabs.removeClass(currentClass);
				tab.addClass(currentClass);
			 	is_success=cont.attr('data-success')==='1'?true:false;
				cat=tab.attr('data-cat');
				!is_success&&callback.call(obj,thisUrl,cat,num,cont);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}
$.fn.TabADS3 = function(thisUrl,num,callback,isGO){
	var obj = $(this),
		currentClass = "current",
		tabs = obj.find(".hd-inner").find("a"),
		conts = obj.find(".news"),
		tab,cat,cont,is_success,t;
	
	callback = callback==='bbs'?get_bbs:(callback==='live'?get_live:get_other);
	tabs.eq(0).addClass(currentClass);
	conts.hide();
	conts.eq(0).show();
	isGO&&callback.call(this,thisUrl,tabs.eq(0).attr('data-cat'),num,conts.eq(0))
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				tab=tabs.eq(i);
				cont=conts.eq(i);
				conts.hide();
				cont.show();
				tabs.removeClass(currentClass);
				tab.addClass(currentClass);
			 	is_success=cont.attr('data-success')==='1'?true:false;
				cat=tab.attr('data-cat');
				!is_success&&callback.call(obj,thisUrl,cat,num,cont);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}

$.fn.TabADS2 = function(thisUrl,num,callback,isGO){
	var obj = $(this),
		currentClass = "selected",
		tabs = obj.find(".tab-hd").find("li"),
		conts = obj.find(".tab-cont"),
		tab,cat,cont,is_success,t;
	
	callback = callback==='bbs'?get_bbs:(callback==='live'?get_live:get_other);
	tabs.eq(0).addClass(currentClass);
	conts.hide();
	conts.eq(0).show();
	isGO&&callback.call(this,thisUrl,tabs.eq(0).attr('data-cat'),num,conts.eq(0))
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				tab=tabs.eq(i);
				cont=conts.eq(i);
				conts.hide();
				cont.show();
				tabs.removeClass(currentClass);
				tab.addClass(currentClass);
			 	is_success=cont.attr('data-success')==='1'?true:false;
				cat=tab.attr('data-cat');
				!is_success&&callback.call(obj,thisUrl,cat,num,cont);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}

$.fn.TabADS = function(selector){
	var obj = $(this);
	var currentClass = "selected";
	if(typeof selector !== 'undefined'){
		var tabs = obj.find(".tab-hd").find(selector);
	}else{
		var tabs = obj.find(".tab-hd").find("li");
	}
	var conts = obj.find(".tab-cont");
	var t;
	tabs.eq(0).addClass(currentClass);
	conts.hide();
	conts.eq(0).show();
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				conts.hide().eq(i).show();
				tabs.removeClass(currentClass).eq(i).addClass(currentClass);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}
$.fn.modCity = function(){
	var selectBox = $('#modCity_link');
	var dropDown = $('#modCity');
	dropDown.bind('show',function(){  
		if(dropDown.is(':animated')){ return false; }  
		selectBox.addClass('expanded');
		dropDown.fadeIn();
	}).bind('hide',function(){
		if(dropDown.is(':animated')){ return false; }
		selectBox.removeClass('expanded');
		dropDown.fadeOut();  
	}).bind('toggle',function(){
		if(selectBox.hasClass('expanded')){  
			dropDown.trigger('hide');
		}else{
			dropDown.trigger('show');  
		}
	});
	selectBox.click(function(event){
		dropDown.trigger('toggle');
		event.preventDefault();
	}); 
	$(document).click(function(e){
		dropDown.trigger('hide');
	});  
}
$.fn.showMore = function(){
	var $this = $(this),$po = $this.find('.po');
	$this.hover(function(){
		$po.toggleClass('show')
	});
}
$.fn.showMore2 = function(){
	var $this = $(this);
	$this.hover(function(){
		$this.toggleClass('show')
	});
}
$.returnTop=function(node){
	var node = $('<a href="#" alt="���ض���" id="returnTop">���ض���</a>');
	$(document).ready(function(){$('body').append(node)});
	var b = node.click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop: 0},300);
	}),
	c = null;
	$(window).bind("scroll",function(){
	   var d = $(document).scrollTop(),
	   e = $(window).height();
	   0 < d ? b.css("bottom", "45px") : b.css("bottom", "-200px");
	   isIE6() && (b.hide(),clearTimeout(c),c = setTimeout(function(){
			0 < d ? b.show() : b.hide();
			clearTimeout(c);
		},
		300), b.css("top", d + e - 51))
	});
}
$.fn.returnTop2014=function(node){
	var iGo2Top = $('#iGo2Top');
	var find_serv = $('#find_serv');
	var iExtraction = $('#iExtraction');
	find_serv.hover(function(){
		find_serv.addClass('open');
		iExtraction.show().animate({width: "184px"}, 300 );
	},function(){
		find_serv.removeClass('open');
		iExtraction.css({width: "0px"}).hide();
	});
	iGo2Top.click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop: 0},300);
	});
	
	$(window).bind("scroll",function(){
	   var d = $(document).scrollTop();
	   0 < d ? iGo2Top.show() : iGo2Top.hide();
	});
}
$.fn.listNav = function(){
	var $this = $(this);
	$this.delegate('.t','click',function(e){
		$(this).parent().toggleClass('open');
	});
}
$.fn.listNav2 = function(){
	var $this = $(this);
	$this.delegate('.hd','click',function(e){
		//$this.find('.open').removeClass('open');
		//$this.find('.hd_open').removeClass('hd_open');
		$(this).toggleClass('hd_open');
		$(this).next().toggleClass('open');
		//e.preventDefault();
	});
}
$.fn.fixed = function(can){
	if(isIE6()){return false;}
	var b = $(this),h = b.height(),offset = b.offset(),top = offset.top,bottom = $('#footer').outerHeight(true),w_h = $(window).height();
	if(can.height()<h){return;}
	$(window).bind("scroll",function(){
		var d_h = $(document).height(),d = $(document).scrollTop(),h = b.height(),s_h = d_h-bottom-h,s_b = $('#footer').offset().top-h-15;
		if(top < d){
			if(0>(s_h - d)){
				b.css({'position':'absolute','top':s_b});
			}else{
				b.css({'position':'fixed','top':'0'});
			}
		}else{
			b.css({'position':'static'});
		}
	});
}
$.fn.changeList = function(){
	var _this = $(this),list=_this.find('li');
	list.bind('mouseover',function(){list.removeClass('frist');list.children('.img').hide();$(this).addClass('frist');$(this).children('.img').show();});
	list.eq(0).trigger('mouseover');
}
$('#channel_nav').ready(function(){
	var that=$('#channel_nav'),
		url = window.location.href,
		url_L = url.toLowerCase(),
		channel = that.find('a'),
		forlink;
		
	if(typeof window['isKuaiDianNav'] !== 'undefined'){
		url_L = window['isKuaiDianUrl'].toLowerCase();
	}
	channel.each(function(){
		forlink = $(this).attr("href").toLowerCase();
		if(url_L.indexOf(forlink)>=0){
			that.find('.select').removeClass();
			$(this).addClass("select");
		}
	});
	if(typeof window['istiebaNav'] !== 'undefined'){
		that.find('.select').removeClass();
		that.find('a[href*="tieba"]').addClass("select");
	}
});
$.fn.reviewTgImg = function(){
	var $this = $(this),imgs=$this.find('img');
	imgs.each(function(){
		var txt = $(this).attr('data-img-src');
		var arr1 = txt.split('/');
		var imgName = arr1.pop();
		var arr2 = imgName.split('.');
		var filename = arr2[0];
		var filetype = '.'+arr2[1];
		var new_name = arr1.join('/')+'/'+imgName.slice(0,filename.length-1)+'2'+filetype;
		
		$(this).attr('src',new_name);
	});
}
$.fn.get_TG_num = function(selector){

}
$.fn.format_zushou = function(){
	var t = $(this),l = t.find('li');
	l.each(function(i,item){
		var unit = $(item).hasClass('zu')?"Ԫ":"��Ԫ";
		var price = $(item).find('.price');
		var price_num = price.attr('data-price');
		price_num === '0'?(price.append('����')):(price.append(price_num+unit));
	});
}
$.fn.rmenuShow2016 = function(){
	var rtop = $("#top");
	var $t = $(this),w_w = $(window).width(),r_css = 0;
	r_css = parseInt((w_w-1200)/2 - $t.width() - 50);
	r_css = r_css<0?0:r_css;
	$t.css({'right':r_css+'px'})
	rtop.click(function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop: 0},300);
	});
	$(window).bind("scroll",function(){
		var d = $(document).scrollTop();
		0 < d ? rtop.show() : rtop.hide();
	}).bind('resize',function(){
		if($(window).width()<1406){
			$t.css({'right':'10px'});
		}else{
			$t.css({'right':r_css+'px'});
		}
	});
}
$.fn.resizeIMG = function(width,height){
	var that = $(this);
	var imgList = that.find('img');
	var len = imgList.length;
	if(len>0){
		imgList.each(function(i,item){
			$(item).imagesLoaded(function(){
				if(item.width<width){return;}
				AutoResizeImage(width,height,item);
			});
		});
	}
	function AutoResizeImage(maxWidth,maxHeight,objImg){
		var img = new Image();
		img.src = objImg.src;
		var hRatio;
		var wRatio;
		var Ratio = 1;
		var w = img.width;
		var h = img.height;
		wRatio = maxWidth / w;
		hRatio = maxHeight / h;
		if (maxWidth ==0 && maxHeight==0){
		Ratio = 1;
		}else if (maxWidth==0){//
		if (hRatio<1) Ratio = hRatio;
		}else if (maxHeight==0){
		if (wRatio<1) Ratio = wRatio;
		}else if (wRatio<1 || hRatio<1){
		Ratio = (wRatio<=hRatio?wRatio:hRatio);
		}
		if (Ratio<1){
		w = w * Ratio;
		h = h * Ratio;
		}
		console.info(w);
		objImg.height = h;
		objImg.width = w;
		$(objImg).css({'width':w+'px','height':h+'px'});
	}
}
function getdata2014(url,obj){
	var  Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+(Digital);
	$.ajax({url:url,success:function(data){
		$('#'+obj).html(data);
	}});
}
function setarticle(modelid,id){
	var url="/index.php?m=digg&c=index&a=ajax&modelid="+modelid+"&id="+id;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+(Digital);
	$.ajax({url:url,success:function(data){
		if(data.islogin=="1"){
			var pn = $("#dingnews").parent();
			$("#dingnews").html( data.MSG[0].xin2 );
			pn.addClass('ani_zanyixia');
			pn.animationEnd(function(){
				pn.removeClass('ani_zanyixia');
			});
		}else{
			MSGwindowShow('dianzan','0',data.error,'','');
		}
	}});
	return false;
}
function windowlocationhref(url){
	if(url.length > 5){window.location.href=url;}
}
function MSGwindowShow(action,showid,str,url,formcode){
	var sys_tips = '<div class="sys_tips" id="sys_tips" style="display:none;"><div class="hd" id="sys_tips_title"></div><div class="bd"><p id="sys_tips_info"></p><div class="btn"><a href="#" class="btn2" id="sys_tips_submit">ȷ��</a></div></div></div>';
	if(!$('#sys_tips')[0]){
		$('body').append(sys_tips);
	}
	var pay_tips = $('#pay_tips'),sys_tips = $('#sys_tips'),sys_tips_title = $('#sys_tips_title'),sys_tips_info = $('#sys_tips_info'),sys_tips_submit = $('#sys_tips_submit');
	if(action === "pay"){
		$('#have_login').hide();
		if(showid=="2"){//�����ύ
			if(document.getElementById('formcode')){
				document.getElementById('formcode').value=formcode;//��ֵcode
				document.forms['submitpay'].submit();//�ύ֧��
				//�������֧������Ϣ��ʾ����
				pay_tips.show();
				var w_h = $(window).height(),d_h = pay_tips.height(),s_h = $(document).scrollTop(),top_val = (w_h-d_h)/2+s_h;
				pay_tips.css({'top':top_val+'px'});
			}
		}else if(showid=="1"){//�ɹ���ʾ����ת
			if(!!win){win.close();}
			showConsole('��ϲ����',!0);
		}else if(showid=="0"){//��ʾ����ת
			if(!!win){win.close();}
			showConsole('��ܰ��ʾ',!1);
		}else if(showid=="4"){//������ʾ����ת
			if(!!win){win.close();}
			showConsole('������',!1);
		}else{//��ʾ����ת
			if(!!win){win.close();}
			showConsole('��ܰ��ʾ',!0);
		}
		if(document.getElementById('formcode')){
			document.getElementById('formcode').value="payok";//����Ĭ��ֵ��ֹ�����ύ
		}
	}else if(action === "jifen"){
		if(typeof formcode !== 'undefined' && formcode!=='0' && formcode!==0){
			str = str + '������'+formcode +window['jifenneme']+'��';
		}
		showConsole('��ʾ',true);
	}else if(action === "jiaoyou_buy"){
		if(typeof getPageInfo !== 'undefined'){
			getPageInfo();
		}
	}else if(action === "jiaoyou_keep"){
		$('#keeptxt').html('���ղ�');
		$('#keepnum').html(formcode);
	}else if(action === "jiaoyou_flowers"){
		$('#flowernum').html(formcode);
		$('#flower').find('.closes').trigger('click');
		showConsole('��ʾ',false);
	}else{
		if(showid=="7"){ //����ʾ���ɹ��������ϲ�ҳ��Ķ�Ӧ����
			if(typeof MSGwindowShow_curPage !== 'undefined'){MSGwindowShow_curPage.call(this,url);}
			return false;
		}
		if(showid=="0"){ //ֻ��ʾ����ת
			showConsole('��ʾ',false);
		}else if(showid=="1"){ //��ʾ����ת
			showConsole('��ʾ',true);
		}else if(showid=="2"){ //ֱ����ת
			windowlocationhref(url);
		}else if(showid=="3"){ //������Ϣ����ת
			showConsole('������',true);
		}else if(showid=="4"){ //������Ϣ��ֻ��ʾ����ת
			showConsole('������',false);
		}else if(showid=="5"){//�ɹ�����ҳ��ˢ�ϲ�ҳ��
			showConsole('��ʾ',false);
		}else if(showid=="6"){ //�ɹ��������ϲ�ҳ��Ķ�Ӧ����
			showConsole('��ʾ',false);
		}else{
			return false;
		}
	}
	
	function showConsole(tit,isredirect){
		
		sys_tips_info.html(str);
		sys_tips_title.html(tit);
		sys_tips_submit.bind('click',function(e){
			e.preventDefault();
			sys_tips.hide();
			isredirect&&windowlocationhref(url);
			if(showid === '5'){
				window.parent.location.href=window.parent.location.href;
			}
			if(showid === '6'){
				if(typeof MSGwindowShow_curPage !== 'undefined'){MSGwindowShow_curPage.call(this);}
			}
		});
		sys_tips.show();
		var w_h = $(window).height(),d_h = sys_tips.height(),s_h = $(document).scrollTop(),top_val = (w_h-d_h)/2+s_h;
		sys_tips.css({'top':top_val+'px'});
	}
}
//����Ч��
/*$(document).ready(function(){
	$('.wrapper').wrap('<div class="sp_year" id="sp_year" />');	
	var btnStr = '<a href="#" class="close_year" id="close_year">�ر�</a>';
	$('.wrapper').append(btnStr);
	
	var btn = $('#close_year');
	
	btn.bind('click',function(e){
		e.preventDefault();
		$('#sp_year').removeClass('sp_year');
	})
});*/

//�Ż�ȯ
function getQuan(shopid){
	var o_quan = $('#o_quan');
	var url = siteUrl+'index.php?m=yp&c=ajax&a=getshopcard&shopid='+shopid+'&jsoncallback=?';
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			var arr = data[0].MSG;
			for(var i=0;i<arr.length;i++){
				if(parseInt(arr[i].nousercardcount) > 0){
					arr[i].disable = '';
				}else{
					if(arr[i].ismycard === 0){
						arr[i].disable = 'disable';
					}else{
						arr[i].disable = '';
					}
				}
				var TPL=$('#tp').html().replace(/[\n\t\r]/g, '');
				$('#o_quan').append(Mustache.to_html(TPL, data[0].MSG[i]));
			}
			o_quan.show();
			o_quan.on('click','.btn',function(e){
				e.preventDefault();
				if(!!$(this).parent().hasClass('success1') || !!$(this).parent().hasClass('disable')){return false;}
				lingQuan($(this),$(this).attr('data-picinum'),$(this).attr('data-styleid'));
			});
		}else{
			//MSGwindowShow('lingQuan','0',data[0].error,'','');
		}
	});
}
function lingQuan(o,picinum,styleid){
	if($('#isLogin').val()!=='1'){
		MSGwindowShow('lingQuan','1','����û�е�¼Ŷ��',siteUrl+'index.php?m=member&c=index&a=login&forward='+encodeURIComponent(window.location.href),'');
		return false;
	}
	var url = siteUrl+'index.php?m=yp&c=ajax&a=setusercard&picinum='+picinum+'&styleid='+styleid+'&jsoncallback=?';
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			o.parent().addClass('success1');
		}else{
			MSGwindowShow('lingQuan','0',data[0].error,'','');
		}
	});
}
function getHongbao(){
	if($.cookie("pc_hongbao") === '1'){
		return false;
	}
	var url = window['siteUrl']+'index.php?m=yp&c=ajax&a=hongbao&jsoncallback=?';
	//moban:pc/main/default/member/IsMyHongbao.html
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			$.cookie("pc_hongbao",'1',{domain:"."+window['SiteYuming'],path:'/',expiress:1})
			$('body').append(data[0].MSG).on('click','#hongbaoNode .close',function(e){
				e.preventDefault();
				$('#hongbaoNode').hide();
				$('#mask').hide();
			});
			$('#mask').show();
			var node = $('#hongbaoNode');
			node.css({'margin-top':'-'+parseInt(node.height()/2)+'px'});
			node.find('li').each(function(){
				if(parseInt($(this).attr('data-nousercardcount'))<1){
					$(this).addClass('disable');
				}
				if($(this).attr('data-moneymin') === '0'){
					$(this).find('.moneymin').html('���ż�ȯ');
				}
			});
			node.on('click','.btn',function(e){
				e.preventDefault();
				if(!!$(this).hasClass('success1') || !!$(this).hasClass('disable')){return false;}
				lingQuan($(this),$(this).attr('data-picinum'),$(this).attr('data-styleid'));
			});
		}
	});
	
}
function setStatenum(selector){
	var statenum = Math.round(Math.random()*1E15);
	$(selector).val(statenum);
}