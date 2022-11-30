<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/head.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    define('G5_IS_COMMUNITY_PAGE', true);
    include_once(G5_THEME_SHOP_PATH.'/shop.head.php');
    return;
}
include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>

<!-- 상단 시작 { -->
    <div id="header">
		
		
		<div class="h_top">
			<div class="h_topWrap">
				
				<div class="sns_link">
					<a href="javascript:void(0)">공주여행 SNS 바로가기</a>
					<ul>
						<li><a href='https://story.kakao.com/ch/welchon' target='_blank' title="카카오스토리 새창열림"><img src='../images/header/h_kakao.png' alt="카카오스토리"/>카카오스토리</a></li>
						
						<li><a href='http://blog.naver.com/welchon4u' target='_blank' title="네이버블로그 새창열림"><img src='../images/header/h_blog.png' alt="네이버블로그"/>네이버블로그</a></li>
						<li><a href='https://www.youtube.com/user/welchon4u' target='_blank' title="유투브 새창열림"><img src='../images/header/h_youtube.png' alt="유튜브"/>유튜브</a></li>
						<li><a href='https://instagram.com/welchon_official' target='_blank' title="인스타그램 새창열림"><img src='../images/header/h_instagram.png' alt="인스타그램"/>인스타그램</a></li>
					</ul>
				</div>
				<!-- <a href="village/townGrade.do%EF%B9%96menuIdx=615.html" class="h_pkg"><img src="../images/header/h_pkg_logo.png" alt="" /></a>
				<a href="sub_index.do.html" class="policy_info">농촌여행 활성화 사업</a> -->
				<ul class="util">
					
			    	
			        <li><a href="/bbs/login.php">로그인</a></li>
			        
			    	<!-- <li><a href="siteMap.do%EF%B9%96menuIdx=190.html">사이트맵</a></li> -->
			    	<!-- <li class="link_sel">
						<a href="javascript:void(0)">Language</a>
						<ul class="lang">
							<li><a href="http://english.welchon.com/web/index.do" target="_blank" title="영문사이트 새창열림">English</a></li>
							<li><a href="http://chinese.welchon.com/web/index.do" target="_blank" title="중문사이트 새창열림">中文</a></li>
						</ul>
			    	</li> -->
			    </ul>
			</div>
   		</div>
   		
   		
			
			
			<div class="h_wrap">
				<h1><a href="index.do.html"><img src="../images/header/logo.png" alt="농촌여행 공주여행" /></a></h1>
				<div class="gnb">
					<ul>
						<li><a href="recommendCourseList.do%EF%B9%96menuIdx=43&amp;yearyyyy=2021&amp;monthmm=01.html">추천여행</a></li>
						<li><a href="travel/sites.do%EF%B9%96menuIdx=499&amp;sort_condition=2.html">농촌여행</a></li>
						<li><a href="board.do%EF%B9%96menuIdx=178.html">여행정보</a></li>
						<li><a href="shareList.do%EF%B9%96menuIdx=840.html">여행공유</a></li>
					</ul>
					<div class="total_sch">
						<form action="total/search.do.html" method="post" id="searchFrm" name="searchFrm" onSubmit="loadUp()">
							
							<input type="hidden" name="menuIdx" value="189" />
							<input type="text" name="total_keyword" value="" placeholder="내가 가고 싶은 여행지를 입력해보세요!" />
							<input type="button" value="" onclick="total_search();" />
						</form>
					</div>
					<div class="allmenu_btn"><a href="#"><img src="../images/common/btn_mobOpen.png" alt="전체메뉴" /></a></div>
				</div>
			</div>
			
			
			<div class="allmenu">
				<div class="dim_layer"></div>
				<div class="menu_list">
					<div class="inner">
						<p class="tit">전체메뉴</p>
						
							
						<!-- 서브메인 메뉴들 -->
	<ul>
		<li class="l_title1"> 
						<a href="recommendCourseList.do%EF%B9%96menuIdx=43&amp;yearyyyy=2022&amp;monthmm=08.html" >추천여행</a>
						<div class="lnb_sub">
							<!--  and m1.child_type ne 'TAB' -->
								<ul>
									<li >
												<a href="recommendCourseList.do%EF%B9%96menuIdx=43&amp;yearyyyy=2022&amp;monthmm=08.html" >계절·테마여행코스</a>
											</li>
										<li >
												<a href="heritageList.do%EF%B9%96menuIdx=841.html" >국가중요농업유산</a>
											</li>
										<li >
												<a href="ownCourseList.do%EF%B9%96menuIdx=44.html" >나만의 여행코스</a>
											</li>
										</ul>
							</div>
					</li>
				<li class="l_title1"> 
						<a href="travel/sites.do%EF%B9%96menuIdx=499&amp;sort_condition=2.html" >농촌여행</a>
						<div class="lnb_sub">
							<!--  and m1.child_type ne 'TAB' -->
								<ul>
									<li >
												<a href="travel/sites.do%EF%B9%96menuIdx=499&amp;sort_condition=2.html" >지역별 농촌여행지</a>
											</li>
										<li >
												<a href="myLocation.do%EF%B9%96menuIdx=842.html" >내 주변 농촌여행지</a>
											</li>
										<li >
												<a href="travel/experience/exp_all.do%EF%B9%96menuIdx=498&amp;sort_condition=2.html" >체험정보</a>
											</li>
										<li >
												<a href="stayList.do%EF%B9%96menuIdx=682.html" >농촌숙박</a>
											</li>
										</ul>
							</div>
					</li>
				<li class="l_title1"> 
						<a href="board.do%EF%B9%96menuIdx=178.html" >여행정보</a>
						<div class="lnb_sub">
							<!--  and m1.child_type ne 'TAB' -->
								<ul>
									<li >
												<a href="board.do%EF%B9%96menuIdx=178.html" >여행 이야기</a>
											</li>
										<li >
												<a href="board.do%EF%B9%96menuIdx=281.html" >여행 갤러리</a>
											</li>
										<li >
												<a href="page.do%EF%B9%96menuIdx=515.html" >세미나·워크숍하기 좋은마을</a>
											</li>
										<li >
												<a href="eventList.do%EF%B9%96menuIdx=761&amp;cIdx=evpr.html" >이벤트</a>
											</li>
										<li >
												<a href="cardnewsList.do%EF%B9%96menuIdx=556.html" >여행정보</a>
											</li>
										</ul>
							</div>
					</li>
				<li class="l_title1"> 
						<a href="shareList.do%EF%B9%96menuIdx=840.html" >여행공유</a>
						<div class="lnb_sub">
							<!--  and m1.child_type ne 'TAB' -->
								<ul>
									<li >
												<a href="shareList.do%EF%B9%96menuIdx=840.html" >여행사진공유</a>
											</li>
										<li >
												<a href="board.do%EF%B9%96menuIdx=179.html" >여행후기</a>
											</li>
										</ul>
							</div>
					</li>
				</ul>	

						
					</div>
				</div>
				<a class="allmenu_close" href="javascript:void(0)">전체메뉴 닫기</a>
				<script>
					$(document).ready(function(){
						$(".allmenu_btn").on("click", function(){  
							if($(".allmenu").css("display") == "none"){
								$(".allmenu").fadeIn(300);
								jQuery(".menu_list").load("/popup/allmenu/index.do", function(){});
							} else {
							    $(".allmenu").fadeOut();
							} 
						});  
					
						$(".allmenu_close").on("click", function(){  
							if($(".allmenu").css("display") == "block"){
								$(".allmenu").fadeOut();
								$(".allmenu_btn a").focus();
							} 
						});
					
					});
				</script>
			</div>
			
		
		
		<div class='top_wrap main'><!-- top start -->
			<div class='con_wrap'>
				
				
					
					
					<div class='utilnGnbWrap'>
						<div class="wnmGnbWrap" id="scroller">
							<div>
								
									
								<ul class="gnb_wrap">
		<li >
						<a href="recommendCourseList.do%EF%B9%96menuIdx=43&amp;yearyyyy=2022&amp;monthmm=08.html" >추천여행</a>
						<!--  and m1.child_type ne 'TAB' -->
						<ul class='submenu'>
							<li >
								<a href="recommendCourseList.do%EF%B9%96menuIdx=43&amp;yearyyyy=2022&amp;monthmm=08.html"  class="load_none">계절·테마여행코스</a>
							</li>
							<li >
								<a href="heritageList.do%EF%B9%96menuIdx=841.html"  class="load_none">국가중요농업유산</a>
							</li>
							<li >
								<a href="ownCourseList.do%EF%B9%96menuIdx=44.html"  class="load_none">나만의 여행코스</a>
							</li>
							</ul>
						</li>
				<li >
						<a href="travel/sites.do%EF%B9%96menuIdx=499&amp;sort_condition=2.html" >농촌여행</a>
						<!--  and m1.child_type ne 'TAB' -->
						<ul class='submenu'>
							<li >
								<a href="travel/sites.do%EF%B9%96menuIdx=499&amp;sort_condition=2.html"  class="load_none">지역별 농촌여행지</a>
							</li>
							<li >
								<a href="myLocation.do%EF%B9%96menuIdx=842.html"  class="load_none">내 주변 농촌여행지</a>
							</li>
							<li >
								<a href="travel/experience/exp_all.do%EF%B9%96menuIdx=498&amp;sort_condition=2.html"  class="load_none">체험정보</a>
							</li>
							<li >
								<a href="stayList.do%EF%B9%96menuIdx=682.html"  class="load_none">농촌숙박</a>
							</li>
							</ul>
						</li>
				<li >
						<a href="board.do%EF%B9%96menuIdx=178.html" >여행정보</a>
						<!--  and m1.child_type ne 'TAB' -->
						<ul class='submenu'>
							<li >
								<a href="board.do%EF%B9%96menuIdx=178.html"  class="load_none">여행 이야기</a>
							</li>
							<li >
								<a href="board.do%EF%B9%96menuIdx=281.html"  class="load_none">여행 갤러리</a>
							</li>
							<li >
								<a href="page.do%EF%B9%96menuIdx=515.html"  class="load_none">세미나·워크숍하기 좋은마을</a>
							</li>
							<li >
								<a href="eventList.do%EF%B9%96menuIdx=761&amp;cIdx=evpr.html"  class="load_none">이벤트</a>
							</li>
							<li >
								<a href="cardnewsList.do%EF%B9%96menuIdx=556.html"  class="load_none">여행정보</a>
							</li>
							</ul>
						</li>
				<li >
						<a href="shareList.do%EF%B9%96menuIdx=840.html" >여행공유</a>
						<!--  and m1.child_type ne 'TAB' -->
						<ul class='submenu'>
							<li >
								<a href="shareList.do%EF%B9%96menuIdx=840.html"  class="load_none">여행사진공유</a>
							</li>
							<li >
								<a href="board.do%EF%B9%96menuIdx=179.html"  class="load_none">여행후기</a>
							</li>
							</ul>
						</li>
				</ul>	

							</div>
						</div>
					</div>
					
				
				
			</div>
			<!-- 
			<a href="#" class="btn_nav2 open"><img src="/web/resources/images/common/btn_mobOpen.png" alt="전체 메뉴 열기"></a>
			<a href="/web/page.do?menuIdx=189" class="btn_nav3"><img src="/web/resources/images/main/btn_util_search.png" alt="검색페이지"></a>
			-->
		</div><!-- top end -->
		
		
		
	</div>
<!-- } 상단 끝 -->


<hr>

<!-- 콘텐츠 시작 { -->
<div id="wrapper">
    <div id="container_wr">
   
    <div id="container">
        <?php if (!defined("_INDEX_")) { ?><h2 id="container_title"><span title="<?php echo get_text($g5['title']); ?>"><?php echo get_head_title($g5['title']); ?></span></h2><?php }