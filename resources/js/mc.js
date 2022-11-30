var DEBUG = true;
function getJSON(targetURL, params, callback){
	var promise = $.ajax({
		url : targetURL, 
		type: "POST", 
		data : params, 
		dataType : "json", 
		async: true,
		cache : false
	}).error(errorProc);
	
	promise.then(function(data){
		if(!!callback){
			callback(data);
		}
	});
	return promise;
}
function getSyncJSON(targetURL, params, callback){
	var promise = $.ajax({
		url : targetURL, 
		type: "POST", 
		data : params, 
		dataType : "json", 
		async: false,
		cache : false
	}).error(errorProc);
	
	promise.then(function(data){
		if(!!callback){
			callback(data);
		}
	});
	return promise;
}
function errorProc(jqXHR,textStatus,errorThrown){
	if(jqXHR.status == 401){
		var returnURL = location.pathname + location.search;
		if(confirm("세션이 끊어졌습니다.\n로그인 후 다시 시도해 주세요.\n로그인페이지로 이동하시겠습니까?")){
			window.top.location.href = "/super/login/index.do?returnURL="+returnURL;
		}
	}else if(jqXHR.status == 403){
		var returnURL = location.pathname + location.search;
		if(confirm("새로운 사용자가 로그인하였거나, 로그아웃되었습니다.\n로그인페이지로 이동하시겠습니까?")){
			window.top.location.href = "/super/login/index.do?returnURL="+returnURL;
		}
	}else if(jqXHR.status == 404){
		alert("요청하신 페이지를 찾을수 없습니다.");
	}else{
//		var msg = $.parseJSON(jqXHR.responseText);
//		if("Y"==msg.debug){
//			alert("=================에러코드("+jqXHR.status+")=================\n"+jqXHR.statusText+" 자세한 에러내용은 콘솔확인\n====================END====================");
//			console.error(msg.error_message);
//		}else{
			alert("============================\n관리자에게 문의하십시오\n=====================END====================");
//		}
	}
}
if(!String.prototype.startsWith) {
	String.prototype.startsWith = function(str){
		if (this.length < str.length) { return false; }
		return this.indexOf(str) == 0;
	}
}
if(!String.prototype.endsWith) {
	String.prototype.endsWith = function(str){
		if (this.length < str.length) { return false; }
		return this.lastIndexOf(str) + str.length == this.length;
	}
}

$(function(){
	if(!!$.blockUI){
		$.blockUI.defaults = {
				message : "<img src='/images/common/ajax-loader.gif' alt='로딩중...'/> 페이지 로딩중입니다.",
			    overlayCSS:  { 
			        backgroundColor: '#968d8d', 
			        opacity:         0.6, 
			        cursor:          'wait' 
			    }, 
			    centerX: true, // <-- only effects element blocking (page block controlled via css above) 
			    centerY: true,
			    bindEvents: true,
			    constrainTabKey : true,
			    showOverlay : true,
				css : {
				    border: 'none', 
				    padding: '5px', 
				    backgroundColor: '#676767', 
				    '-webkit-border-radius': '10px', 
				    '-moz-border-radius': '10px', 
				    opacity: .6, 
				    color: '#fff'
				}
		}
	}
});

function submitHiddenForm(b,e){
	var a=$("#_hidden_iframe_");
	if(!a[0]){
		a=$('<iframe id="_hidden_iframe_" name="_hidden_iframe_" style="display: none;"></iframe>');
		$("body").append(a)
	}
	var d=$("#_hidden_form_");
	if(!d[0]){
		d=$('<form method="post" id="_hidden_form_" target="_hidden_iframe_" style="display: none;"></form>');
		$("body").append(d)
	}
	d.empty();
	d.attr("action",b);
	for(var c in e){
		if(e.hasOwnProperty(c)){
			$('<input type="hidden">').attr("name",c).attr("value",e[c]).appendTo(d)
		}
	}
	d.submit();
}

//화면캡쳐(오브젝트,파일명)
function capture(captureObj,file_name) {
	html2canvas($(captureObj), {
		//allowTaint: true,
		//taintTest: false,
		useCORS: true,
		//proxy: '/etc/proxy_image',
		onrendered: function(canvas) {
			var image = canvas.toDataURL();
			submitHiddenForm("/etc/bypass_image", { image : image, filename:file_name+".png"});
		}
	});
}

function popOpen(url, title, width, height) {
	var w = width; // 팝업창 넓이
	var h = height; // 팝업창 높이
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	var settings = 'height=' + h + ',';
	settings += 'width=' + w + ',';
	settings += 'top=' + wint + ',';
	settings += 'left=' + winl + ',';
	settings += 'scrollbars=yes,';
	settings += 'resizable=yes';
	window.open(url, title, settings);
}

function twtLink(){
	var shortUrl = shorturl(location.href);
	var title = encodeURIComponent($("title").text());
	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("[CMS데모]") + title + ":" + "&url=" + shortUrl);
}

function fbLink(){
	var title = encodeURIComponent($("title").text());
	window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(location.href));
}
function ksLink(){
	var title = $("title").text();
	var shortUrl = shorturl(location.href);
	Kakao.Story.share({
		url: shortUrl,
		text: $("title").text()
	});
}

function shorturl(url){
	var rst = url;
	$.ajax({
		type : "POST",
		url : "/shorturl.do",
		async: false,
		data : {
			longUrl : encodeURIComponent(url),
			login : "o_3qojukp8ip",
			apiKey : "R_c52d594730d94c058959c1e12efa17da",
			format : "xml"
		},
		dataType : "text",
		success : function(transUrl){
			rst = transUrl;
		}
	});	
	return rst;
}
function copyLink(){
	window.prompt('아래의 URL을 복사하여 사용하실수 있습니다.', location.href);
}


(function($){
	$.fn.swapClass = function(on, off) {
		if(this.hasClass(off)){
			this.removeClass(off).addClass(on);
		}else if(this.hasClass(on)){
			this.removeClass(on).addClass(off);
		}else{
			this.addClass(on);
		}
		return this;
	}
	
	//form 파라미터를 객체로 변환
	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
	
	//긴문자열 ...처리
	$.cutString = function(str, size) {
		if($.checkByte(str) > size){
			var result = "";
			for(var i=0, j=0; j<size; i++, j++){
				if(str.charAt(i) >= ' ' && str.charAt(i) <= '~'){;}			
				else {j++;}
				result += str.charAt(i);
			}
			return result + "...";
		}else{
			return str;
		}
	};
	
	//글자수 제한하기
	$.fn.textlimit = function(o) {
	    o = $.extend({
	    	text_e : "textarea",
	    	count_e : null,	    	
	    	text_max : 300,
	    }, o || {});

	    return this.each(function() { 
	        var _wrap = $(this), _text = $(o.text_e, _wrap), _count_area = $(o.count_e, _wrap);
	        _text.on("keyup paste", function(){
	        	if($(this).val().length > o.text_max){
	        		alert("글자 입력수가 초과하였습니다.");
	        		_text.val(_text.val().substr(0, o.text_max));
	        	}
	        	if(!!_count_area)
	        		_count_area.text($(this).val().length);
	        });
	    });
	};
	
	//byte수 가져오기
	$.checkByte = function(str) {
		var strByte=0;
		for(var i=0; i<str.length; i++){
			if(str.charAt(i) >= ' ' && str.charAt(i) <= '~' )
				strByte++;
			else
				strByte += 2;
		}
		return strByte;
	};
	
	//byte수 만큼 문자 가져오기
	$.byteStr = function(str, len) {
		var strByte=0;
		var result = "";
		for(var i=0; i<str.length; i++){
			if(str.charAt(i) >= ' ' && str.charAt(i) <= '~' )
				strByte++;
			else
				strByte += 2;
			if(strByte > len){
				break;
			}
			result += str.charAt(i);
		}
		return result;
	};
	
	//숫자만 입력
	$.Number = function(str) {
		if ((/[^0-9]/g).test(str)){
			str = 0
		}else{
			str = Number(str);
        }
		return str;
	};
	
	//세자리 단위 콤마
	$.addComma = function(str) {
		var reg = /(^[+-]?\d+)(\d{3})/;
		str += '';
		while(reg.test(str))
			str = str.replace(reg, '$1' + ',' + '$2');
		return str;
	};
	
	//오라클의 nvl과 같은기능
	$.nvl = function(str, replacer){
		if(str == null || str == undefined){
			return (replacer == undefined ? "" : replacer);
		}else{
			return str;
		}
	}
	
	//문자열 포함여부 배열로 받음
	$.inStringArray = function(str, array){
		var rst = false;
		$.each(array, function(i, text){
			if(str.indexOf(text) > -1){
				rst = true;
				return false;
			}
		});
		return rst;
	}
	
	//url에 링크주기
	$.addLink = function(str) {
		return str.replace(/https?:\/\/(\w*:\w*@)?[-\w.]+(:\d+)?(\/([\w\/_.]*(\?\S+)?)?)?/gim, "<a href='$&' target='_blank'>$&</a>");
	};
})(jQuery);