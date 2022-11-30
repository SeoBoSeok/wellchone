<?php
// 이 파일은 새로운 파일 생성시 반드시 포함되어야 함
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

$g5_debug['php']['begin_time'] = $begin_time = get_microtime();

if (!isset($g5['title'])) {
    $g5['title'] = $config['cf_title'];
    $g5_head_title = $g5['title'];
}
else {
    // 상태바에 표시될 제목
    $g5_head_title = implode(' | ', array_filter(array($g5['title'], $config['cf_title'])));
}

$g5['title'] = strip_tags($g5['title']);
$g5_head_title = strip_tags($g5_head_title);

// 현재 접속자
// 게시판 제목에 ' 포함되면 오류 발생
$g5['lo_location'] = addslashes($g5['title']);
if (!$g5['lo_location'])
    $g5['lo_location'] = addslashes(clean_xss_tags($_SERVER['REQUEST_URI']));
$g5['lo_url'] = addslashes(clean_xss_tags($_SERVER['REQUEST_URI']));
if (strstr($g5['lo_url'], '/'.G5_ADMIN_DIR.'/') || $is_admin == 'super') $g5['lo_url'] = '';

/*
// 만료된 페이지로 사용하시는 경우
header("Cache-Control: no-cache"); // HTTP/1.1
header("Expires: 0"); // rfc2616 - Section 14.21
header("Pragma: no-cache"); // HTTP/1.0
*/
?>
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<?php
if (G5_IS_MOBILE) {
    echo '<meta name="viewport" id="meta_viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10">'.PHP_EOL;
    echo '<meta name="HandheldFriendly" content="true">'.PHP_EOL;
    echo '<meta name="format-detection" content="telephone=no">'.PHP_EOL;
} else {
    echo '<meta http-equiv="imagetoolbar" content="no">'.PHP_EOL;
    echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">'.PHP_EOL;
}

if($config['cf_add_meta'])
    echo $config['cf_add_meta'].PHP_EOL;
?>
<title><?php echo $g5_head_title; ?></title>
<?php
// $shop_css = '';
// if (defined('_SHOP_')) $shop_css = '_shop';
// echo '<link rel="stylesheet" href="'.run_replace('head_css_url', G5_THEME_CSS_URL.'/'.(G5_IS_MOBILE?'mobile':'default').$shop_css.'.css?ver='.G5_CSS_VER, G5_THEME_URL).'">'.PHP_EOL;
?>
<!--[if lte IE 8]>
<script src="<?php echo G5_JS_URL ?>/html5.js"></script>
<![endif]-->
<script>
// 자바스크립트에서 사용하는 전역변수 선언
var g5_url       = "<?php echo G5_URL ?>";
var g5_bbs_url   = "<?php echo G5_BBS_URL ?>";
var g5_is_member = "<?php echo isset($is_member)?$is_member:''; ?>";
var g5_is_admin  = "<?php echo isset($is_admin)?$is_admin:''; ?>";
var g5_is_mobile = "<?php echo G5_IS_MOBILE ?>";
var g5_bo_table  = "<?php echo isset($bo_table)?$bo_table:''; ?>";
var g5_sca       = "<?php echo isset($sca)?$sca:''; ?>";
var g5_editor    = "<?php echo ($config['cf_editor'] && $board['bo_use_dhtml_editor'])?$config['cf_editor']:''; ?>";
var g5_cookie_domain = "<?php echo G5_COOKIE_DOMAIN ?>";
<?php if (defined('G5_USE_SHOP') && G5_USE_SHOP) { ?>
var g5_theme_shop_url = "<?php echo G5_THEME_SHOP_URL; ?>";
var g5_shop_url = "<?php echo G5_SHOP_URL; ?>";
<?php } ?>
<?php if(defined('G5_IS_ADMIN')) { ?>
var g5_admin_url = "<?php echo G5_ADMIN_URL; ?>";
<?php } ?>
</script>
<?php
// add_javascript('<script src="'.G5_JS_URL.'/jquery-1.12.4.min.js"></script>', 0);
// add_javascript('<script src="'.G5_JS_URL.'/jquery-migrate-1.4.1.min.js"></script>', 0);
if (defined('_SHOP_')) {
    if(!G5_IS_MOBILE) {
        add_javascript('<script src="'.G5_JS_URL.'/jquery.shop.menu.js?ver='.G5_JS_VER.'"></script>', 0);
    }
} else {
    add_javascript('<script src="'.G5_JS_URL.'/jquery.menu.js?ver='.G5_JS_VER.'"></script>', 0);
}
// add_javascript('<script src="'.G5_JS_URL.'/common.js?ver='.G5_JS_VER.'"></script>', 0);
// add_javascript('<script src="'.G5_JS_URL.'/wrest.js?ver='.G5_JS_VER.'"></script>', 0);
// add_javascript('<script src="'.G5_JS_URL.'/placeholders.min.js"></script>', 0);
add_stylesheet('<link rel="stylesheet" href="'.G5_JS_URL.'/font-awesome/css/font-awesome.min.css">', 0);

if(G5_IS_MOBILE) {
    add_javascript('<script src="'.G5_JS_URL.'/modernizr.custom.70111.js"></script>', 1); // overflow scroll 감지
}
if(!defined('G5_IS_ADMIN'))
    echo $config['cf_add_script'];
?>
<link rel="shortcut icon" href="../images/common/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" type="text/css" href="resources/css/jquery.bxslider.css" />	
<link rel="stylesheet" type="text/css" href="resources/css/common.css" />
<link rel="stylesheet" type="text/css" href="resources/css/main.css" />
<link rel="stylesheet" type="text/css" href="resources/css/board.css" />
    

<link rel="stylesheet" type="text/css" href="../common/resources/css/global_common.css" />
<link rel="stylesheet" href="../common/resources/css/jquery-ui-1.9.2.custom.min.css" />
<script type="text/javascript" src="resources/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="../common/resources/js/global_common.js"></script>
<script type="text/javascript" src="resources/js/common.js"></script>
<script type="text/javascript" src="resources/js/html5.js"></script>
<script type="text/javascript" src="resources/js/jquery.bxslider.js"></script>
<script type="text/javascript" src="resources/js/selectivizr.js"></script>
<script type="text/javascript" src="resources/js/style_select.js"></script>

<script type="text/javascript" src="resources/js/jquery.dotdotdot.js"></script>
<script type="text/javascript" src="resources/js/main.js"></script>
<script type="text/javascript">
		function total_search(){
			$('#searchFrm').submit();
	    } 
		function loadUp() {
			$(".loading_screen").css("display","block");
			return;
		}
		function naver_logout(){
			$("#footer").append("<iframe style='display:none;' src='https://nid.naver.com/nidlogin.logout'></iframe>");		
	        location.href="/web/logout.do";        
	    }
	</script>
		
	
		
		
		<script type="text/javascript">
			//웹 메뉴
			$(document).ready(function(){
				
				$('.gnb > ul, .con_wrap').on('mouseleave focusout',function(e){
					$('.gnb_wrap>li').stop().animate({'height':'0'},'swing',function(){
						$('.top_wrap').css('height', '0px');
						$('.gnb_wrap>li').removeClass('on');
					});
					$('.gnb_wrap .submenu').stop().animate({'height':'0'},'swing');
				});
			
				$('.gnb > ul, .con_wrap, .gnb_wrap').on('mouseenter focusin',function(e){
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
				
				$('a').click(function(){
					var classNm = $(this).attr("class") != undefined ? $(this).attr("class") : "";
					var link = $(this).attr("href");
					var target = $(this).attr("target");
					if(link == "#" || link == "javascript:void(0)" || target == "_blank") {
						return;
					} else if (classNm.indexOf("load_none") < 0) {
						$(".loading_screen").css("display","block");
					};
				});

				// P1(처음 페이지 로드시) = autoDelay + pause + speed
				// P2 = pause + speed
				// ...
				// P1 = setTimeout(3000) + pause + speed 
				var visual_main = $('.visual > ul').bxSlider({
					slideWidth: 1920,
					minSlides: 1,
					maxSlides: 1,
					moveSlides: 1,
					slideMargin: 0,
					mode: 'fade',
					auto: true,
					autoControls: true,
					autoDelay: 5000, //자동실행 전 기다리는 시간
					pause: 10000, // 페이지당 머무는 시간
					speed: 1000,
					pager: true,
					pagerType: 'short',
					adaptiveHeight :true,
					touchEnabled : (navigator.maxTouchPoints > 0),
					onSlideAfter : function($slideElement, oldIndex, newIndex) { // 페이지 변환 뒤
						var current_index = parseInt(newIndex+1);
						if(current_index == 1) { // 첫페이지일 때
							visual_main.stopAuto();
							setTimeout(function () {
								visual_main.startAuto();
					        }, 5000);
						}
					}
				});
				/* 
				$('.visual > ul').bxSlider({
					slideWidth: 1920,
					minSlides: 1,
					maxSlides: 1,
					moveSlides: 1,
					slideMargin: 0,
					mode: 'fade',
					auto: true,
					autoControls: true,
					pause: 7000,
					speed: 1000,
					pager: true,
					pagerType: 'short',
					adaptiveHeight :true,
					touchEnabled : (navigator.maxTouchPoints > 0),
				});
				 */
				$('.heritage_info .slide ul').bxSlider({
					mode: 'fade',
					slideWidth: 730,
					minSlides: 1,
					maxSlides: 1,
					moveSlides: 1,
					slideMargin: 0,
					auto: true,
					autoControls: false,
					pagerType: 'short',
					touchEnabled : (navigator.maxTouchPoints > 0)
				});
				
				$('.travel_info .slide ul').bxSlider({
					slideWidth: 400,
					minSlides: 1,
					maxSlides: 1,
					moveSlides: 1,
					slideMargin: 0,
					auto: true,
					autoControls: false,
					pagerType: 'short',
					touchEnabled : (navigator.maxTouchPoints > 0)
				});
				
				$('.memory ul').bxSlider({
					slideWidth: 300,
					minSlides: 1,
					maxSlides: 8,
					moveSlides: 1,
					slideMargin: 0,
					pager: false,
					auto: true,
					autoControls: false,
					controls: false,
					randomStart: true,
					touchEnabled : (navigator.maxTouchPoints > 0)
				});
				
				$('.bbs_slide ul').bxSlider({
					mode: 'vertical',
					minSlides: 1,
					maxSlides: 1,
					moveSlides: 1,
					slideMargin: 0,
					auto: true,
					autoControls: true,
					pager: false,
					touchEnabled: (navigator.maxTouchPoints > 0)
				});	
					
				//네비게이션
				
				$('#section1').addClass('open')
				$('#section2').addClass('open')
				
			}); //ready end
			
			var isVisible = false;
			var isVisible2 = false;
			$(window).on('scroll',function() {
			    
				//if (checkVisible($('#section3'))&&!isVisible) {
			    //	$('#section3').addClass('open')
			    //    isVisible=true;
			    //}
			    
			    if (checkVisible($('#section4'))&&!isVisible2) {
			        $('#section4').addClass('open')
			        isVisible2=true;
			    }
			});
						
			function checkVisible( elm, eval ) {
			    eval = eval || "object visible";
			    var viewportHeight = $(window).height(), // Viewport Height
			        scrolltop = $(window).scrollTop(), // Scroll Top
			        y = $(elm).offset().top,
			        elementHeight = $(elm).height();   
			    
			    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
			    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
			}
						
		</script>
		
	
	
	<link rel="stylesheet" href="../common/resources/css/jquery-ui-timepicker-addon.css" />
				
	<style>.pageNavWrap { display:none; }
		#content { width:100%; margin-top:0px; }
	</style>
</head>
<body<?php echo isset($g5['body_script']) ? $g5['body_script'] : ''; ?>>
<?php
if ($is_member) { // 회원이라면 로그인 중이라는 메세지를 출력해준다.
    $sr_admin_msg = '';
    if ($is_admin == 'super') $sr_admin_msg = "최고관리자 ";
    else if ($is_admin == 'group') $sr_admin_msg = "그룹관리자 ";
    else if ($is_admin == 'board') $sr_admin_msg = "게시판관리자 ";

    echo '<div id="hd_login_msg">'.$sr_admin_msg.get_text($member['mb_nick']).'님 로그인 중 ';
    echo '<a href="'.G5_BBS_URL.'/logout.php">로그아웃</a></div>';
}
?>

<span itemscope="" itemtype="http://schema.org/Organization" style="display:none">
	<link itemprop="url" href="index.do.html">
	<a itemprop="sameAs" href="https://www.facebook.com/welchontour"></a>
	<a itemprop="sameAs" href="https://blog.naver.com/welchon4u"></a>
	<a itemprop="sameAs" href="https://www.instagram.com/welchon1417/"></a>
	<a itemprop="sameAs" href="https://www.youtube.com/user/welchon4u"></a>
</span>

<div class="loading_screen">
	<div class="inner">
		<div><img src="resources/images/common/loading_screen.gif" alt="" /></div>
		<p>요청하신 정보를 조회중입니다. <br />잠시만 기다려주세요.</p>
	</div>
</div>


<div class='wrap' style='position:relative;'>