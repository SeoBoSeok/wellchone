//웰촌 메인페이지 스크립트
$(document).ready ( function () {
	//목록 마지막단 마진이나 보더값 조정을 위해 클레스 밖아 넣는다. css 단계에서 :last-child를 쓸수없어서...
	$('.course a:last-child').addClass('lastCourse');
	$('.bbsNav .nav div:last-child').addClass('nRBorder');
	//모바일용과 따로 쓰겠다.
	$('.bbsWrap .bbsItem:nth-child(3n)').addClass('noRightPadding');
	$('.bbsWrap .bbsItem:nth-child(2n)').addClass('moFloatRight');


	//메인베너 기동 스크립트
	/*
	var mainBanner = "";
	if ($(window).width() >= 600) {
		mainBanner = $('.bxslider').bxSlider({
			auto:true,
			mode:'fade',
			speed:500,
			pause:8500,
			tickerHover:true,
			adaptiveHeight: true,
			pagerCustom: '#mainBannerMapNav',
			onSliderLoad: function () { //슬라이드 활성화 될 때
				navPoitionControl();
				mainViewAction();
				mapStartSetup();
			},
			onSlideAfter: function () { //페이지 넘어갈떄 마다
				mainViewAction(); //메인베너 에니메이션
				mainBannerBulletTextControl(); //메인베너 네이게이션 text class=active 찍어주는 함수
			},
			onSlideBefore: function () { //페이지 넘어갈떄 마다
				mainViewActionBefore(); //메인베너 애니메이션 초기화
			}
		});
	} else {
		mainBanner = $('.bxslider').bxSlider({
			auto:true,
			mode:'fade',
			speed:500,
			pause:8500,
			tickerHover:true,
			adaptiveHeight: true,
			onSliderLoad: function () { //슬라이드 활성화 될 때
				navPoitionControl();  
				mainViewAction();
				mapStartSetup();
			},
			onSlideAfter: function () { //페이지 넘어갈떄 마다
				mainViewAction(); //메인베너 에니메이션
				mainBannerBulletTextControl(); //메인베너 네이게이션 text class=active 찍어주는 함수
			},
			onSlideBefore: function () { //페이지 넘어갈떄 마다
				mainViewActionBefore(); //메인베너 애니메이션 초기화
			}
		});
	}
	*/
	$('.mainBanner li').hover(function () {
		//alert('stop');
		mainBanner.stopAuto ();
	},function () {
		//alert('start');
		mainBanner.startAuto();
	})	
	
	/************************************************************************************************************/	
	//bottom slide01 기동 스크립트
	/*
	var bottomSlide01 = $('.bottomBxslider01').bxSlider({
		adaptiveHeight: true,
		slideWidth: 547,
		speed: 400,
		pause:7000,
		auto: true,
		minSlides: 1,
		maxSlides: 2,
		slideMargin:30
	});

	//bottom slide02 기동 스크립트
	var bottomSlide02 = $('.bottomBxslider02').bxSlider({
		adaptiveHeight: true,
		slideWidth: 377,
		minSlides: 1,
		maxSlides: 3,
		slideMargin:30
	});
	if($(window).width() <= 768){
		
		var bottomSlide02 = $('.bottomBxslider02').bxSlider({		
			adaptiveHeight: false,
			speed: 400,
			pause:7000,
			auto : true,
			pager : false,
			controls : false,
			minSlides: 1,
			maxSlides: 1	
		});
		
		var bottomSlide03 = $('.bottomBxslider03').bxSlider({		
			adaptiveHeight: false,
			speed: 400,
			pause:7000,
			auto : true,
			pager : false,
			controls : false,
			minSlides: 1,
			maxSlides: 1	
		});
	}
	
	var imgSlide = $('.imgSlide ul').bxSlider({
		//adaptiveHeight: false,
		//infiniteLoop : true,
		slideWidth: 175,
		speed: 10,
		pause:7000,
		auto: true,
		pager : false,
		minSlides: 1,
		maxSlides: 1
	});

	//스크린 가로싸이즈에 대해 bottom slide01, 02 스크립트 속성을 변경한다.
	$(window).resize( function (e) {
		var screenWidth = $(window).width();
		//alert(screenWidth);
		if ( screenWidth >= 1200 ) {

			bottomSlide01.reloadSlider({
				adaptiveHeight: true,
				slideWidth: 547,
				minSlides: 1,
				maxSlides: 2,
				slideMargin:30
			});


			bottomSlide02.reloadSlider({				
				adaptiveHeight: false,
				speed: 400,
				pause:7000,
				pager : false,
				controls : false,
				minSlides: 1,
				maxSlides: 1
			});
			
			bottomSlide03.reloadSlider({
				adaptiveHeight: true,
				//slideWidth: 377,
				minSlides: 1,
				maxSlides: 3,
				slideMargin:30				
				adaptiveHeight: false,
				speed: 400,
				pause:7000,
				pager : false,
				controls : false,
				minSlides: 1,
				maxSlides: 1
			});


		} else if (screenWidth < 1200 && screenWidth >= 800) {
			//웹페이지 기본싸이즈보다 작아졌다면.
			//e.preventDefault();

			//슬라이드01 사이즈 조정
			var itemWidth = (screenWidth-30)/2;
			bottomSlide01.reloadSlider({
				adaptiveHeight: true,
				slideWidth : itemWidth,
				minSlides: 1,
				maxSlides: 2,
				slideMargin:30
			});

			//슬라이드02 사이즈 조정
			itemWidth = (screenWidth-150)/3;
			bottomSlide02.reloadSlider({
				adaptiveHeight: false,
				speed: 400,
				pause:7000,
				pager : false,
				controls : false,
				minSlides: 1,
				maxSlides: 1
			});
			
			//슬라이드02 사이즈 조정
			itemWidth = (screenWidth-150)/3;
			bottomSlide03.reloadSlider({
				adaptiveHeight: true,
				//slideWidth : itemWidth,
				minSlides: 1,
				maxSlides: 3,
				slideMargin:30
				
				adaptiveHeight: false,
				speed: 400,
				pause:7000,
				pager : false,
				controls : false,
				minSlides: 1,
				maxSlides: 1
			});

		} else if ( screenWidth < 800 && screenWidth >= 600 ) {

			//슬라이드01 사이즈 조정
			var itemWidth = (screenWidth-30)/2;
			bottomSlide01.reloadSlider({
				adaptiveHeight: true,
				slideWidth : itemWidth,
				minSlides: 1,
				maxSlides: 2,
				slideMargin:30
			});

			//슬라이드02 사이즈 조정
			itemWidth = (screenWidth-100)/2;
			bottomSlide02.reloadSlider({
				adaptiveHeight: false,
				speed: 400,
				pause:7000,
				pager : false,
				controls : false,
				minSlides: 1,
				maxSlides: 1
			});
			
			//슬라이드02 사이즈 조정
			itemWidth = (screenWidth-100)/2;
			bottomSlide03.reloadSlider({
				adaptiveHeight: true,
				//slideWidth : itemWidth,
				minSlides: 1,
				maxSlides: 2,
				slideMargin:30
				adaptiveHeight: false,
				speed: 400,
				pause:7000,
				pager : false,
				controls : false,
				minSlides: 1,
				maxSlides: 1
			});

		} else { //600미만

			//슬라이드01 사이즈 조정
			var itemWidth = screenWidth;
			bottomSlide01.reloadSlider({
				slideWidth: itemWidth,
				minSlides: 1,
				maxSlides: 1
			});

			//슬라이드02 사이즈 조정
			itemWidth = screenWidth - 70;
			bottomSlide02.reloadSlider({
				slideWidth: itemWidth,
				minSlides: 1,
				maxSlides: 1
			});
			
			//슬라이드03 사이즈 조정
			itemWidth = screenWidth - 70;
			bottomSlide03.reloadSlider({
				slideWidth: itemWidth,
				minSlides: 1,
				maxSlides: 1
			});
			
		}

	});
	*/
	/*****************************************************************************************************/


	//메인 비주얼 영역 코스 부분
	$(document).ready(function() {
		//$(".mainBanner .course a > span").addClass('animated flipInY');
	});


	//메인 비주얼 밑 마을 체험 바로가기 탭
	$('.bbsNav .nav a').on('mouseenter focusin',function(){
		$('.bbsNav .nav li').removeClass('on');
		$(this).parent().addClass('on');
		var $target = $(this).attr('data');
		$('.tabWrap div').css('display','none');
		$('.tabWrap .tab' + $target).css('display','block');
	});
	/*
	$('.course span').mouseover( function () {
		var tar = $(this);
		$(tar).addClass('animated flipInY');
		setTimeout( function () {
			$(tar).removeClass('animated flipInY');
		}, 500);
	});
 	*/
	//지도 열기 닫기 스크립트
	$('#btnMapClose img').on('click', function () {
		if ( $(this).hasClass('open') ) {
			$(this).removeClass('open');
			$(this).attr('src', $(this).attr('src').replace('Close', 'Open') );
			//$('.mapNav').attr('style', 'overflow:hidden;').stop().animate({'height':'35px'},1000);
			$('#mainBannerMapNav').slideUp();
		} else {
			$(this).addClass('open');
			$(this).attr('src', $(this).attr('src').replace('Open', 'Close') );
			//$('.mapNav').attr('style', '').stop().animate({'height':'355px'},1000);
			$('#mainBannerMapNav').slideDown();
		}
	});


});

//메인배너 변경 사항이 많아서 한꺼번에 처리가 불가능하다.
function mainViewAction() {
	$(".mainContent .subTit, .mainContent .tit, .mainContent .text, .mainContent .goContentPage").attr('style', 'display:block').addClass("animated fadeInDown");

	setTimeout( function () {
		//$(".weatherWrap").attr('style', 'display:block').addClass("animated bounceIn");
	}, 1000);

	setTimeout( function () {
		if ($(window).width() >= 900) {
			$(".course").attr('style', 'display:block').addClass("animated fadeInUp");
		}
	}, 1000);


};
function mainViewActionBefore () {
	$('.mainContent .subTit, .mainContent .tit, .mainContent .text, .mainContent .goContentPage').attr('style', 'display:none').removeClass('animated fadeInDown');
	$(".weatherWrap").attr('style', 'display:none').removeClass("animated bounceIn");
	$(".course").attr('style','display:none;').removeClass("animated fadeInUp");
};



//네비게이션 초기 세팅 스크립트
function navPoitionControl () {
	//alert($mapArr);
	for ( var $i = 0; $i < $mapArr.length; $i++) { //메인루프 블릿 갯수만큼 돈다
		console.log($mapArr[$i]);
		if( $mapArr[$i] != null ) {
			var $strArr = $mapArr[$i].split('|');
			//alert($strArr);
	
			backgroundPosition ( $strArr[2], $strArr[5],$strArr[6] , $strArr[7]);
			var $textCon = textContent ( $strArr[0], $strArr[1], $strArr[3], $strArr[4],$strArr[5], $i );
	
			//반영
			$('#mainBannerMapNav').append( "<a class='bullet bullet" + $i + "' data-slide-index='" + $i + "' location-data='" + $strArr[2]+ "' map-yn='" + $strArr[5] + "' weather-yn='" + $strArr[6] + "' first-yn='" + "1" + "' bullet-num='" + $i + "' href='' style='left:" + $strArr[0] + "px; top:" + $strArr[1] + "px;'  onmouseover='mapBulletOver(" + $i + ", 1)' onmouseout='mapBulletOver(" + $i +", 2)'></a>" );
			$('#mainBannerMapNav').append($textCon);
		} else {
			$('#mainBannerMapNav').append( "<a class='bullet bullet" + $i + "' data-slide-index='" + $i + "' style='display:none;' onmouseover='mapBulletOver(" + $i + ", 1)' onmouseout='mapBulletOver(" + $i +", 2)'></a>" );
		}
	} //메인루프 end
};

//백그라운드 포지션을 리턴함. 많은 변경이있을꺼 같아서 따로 만듬
function backgroundPosition ( $num , $yn, $wyn, $fyn) {

	if($fyn == 1){
		if($yn == "N"){
			$(".navWrap").hide();
		}else{
			$(".navWrap").show();
		}
	}

		if($wyn == "N"){
			$(".weatherWrap").attr('style', 'display:none').removeClass("animated bounceIn");
		}else{
			setTimeout( function () {
				$(".weatherWrap").attr('style', 'display:block').addClass("animated bounceIn");
			}, 1000);
		}


	//백그라운드 이미지 가로 사이즈는 260px이다.
	//$num = $num*1; //멍청하게 숫자로 인식을 몬한다...
	var $backgroundPos = "";
	switch ( $num ) {
		case "4200000000": $backgroundPos = "0px 0px"; break;
		case "4100000000": $backgroundPos = "-260px 0px"; break;
		//case 3: $backgroundPos = "520px 0px"; break;
		case "4400000000": $backgroundPos = "-780px 0px"; break;
		case "4300000000": $backgroundPos = "-1040px 0px"; break;
		case "4700000000": $backgroundPos = "-1300px 0px"; break;
		case "4500000000": $backgroundPos = "-1560px 0px"; break;
		case "4600000000": $backgroundPos = "-1820px 0px"; break;
		case "4800000000": $backgroundPos = "-2080px 0px"; break;
		case "5000000000": $backgroundPos = "-2340px 0px"; break;
		//case 11: $backgroundPos = "2600px 0px"; break;
		//case 12: $backgroundPos = "2960px 0px"; break;
		//case 13: $backgroundPos = "3120px 0px"; break;
		//case 14: $backgroundPos = "3380px 0px"; break;
		//case 15: $backgroundPos = "3640px 0px"; break;
		//case 16: $backgroundPos = "3900px 0px"; break;
	}
	//alert($num + ' | ' + $backgroundPos);
	$('#mainBannerMapNav').css('background-position', $backgroundPos);
}

//텍스트 에어리어 방향 설정, 포지션값을 생성
//일단 사용하지 않음.. 추후에 사용가능성 있음 무조건 $num은 일단 1이 들어올것임
function textContent ( $x, $y, $text, $num, $yn, $i ) {
	$x = $x*1;
	$y = $y*1;
	$num = $num*1; //멍청하게 숫자로 인식을 몬한다...

	var $width = 260; //mapWrap의 가로 사이즈


	var $position = "";
	var $returnData = "";
	switch ( $num ) {
		case 1:
			$x = $x + 8; $y = $y + 4;
			$position = "left:" + $x + "px; top:" + $y + "px;";
			$returnData = "<div class='mapText2 mapText textNum" + $i + "' style='" + $position + "' onmouseover='mapBulletOver(" + $i + ", 1)' onmouseout='mapBulletOver(" + $i +", 2)'><span>" + $text + "</span></div>";
			break;
		case 2:
			$x = $width - $x - 14; $y = $y + 2; //엡솔루트 우측정렬한다.
			$position = "right:" + $x + "px; top:" + $y + "px;";
			$returnData = "<div class='mapText1 mapText textNum" + $i + "' style='" + $position + "' onmouseover='mapBulletOver(" + $i + ", 1)' onmouseout='mapBulletOver(" + $i +", 2)'><span>" + $text + "</span></div>";
			break;
		case 3: //아직 미설정
			$y = $y - 5;
			$position = "left:" + $x + "px; top:" + $y + "px;";
			$returnData = "<div class='mapText2 mapText textNum" + $i + "' style='" + $position + "' onmouseover='mapBulletOver(" + $i + ", 1)' onmouseout='mapBulletOver(" + $i +", 2)'><span>" + $text + "</span></div>";
			break;
	}
	return $returnData;
};

//네비맵 동적 컨트롤
function mainBannerBulletTextControl() {
	var $this = $('#mainBannerMapNav .bullet.active');
	var locationNum = $this.attr('location-data');
	var locationYn= $this.attr('map-yn');
	var weatherYn= $this.attr('weather-yn');
	var firstYn= $this.attr('first-yn');
	backgroundPosition ( locationNum , locationYn,weatherYn,firstYn);
	var bulletNum = $this.attr('bullet-num');
	$('#mainBannerMapNav .mapText').removeClass('active');
	$this.parent().find( '.textNum' + bulletNum ).addClass( 'active' );
}

//네비맵 호버 아웃 컨트롤
function mapBulletOver ( $index, $mode ) {
	if ($mode == '1') {
		$('#mainBannerMapNav .bullet' + $index).addClass('on');
		$('#mainBannerMapNav .textNum' + $index).addClass('on');
	} else {
		$('#mainBannerMapNav .bullet' + $index).removeClass('on');
		$('#mainBannerMapNav .textNum' + $index).removeClass('on');
	}
}

//맵 초기 세팅
function mapStartSetup() {
	setTimeout( function () {
		$('#btnMapClose img').removeClass('open');
		$('#btnMapClose img').attr('src', $('#btnMapClose img').attr('src').replace('Close', 'Open') );
		//$('.mapNav').attr('style', 'overflow:hidden;').stop().animate({'height':'35px'},1000);
		$('#mainBannerMapNav').slideUp();
	}, 1000);
}

//영문 지도 백그라운드
function backgroundPosition2 ( $num ) {
    //백그라운드 이미지 가로 사이즈는 260px이다.
    //$num = $num*1; //멍청하게 숫자로 인식을 몬한다...
    var $backgroundPos = "";
    switch ( $num ) {
        case "4200000000": $backgroundPos = "0px bottom"; break;
        case "4100000000": $backgroundPos = "-280px bottom"; break;
        //case 3: $backgroundPos = "-560px bottom"; break;
        case "4400000000": $backgroundPos = "-840px bottom"; break;
        case "4300000000": $backgroundPos = "-1120px bottom"; break;
        case "4700000000": $backgroundPos = "-1400px bottom"; break;
        case "4500000000": $backgroundPos = "-1680px bottom"; break;
        case "4600000000": $backgroundPos = "-1960px bottom"; break;
        case "4800000000": $backgroundPos = "-2240px bottom"; break;
        case "5000000000": $backgroundPos = "-2520px bottom"; break;
    }
    $('.regionSerach .searchMap').css('background-position', $backgroundPos);
}

//koreaWelchonStoryControl
function koreaWelchonStoryControl (slideCount, slideIndex) {
    //alert(slideCount + ":" + slideIndex);

    $('.koreaWelchonStoryWrap ul li').removeClass('active');
    //5개의 디스플레이 영역을만들기 위해 bx-slide가 5개의 클론을 생성한다.
    //또한 가운데 객체를 선택하기위애 2번째 뒤에껄 잡아야한다.
    var num= 5 + slideIndex*1 + 2;
    $('.koreaWelchonStoryWrap ul li').eq(num).addClass('active');
}
