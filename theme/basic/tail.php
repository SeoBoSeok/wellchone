<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/shop.tail.php');
    return;
}
?>
<div id="footer">
		<div class="f_info">
			<div class="bbs">
				<h6>공주여행 새소식</h6>
				<div class="bbs_slide">
					
						
						
					
					
					<ul>
						
						<li>
							<p>
								<a href="board.do%EF%B9%96menuIdx=118&amp;bbsIdx=2211398.html" title="2022년 온택트 도농교류 놀이마당'">
									[행사] 2022년 온택트 도농교류 놀이마당
								</a>
							</p>
							<span>2022-11-01</span>
						</li>
						
						<li>
							<p>
								<a href="board.do%EF%B9%96menuIdx=118&amp;bbsIdx=2211391.html" title="2022년 농촌유학 영상 콘텐츠 공모전 심사결과'">
									[공지] 2022년 농촌유학 영상 콘텐츠 공모전 심사결과
								</a>
							</p>
							<span>2022-10-17</span>
						</li>
						
						<li>
							<p>
								<a href="board.do%EF%B9%96menuIdx=118&amp;bbsIdx=2211390.html" title="소규모농촌체험프로그램 개발사업 중간평가 우수마을 선정'">
									[공지] 소규모농촌체험프로그램 개발사업 중간평가 우수마을 선정
								</a>
							</p>
							<span>2022-10-14</span>
						</li>
						
					</ul>
					
				</div>
				<a href="board.do%EF%B9%96menuIdx=118.html" class="more">더보기</a>
			</div>
			<div class="call">
				<div>
					<h6>공주여행 전화상담</h6>
					<p>1577-1417</p>
					<span>평일 09:00 ~ 18:00 (토, 일 공휴일 휴무)</span>
				</div>
				<!-- <ul>
					<li><a href="bizintro.do%EF%B9%96menuIdx=617&amp;intro_type=INTRO01.html"><img src="../images/footer/f_info01.png" alt="" /><span>도농교류협력</span></a></li>
					
					<li><a href="travelPackageList.do%EF%B9%96menuIdx=45.html" target="_blank"><img src="../images/footer/f_info03.png" alt="" /><span>GO 농촌여행상품</span></a></li>
					<li><a href="bizintro.do%EF%B9%96menuIdx=635&amp;intro_type=INTRO03.html"><img src="../images/footer/f_info04.png" alt="" /><span>자유학년제</span></a></li>
					
				</ul> -->
			</div>
		</div>
		<div class="f_wrap">
			<div class="f_left">
				<ul>
					<li><a href="sub_index.do.html">농촌여행활성화사업</a></li>
					
					<li><a href="page.do%EF%B9%96menuIdx=197.html">이메일무단수집거부</a></li>
					<li><a href="board.do%EF%B9%96menuIdx=181.html">틀린정보신고</a></li>
					<li><a href="page.do%EF%B9%96menuIdx=915.html">저작권보호정책</a></li>
					<li><a href="https://www.rucos.kr" target="_blank" title="새창열림"><b>농촌휴양마을관리시스템</b></a></li>
				</ul>
				<div class="txt">
					<p>[14051] 경기도 안양시 동안구 부림로 169번길 22 | 대표자 : 구길모 | 메일 : <a href="mailto:nongchon@ekr.or.kr">nongchon@ekr.or.kr</a> | 전화번호 : 1577-1417</p>
					<p>사업자등록번호 124-82-22742 | 통신판매업신고 제 2015-수원권선-0085호</p>
					<p>COPYRIGHT ⓒ 2016 BY KRC Corporation. ALL RIGHTS RESERVED</p>
				</div>
				<div class="f_logo">
					<!-- <a href="http://www.mafra.go.kr" target="_blank" title="새창열림"><img src="../images/footer/ministry.png" alt="농림축산식품부"></a>
					<a href="http://www.ekr.or.kr" target="_blank" title="새창열림"><img src="../images/footer/krc.png" alt="한국농어촌공사"></a>
					<a href="https://www.kogl.or.kr/index.do" target="_blank" title="새창열림"><img src="../images/footer/nuri.png" alt="공공저작물 자유이용허락 표시제도 공공누리"></a> -->
				</div>
			</div>
			<div class="f_right">
				<div>
					<a href="https://www.facebook.com/welchontour" target="_blank" title="공주여행 페이스북"><img src="../images/footer/sns01.png"></a>
					<a href="https://twitter.com/welchontour" target="_blank" title="공주여행 트위터"><img src="../images/footer/sns02.png"></a>
					<a href="http://blog.naver.com/welchon4u" target="_blank" title="공주여행 네이버블로그"><img src="../images/footer/sns03.png"></a>
					<!-- <a href="https://story.kakao.com/ch/welchon" target="_blank" title="공주여행 카카오스토리"><img src="../images/footer/sns04.png"></a>
					<a href="https://instagram.com/welchon_official" target="_blank" title="공주여행 인스타그램"><img src="../images/footer/sns05.png"></a>
					<a href="https://www.youtube.com/user/welchon4u" target="_blank" title="공주여행 유튜브"><img src="../images/footer/sns06.png"></a> -->
				</div>
				<!-- <select onchange='if (this.value != "") {window.open(this.value);}'>
					<option value="" selected="">유관기관 바로가기</option>
					<option value="http://www.mafra.go.kr/">농림축산식품부</option>
					<option value="http://www.ekr.or.kr/">한국농어촌공사</option>
					<option value="http://www.welchon.com/web/board.do?menuIdx=118&bbsIdx=2204049">전국 농촌체험휴양마을 협의회</option>
					<option value="https://alimi.ekr.or.kr/">농어촌 알리미</option>
					<option value="https://blog.naver.com/krcpolicy">농이터</option>
					<option value="https://korean.visitkorea.or.kr/">대한민국구석구석</option>
					<option value="https://www.6차산업.com:448">6차산업</option>
					<option value="https://www.agriedu.net">농업교육포털</option>
					<option value="https://www.agriwork.kr">도농인력중개서비스</option>								
				</select> -->
			</div>
		</div>
	</div><!-- footer end -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    // font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");