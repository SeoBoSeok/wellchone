// 이미지 경로가 잘 못되었거나 없을 경우
var fnChangeSource = function (o) {
	var $this = $(o);
	if ( !$this.hasClass("no-image") ) {
		var src = "/web/resources/images/common/";
		if ( $this.hasClass("main-image") ) src += "noImage02.png";
		else if ( $this.hasClass("contents-image") ) src += "viewSubNoImgBg.png";
		else src += "noImage01.png";
		$this.attr("src", src).addClass("no-image");
	}
};


//모바일에서 전화번호 클릭시 전화걸기(ie에서 클릭 안되게)
jQuery(function($){
	$(".tel-link").click(function() {
		if(navigator.userAgent.indexOf("MSIE") > -1) return false;
			else if(navigator.userAgent.indexOf("Trident/7.0") > -1) return false;
	});
});

// 화면 해상도
var nowZoom = 100; // 현재비율
var maxZoom = 200; // 최대비율(500으로 하면 5배 커진다)
var minZoom = 80; // 최소비율

function zoomIn()
{
    if (nowZoom < maxZoom)
    {
        nowZoom += 10; // 10%씩 커진다.
    }
    else
    {
        return;
    }
    document.body.style.zoom = nowZoom + "%";
}

function zoomOut()
{
    if (nowZoom > minZoom)
    {
        nowZoom -= 10; // 10씩 작아진다.
    }
    else
    {
        return;
    }
    document.body.style.zoom = nowZoom + "%";
}

function zoomDefault()
{
    nowZoom = 100;
    document.body.style.zoom = nowZoom + "%";
}

function printPage()
{
	var initBody;
	window.onbeforeprint = function()
		{
		initBody = document.body.innerHTML;
		document.body.innerHTML =  document.getElementById('printPage').innerHTML;
		};
		window.onafterprint = function(){
			document.body.innerHTML = initBody;
			};
			window.print();
			return false;
}

/* /select language
$(window).load(function() {

	$(".language").click(function(event){

		if (  $("#language_list").css("display") == "none" ) {
			$("#language_list").css("display","block");
		} else {
			$("#language_list").css("display","none");
		}

		event.preventDefault();
	});

	$("#language").mouseleave(function(event){
		$("#language_list").css("display","none");

		event.preventDefault();
	});
});
*/

//트위터 공유
function twitter(msg){
	var url = window.location.toString();
	var href = "http://twitter.com/share?text=" + encodeURIComponent(msg) + "&url=" + encodeURIComponent(url);
	var winProps = 'height=300, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href,'twitter',winProps);

	if(newWin){
		newWin.focus();
	}
}

//페이스북 공유
function facebook(msg){
	var url = window.location.toString();
	var href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url);
	var winProps = 'height=300, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href,'facebook',winProps);

	if(newWin){
		newWin.focus();
	}
}

//구글플러스 공유
function googleplus(){
	var url = window.location.toString();
	var href = "https://plus.google.com/share?url=" + encodeURIComponent(url);
	var winProps = 'height=400, width=400, resizable=yes, scrollvars=yes';
	var newWin = open(href,'googleplus',winProps);

	if(newWin){
		newWin.focus();
	}
}

//시나웨이보 공유
function sinaweibo(msg){
	var url = window.location.toString();
	var href = "http://service.weibo.com/share/share.php?appkey=&language=zh_cn&url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(msg);
	var winProps = 'height=300, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href,'sinaweibo',winProps);

	if(newWin){
		newWin.focus();
	}
}

//바이두 공유
function tiebabaidu(){
	var url = window.location.toString();
	var href = "http://tieba.baidu.com/i/app/open_share_api?link=" + encodeURIComponent(url);
	var winProps = 'height=450, width=650, resizable=yes, scrollvars=yes';
	var newWin = open(href,'tiebabaidu',winProps);

	if(newWin){
		newWin.focus();
	}
}

//네이버블로그 공유
function naverblog(msg){
	var url = window.location.toString();
	var href = "http://blog.naver.com/openapi/share?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(msg);
	var winProps = 'height=300, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href,'naverblog',winProps);

	if(newWin){
		newWin.focus();
	}
}


//카카오스토리 공유
function kakaostory(msg) {
	var url = window.location.toString();
	var href = "https://story.kakao.com/share?url=" + encodeURIComponent(url);
	var winProps = 'height=500, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href,'tiebabaidu',winProps);

	if(newWin){
		newWin.focus();
	}
}

function copyUrl(){
	var url = window.location.toString();	
	var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("복사 되었습니다.")
}




//select language
$(window).load(function() {

	$(".language").click(function(event){

		if (  $("#language_list").css("display") == "none" ) {
			$("#language_list").css("display","block");
		} else {
			$("#language_list").css("display","none");
		}

		event.preventDefault();
	});

	$("#language").mouseleave(function(event){
		$("#language_list").css("display","none");

		event.preventDefault();
	});
});



/*
function twitter(msg){
	var url = window.location.toString();
	var href = "http://twitter.com/share?text=" + encodeURIComponent(msg) + "&url=" + encodeURIComponent(url);
	var winProps = 'height=300, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href,'twitter',winProps);

	if(newWin){
		newWin.focus();
	}
}


function facebook(msg,image){
	var url = window.location.toString();
	var href = "http://www.facebook.com/sharer.php?s=100&p[url]=" + encodeURIComponent(url) + "&p[images][0] =" + encodeURIComponent(image);
	var winProps = 'height=300, width=500, resizable=yes, scrollvars=yes';
	var newWin = open(href,'facebook',winProps);

	if(newWin){
		newWin.focus();
	}
}



function kakaostory(msg) {
	var url = window.location.toString();
  Kakao.Story.share({
    url: encodeURIComponent(url),
    text: msg
  });
}
*/

//웹과 모바일 분기 사이즈이다
/*
var menuQuarter = '1200'
*/

//웹 메뉴 오픈
/*
$(document).ready(function(){
	$('.gnb, .con_wrap').on('mouseleave focusout',function(e){
		$('.gnb_wrap>li').stop().animate({'height':'0'},'swing',function(){
			$('.top_wrap').css('height', '0px');
			$('.gnb_wrap>li').removeClass('on');
		});
		$('.gnb_wrap .submenu').stop().animate({'height':'0'},'swing');
	});

	$('.gnb, .con_wrap, .gnb_wrap').on('mouseenter focusin',function(e){
		if ($('.gnb_wrap>li').children(".submenu").length > 0 ) {
			$('.top_wrap').css('height', 'auto');
			$('.gnb_wrap>li').stop().animate({'height':'390px'},'swing');
			$('.gnb_wrap .submenu').stop().animate({'height':'330px'},'swing');
		} else {
			$('.gnb_wrap .gnb>li').stop().css({'height':'95px'});
		}
	});

	$('.gnb').on('keydown',function(e){
		if(e.keyCode == 9){
			$("ul.gnb_wrap>li:eq("+$(e.target).parent().index()+")>a:eq(0)").focus();
		}
	});

	$('.submenu>li:last-child').on('keydown',function(e){
		if(e.keyCode == 9 && $(e.target).parent().parent().parent().index() != 3){
			$(".gnb>ul>li:eq("+($(e.target).parent().parent().parent().index())+")>a").focus();
		}else if(e.keyCode == 9 && $(e.target).parent().parent().parent().index() == 3){
			$(".total_sch>a").focus();
		}
	});

	$('.pkg_logo>a').on('keydown',function(e){
		if(e.keyCode == 9){
			//$("#").focus();
		}
	});

}); //ready end
*/

//모바일 메뉴 오픈
$(document).ready(function(){
	//마스크
	var handler = function(e){
		e.preventDefault();
	}
	
	$(".btn_search.search_open").click(function(e){
		$('.search_area').show();
		$("body").css("overflow","hidden");
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			e.preventDefault();
			$('#mask').hide();
			$('.search_area').hide();
			$(window).unbind('touchmove', handler);

		} else {
			$(this).addClass("active");
			e.preventDefault();
			$(window).bind('touchmove', handler);
			//포커스 추가위치
		}

	$('.btn_search.search_close').click(function(){
		$(this).parent().parent().find('a.search_open').focus();
		$("body").css("overflow","auto");
		$(".search_open").removeClass("active");
		$('.search_area').hide();
		$('#mask').hide();
	});
	return false;
	});
	
	var allmenuWidth = $(window).width();
	$('.utilnGnbWrap.mo .wnmGnbWrap').css({'right' : -allmenuWidth});
	$(".btn_nav2.open").click(function(e){
		
		$("body").css("overflow-y","hidden");
		$(".wnmGnbWrap").css("display","block");
		
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			e.preventDefault();
			$('#mask').hide();
			$(".wnmGnbWrap").animate({right:-allmenuWidth},200);
			
		} else {
			$(this).addClass("active");
			e.preventDefault();
			$('#mask').css({'background' : 'none' , "margin-right" : "210px"});
			$(".wnmGnbWrap").animate({right:0},200);
		}
		
		return false;
	});
	
	$('.sns_link > a').click(function (){
		$('.sns_link ul').slideToggle(300);
	});
	
	$('.link_sel > a').click(function (){
		$('.link_sel ul.lang').slideToggle(300);
	});
	
	//닫기 버튼 클릭시
	$('.btn_nav2.close').click(function(){
		$("body").css("overflow","auto");
		//$(".wnmGnbWrap").animate({right:-allmenuWidth},200);
		$(".wnmGnbWrap").animate({right:'-100%'},200);
		$(".btn_nav2.open").removeClass("active");
		return false;
	});

	//mask 웹 클릭시
	/*
	$('.wnmGnbWrap').click(function () {
		$("body").css("overflow","auto");
		$(".wnmGnbWrap").animate({right:-allmenuWidth},200);
		$(".btn_nav2.open").removeClass("active");
		$(".search_open").removeClass("active");
		$(window).unbind('touchmove', handler);
	});
	*/
	
	//모바일 depth1 클릭시
	/*
	$('.gnb_wrap > li > a').click( function (e) {
		if ( window.innerWidth < menuQuarter ) { //모바일에서 depth1 클릭시
			e.preventDefault(); //a태그 href 맊기
			$('.submenu').attr('style', 'height:0px;');
			var moveTarget = $(this).parent().find('.submenu');
			$('.gnb_wrap>li').attr('style', 'overflow:hidden; height:auto;');
			$('.gnb_wrap>li>a').attr('style', 'padding-top:0px;');
			$(moveTarget).attr('style', 'margin-top:0px;').stop().slideDown();

		}
	});
	*/

	$('.m-global_site li:last-child a').css({'background' : 'none'});
	//gnb 초기화
	/*
	if ( window.innerWidth < menuQuarter) { $('.utilnGnbWrap').addClass('mo'); $('body').css('overflow-x', 'auto') } else { $('.utilnGnbWrap.mo').removeClass('mo'); }
	*/
	//포토 팝업 호출
	/*$('.viewPic a').on('click', function (e) {
		var cont_seq = $(this).attr('cont_seq');
		 $.ajax({
			 type : "POST"
			 , async : false
			 , url : "/web/photoPopupLayer.do"
			 , data : {"cont_seq": cont_seq}
  			 , dataType : "json"
        	 , success : function(data) {
				// alert("Data: " + data + "\nStatus: " + status);
					 var str = "";
					 str += "<div class='photoPopupWrap'>";
					 str += "<div class='photoPopupWrapContents'>";
					 str += "<ul class='photoPopupSlide'>";
					  $.each(data.res, function(i, item) {
					 str += "<li>";
					 str += "<img src='/upload/village/"+item.save_file_nm+"' />";
					 str += "<div class='content'>"+item.nick_nm+"</div>";
					 str += "</li>";
					  });
					 str += "</ul>";
					 str += "<div class='photoNavWrap'>";
					 str += "<div id='photoPopupPager'>";
					 $.each(data.res, function(i, item) {
					 str += "<a data-slide-index='"+i+"' href=''><img src='/upload/village/"+item.save_file_nm+"' /></a>";
					 });
					 str += "</div>";
					 str += "</div>";
					 str += "</div>";
					 str += "<div class='photoPopupWrapMask' onclick='closePhotoPopup();'></div>";
					 str += "</div>";
					 $(document).find('body').append(str);
					 popupPosition();
					 $('.photoPopupSlide').bxSlider({
							pagerCustom: '#photoPopupPager',
							auto:true
					 });
		          }
		 });
	});*/

	//팝업 화면 사이즈 변할시
	$(function () {
		$(window).resize( function () {
			popupPosition ();
		});
	});


});

//팝업 포지션 잡아주기
//1000픽셀까진 센터 잡아주고, 그 이하는 90%잡아서 줄여준다.
function popupPosition () {
	if ( $(window).width() >= 1000 ) { //웹화면
		$('.photoPopupWrapContents').css('width', '');
		var left = ( $(window).width() - $('.photoPopupWrapContents').width() ) / 2;
		$('.photoPopupWrapContents').css('left', left);
	} else { //모바일 화면
		$('.photoPopupWrapContents').css('width', '90%');
		//alert($('.photoPopupWrapContents').width());
		var left = ( $(window).width() - $('.photoPopupWrapContents').width() ) / 2;
		$('.photoPopupWrapContents').css('left', left);
	}
	var top = ( $(window).height() - $('.photoPopupWrapContents').height() ) / 2 + document.body.scrollTop - 100; //(윈도우 세로값 - popup윈도우값 / 2) + 스크롤 값
	$('.photoPopupWrapContents').css('top', top);
}

function closePhotoPopup () { //팝업 닫기
	$('.photoPopupWrap').hide();
};

//모바일과 통합 하다보니 웹에선 보여지면안돼는 항목들이 추가 됐다. 따라서 해당 엘리먼트 그룹을 숨긴다. 1200px를 기준으로 GNB가 모바일용과 웹용이 나뉜다.

/*
$(window).resize ( function () {
	if ( window.innerWidth < menuQuarter ) {
		$('.utilnGnbWrap').addClass('mo');
	} else {
		$('.utilnGnbWrap.mo').removeClass('mo');
		$('.wnmGnbWrap').attr('style', '');
		
	}
});
*/

/* footer슬라이드 */
/*
$(document).ready( function () {
	var footerSlide = $('.footerSlide').bxSlider({
		minSlides:2,
		maxSlides:5,
		slideWidth:175,
		slideMargin:50,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev'
	});
});
*/

$(document).bind('mobileinit', function(){
	// jquery mobile ajax 끄기
	$.mobile.ajaxEnabled = false;
});

$(window).resize(function() {
	 //var allmenuWidth = $(window).width();
	 if($(document.activeElement).attr('type') === 'text') {

    } else {
       $("body").css("overflow","auto");
		//$(".all_menu2").animate({left:-allmenuWidth},100);
		//$(".all_menu2").css ('left',-allmenuWidth);
		$(".btn_nav2.open").removeClass("active");

		$(".search_open").removeClass("active");
		$('.search_area').hide();

		$('#mask').hide();
    }
});

var navCurrentParam1;
var navCurrentParam2;
var navCurrentParam3;
$(function() {
	var $topnav = $('.all_menu2 .all_menu2_con'),
		$topnavmn = $topnav.find('>li'),
		$topnavsbmn = $topnavmn.find('>ul');

	$topnavmn.children('a').click(function() {
		if ($(this).parent().is('li:has("ul")')) {
			if (!$(this).is('.on')) {
				$topnavmn.children('a').removeClass('on');
				$topnavsbmn.slideUp(250).find('>li >ul').hide();
				$(this).addClass('on');
				$(this).parent().find('>ul').slideDown(250).find('>li a').removeClass('on');
			} else {
				$(this).removeClass('on');
				$(this).parent().find('>ul').slideUp(250);
			}
			return false;
		} else {
			$topnavmn.children('a').removeClass('on');
			$topnavsbmn.slideUp(250);
			$(this).addClass('on');
		}
	});

	var $topnavmnDepth2 = $topnavsbmn.find('>li'),
		$topnavsbmnDepth2 = $topnavmnDepth2.find('>ul');
	$topnavmnDepth2.children('a').click(function() {
		if ($(this).parent().is('li:has("ul")')) {
			if (!$(this).is('.on')) {
				$topnavmnDepth2.children('a').removeClass('on');
				$topnavsbmnDepth2.slideUp(200);
				$(this).addClass('on');
				$(this).parent().find('>ul').slideDown(200).find('>li a').removeClass('on');
			} else {
				$(this).removeClass('on');
				$(this).parent().find('>ul').slideUp(200);
			}

			if ( $(this).parent().attr('LINK')==undefined ) {
				return false;
			}
		} else {
			$topnavmnDepth2.children('a').removeClass('on');
			$topnavsbmnDepth2.slideUp(200);
			$(this).addClass('on');
		}
	});

	var $topnavCurrent1 = $topnav.find('.nvparam'+navCurrentParam1);
	var $topnavCurrent2 = $topnav.find('.nvparam'+navCurrentParam1+'_'+navCurrentParam2);
	var $topnavCurrent3 = $topnav.find('.nvparam'+navCurrentParam1+'_'+navCurrentParam2+'_'+navCurrentParam3);

	function currentReset() {
		/* if (!$topnavCurrent1.children('a').is('.on')) {
			$topnavmn.children('a').removeClass('on').parent().find('>ul').hide().find('>li a').removeClass('on');
			$topnavCurrent1.children('a').addClass('on').parent().find('>ul').show();
			$topnavCurrent2.children('a').addClass('on').parent().find('>ul').show();
			$topnavCurrent3.children('a').addClass('on');
		} */
		$topnavmn.find('ul').hide();
		var $on = $topnav.find(".on");
		if ( $on.length > 0 ) {
			var $ul = $on.parents("ul");
			$ul.show();
			$ul.prev("a").addClass("on");
		}
	}
	currentReset();
});


//레이어 팝업 열고 닫기
function layeropen(layerName) {
	var layer = document.getElementById("layer");
	var divs = layer.getElementsByTagName("div");
	var display_stage;

	for (i = 0; i < divs.length; i++) {
		display_stage = divs[i].style.display;

		if(display_stage == "block") {
			divs[i].style.display = "none";
			break;
		}
	}
	document.getElementById(layerName).style.display = "block";
}
function layerClose(parentObj) {
	parentObj.style.display = "none";
}


/*
$(document).ready( function () {
	//공지, 기사 기동스크립트
	$('.notice .bx-slide-bottom').bxSlider({
		mode:'vertical',
		minSlides: 3,
		maxSlides: 3,
		onSliderLoad: function() {
		//더보기 버튼 추가한다... 뭐 이래 맹글어놨대...
			$('.bottomNewsWrap .notice .bx-controls-direction').append("<a href='/web/board.do?menuIdx=118' class='bx-more'>공지사항 더보기</a>");
		}
	});
	$('.news .bx-slide-bottom').bxSlider({
		mode:'vertical',
		minSlides: 3,
		maxSlides: 3,
		onSliderLoad: function() {
		//더보기 버튼 추가한다... 뭐 이래 맹글어놨대...
			$('.bottomNewsWrap .news .bx-controls-direction').append("<a href='/web/board.do?menuIdx=119' class='bx-more'>기사 더보기</a>");
		}
	});
});
*/

/* 서브페이지  */

$(document).ready( function () {
	//익스9에서 :last-child 속성이 없어서 자바 스크립트로 붙여준다.
	$('.btnPageNav:last-child').addClass('last-child');

	//페이지네비용 스크립트
	/*
	$('.pageNav div').on("mouseover", function () {
		$(this).find('ul').show();
	}).on("mouseout", function () {
		$(this).find('ul').hide();
	});
	*/
	
	$(".btnPageNav").on("mouseover mouseout focusin", function(event){
		if(event.type == "mouseout"){
			$(this).children("div").css("display","none");
		}else{
			$(this).children("div").css("display","block");
		}
	});
	$(".pageNavSubmenu > a:last-child").on("focusout",function(){
		$(this).parent().css("display","none");
	});


	/*//페이지 추가 (더보기) 스크립트
	$('.btnMoreView').on("click", function () {

		lastPageNum class를 가진 div안에 현재까지 로드된 페이지 번호를 적어둔다.
		해당 페이지 번호는 ajax통신을 통해 갱신 반영 되고
		번호의 제한은 없다. ( 로드된 DB 행갯수를 적어도 돼고, 페이지 번호를 적어 놔도 된다. )
		해당 번호를 넘겨주면 ajax에서 처리한뒤 그정도를 이 자바스크립트로 보내 준다. ( jsp 수준에서 html 맵핑을 하여서 들어와야한다. )


		var $pageNum = $('.lastPageNum').attr('data').split('|');
		$('.lastPageNum').removeClass('lastPageNum'); //고정값 하나만을 불러오기위해 나머지 앵커들의 class를 제거 한다.
		alert(" data1 : " + $pageNum[0] + "\n data2 : " + $pageNum[1] + "\n data2 : " + $pageNum[2]);

		$.post("./ajaxReturnData.html",
		{
			data1:$pageNum[0],
			data2:$pageNum[1],
			data3:$pageNum[2]
		},
		function(data,status){
		 //alert("Data: " + data + "\nStatus: " + status);
		 $('.list').append(data);
		});
	});*/

	//탭메뉴
	/*$('#categoryWrap .btnWrap div').on("click", function () {

		$('#categoryWrap .btnWrap div').removeClass('on');
		$(this).addClass('on');

		$('.contentWrap').hide();
		$(".wrap" + $(this).attr('data') ).show();

	});*/
	
	// h_open_menu
	$('.h_open_menu a').click(function(){
		$('.htc_wrap').slideDown(250);
	});
	
	$('.h_close_menu a').click(function(){
		$('.htc_wrap').slideUp(250);
	});
	
	// mobile search
	$('.total_sch > a').on('click', function(){
		$('.m_search_box').slideToggle();
	});
				
	//mask 웹 클릭시
	/*$('.wnmGnbWrap').click(function () {
		$("body").css("overflow","auto");
		$(".wnmGnbWrap").animate({right:-allmenuWidth},200);
		$(".btn_nav2.open").removeClass("active");
		$(".search_open").removeClass("active");
		$(window).unbind('touchmove', handler);
	});*/
		
	//테마마을 별점
	$('#travelList').on("mouseover", ".item-link", function () {
		//$('.bbsListWrap.type02 .item .pointstar').show();
		$(this).find('.pointStar').show();
	}).on("mouseout", ".item-link", function () {
		//$('.bbsListWrap.type02 .item .pointstar').hide();
		$(this).find('.pointStar').hide();
	});

	//테마마을 이벤트 더보기
	$('#travelList').on("mouseover", ".event", function () {
		//$('.bbsListWrap.type02 .item .eventList').show();
		$(this).css('overflow', 'visible');
		$(this).find('.eventList').show();
	}).on("mouseout", ".event", function () {
		//$('.bbsListWrap.type02 .item .eventList').hide();
		$(this).css('overflow', 'hidden');
		$(this).find('.eventList').hide();
	});

	//사진첩보기
	$('.bx-slide-detail').bxSlider({
		pagerCustom: '#bx-pager-detail',
		auto : true
	});
	
	//상세검색 label 선택
	var selectTarget = $('.detail_search2 select');

	selectTarget.on('blur', function(){
		$(this).parent().removeClass('focus');
	});
	
	selectTarget.change(function(){
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});
	
	//탭메뉴 초기화
	$('.detailWrap').hide();
	$('.detailWrap.wrap1').show();

	//detail page 탭메뉴 클릭시
	$('.detailNav li').on("click", function () {
		var num = $(this).attr('data');
		if ( num != 'n' ) {

			$('.detailNav li').removeClass('active');
			$(this).addClass('active');
			//목록보기에서도 쓰고있어서 함수로 빼둔다.
			tabAcc(num);
		}

	});

	$("img").error(function() {
		fnChangeSource(this);
	});

});

/*
체험/축제 탭에서 상세보기를 눌렀을경우
몇가지 변수를 가지고 ajax를 호출해서 html을 불러온뒤 .detailWrap.ajax 웹에 집어넣은뒤 해당 디브만 살린다.
문제는 목록보기 버튼을 눌렀을경우 어느탭으로 돌아갈지를 기억하고 있어야한다.
*/
function experienceDetail (data) { //상세보기를 눌렀을경우
	var $data_arr = data.split('|');
	alert(" returnNum : " + $data_arr[0] + "\n data2 : " + $data_arr[1] + "\n data2 : " + $data_arr[2] + "\n data3 : " + $data_arr[3]);

	$.post("./experienceDetailPage.html",
	{
		retuenNum:$data_arr[0],
		data1:$data_arr[1],
		data2:$data_arr[2],
		data3:$data_arr[3]
	},
	function(data,status){
		//alert("Data: " + data + "\nStatus: " + status);
		//$('.list').append(data);
		$('.detailWrap').hide();
		$('.detailWrap.ajax').html('').append(data).show();
	});
}

function returnList () { //상세보기중 목록보기를 눌렀을경우
	var num = $('.detailNav li.active').attr('data');
	alert(num);
	tabAcc(num);
}
function tabAcc (num) {
	$('.detailWrap').hide();
	$('.detailWrap.wrap' + num).show();
}

//게시판 및 이용후기 사용자 tag none 처리 
$(document).ready( function () {
	$(window).resize( function (e) {
		if ( $(window).width() < 1200 ) {
			$('.bbsDetailWrap table, .bbsDetailWrap table tr td, .bbsDetailWrap table tr td p, .chart table tr td p, .chart.review table, .chart.review img, .reading_chart table, .chart.review table td, .chart.review table td p, .reading_chart table tr td, .reading_chart table tr td p, .reading_chart table tr td.contents, .reading_chart table tr td.contents p').removeAttr('style');
		}
	});	
	$(window).trigger('resize');
});

$(function() {
	$('.dot3').dotdotdot({
		ellipsis:'...',
		watch: 'window'
	});
});

/*/top select
$(document).ready(function() {
	$('.language_select').styleSelect({
		styleClass: 'language_select',
		optionsTop: '24px',
		optionsWidth: 1,
		speed: 'fast'
	});
});*/


//container select
$(document).ready(function() {
	$('.selectSate, .selectArea').styleSelect({
		styleClass: 'selectSate',
		optionsTop: '30px',
		optionsWidth: 1,
		speed: 'fast'
	});
});


//footer select
/*$(document).ready(function() {
	$('.footer_site').styleSelect({
		styleClass: 'footer_site',
		optionsTop: '31px',
		optionsWidth: 1,
		speed: 'fast'
	});
});*/



$(".snslinke").on()

//스크롤 내리면
	$(document).ready(function(){
		$("#back-top").hide();
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('#back-top').fadeIn();
					//$('#recommended').fadeIn();
					//$('#recommended').animate({bottom: '0px'}, {queue:false, duration: 800});				
				} else {
					$('#back-top').fadeOut();
					//$('#recommended').fadeOut();
					//$('#recommended').animate({bottom: '-50px'}, {queue:false, duration: 800});				
				}
			});

			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
				return false;
			});
		});

	});

//모바일 링크 먹통만들기
$(document).ready ( function () {
	$('.pageNav .btnPageNav > a').click(function() {
		if ( $(window).innerWidth <= 1200 ) {
			return false;
		} else {
			return true;
		}
	});
});


$(function(){
	$('.btn_nav2.open').on('click',function(){
		$('.top_wrap').css('overflow','inherit');
	});
	$('.btn_nav2.close').on('click',function(){
		$('.top_wrap').css('overflow','hidden');
	});
});