AOS.init({
	once: true,
});
var $ = jQuery;

function onElementHeightChange(elm, callback) {
	var lastHeight = elm.clientHeight
	var newHeight;

	(function run() {
		newHeight = elm.clientHeight;      
		if (lastHeight !== newHeight) callback();
		lastHeight = newHeight;

		if (elm.onElementHeightChangeTimer) {
			clearTimeout(elm.onElementHeightChangeTimer); 
		}

		elm.onElementHeightChangeTimer = setTimeout(run, 200);
	})();
}

function touchCheck(){
	if($(window).width() < 1200) {
		if ("ontouchstart" in document.documentElement){
			$('body').addClass('touchstart');
		}
		else{
			$('body').removeClass('touchstart');
		}
	}
}
// main menu
function mainMenu(){
	$('.main-menu ul > li').each(function( index, element ) {
		var hasMenu = $(this).find('.mega-menu-dropdown').length;
		if($(hasMenu).length === 1) {
			$(this).on('mouseover', function(){
				$(this).addClass('active');
				$(this).find('.mega-menu-dropdown').addClass('show');
				$('body').addClass('menu-visible');
			});
			$(this).on('mouseout', function(){
				$(this).removeClass('active');
				$(this).find('.mega-menu-dropdown').removeClass('show');
				$('body').removeClass('menu-visible');
			});
		}
	});
}
// right sidebar toggle
function sideBarToggle(){
	$('.right-sidebar-close').on('click', function(){
		$('.right-sidebar').removeClass('show');
		$('body').removeClass('sidebar-open');
	});
	$('.sidebar-toggle').on('click', function(){
		$('.right-sidebar').addClass('show');
		$('body').addClass('sidebar-open');
	});
}
// footer links mobile view
function footerToggle(){
	$('.footer-toggle').on('click', function(){
		$('.footer-container').addClass('footer-open');
	});
	$('.footer-close').on('click', function(){
		$('.footer-container').removeClass('footer-open');
	});
}
// banner go to bottom
function bannerBottom() {
	$(".banner-down").on('click',function() {
		var target = $(this).data('target');
		var headerHeight = $('.header').height();
	    $('html,body').animate({
	        scrollTop: $(target).offset().top - headerHeight
	    },500);
	});
}
// banner go to bottom
function lpBannerBottom() {
	$('.landing-banner').next().attr( 'id', 'banner-next' );
	$(".landing-banner .banner-down").on('click',function() {
		var target = $(this).data('target');
		var headerHeight = $('.header').height();
	    $('html,body').animate({
	        scrollTop: $(target).offset().top - headerHeight
	    },500);
	});
}
// get data color
function dataColorGet() {
	$('.datacolor').each(function(val, index){
		var dataColor = $(this).data('color');
		$(this).css('background-color', dataColor);
	});
	$('.datacolortext').each(function(val, index){
		var dataColorText = $(this).data('color');
		$(this).css('color', dataColorText);
	});
}

function caseStudySlider(){
	$('.casestudies-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 18000,
		appendDots: '.case-studies .case-studies-wrap'
	});
}

function clientSaySlider(){
	$('.client-says-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
	});
}

function testimonialSlider(){
	$('.testimonial-module .slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		prevArrow: '<button class="slick-prev slick-arrow d-flex align-items-center justify-content-center"><svg fill="currentColor"><path d="M15 7H3.83l4.88-4.88c.39-.39.39-1.03 0-1.42A.996.996 0 007.3.7L.71 7.29a.996.996 0 000 1.41l6.58 6.6a.996.996 0 101.41-1.41L3.83 9H15c.55 0 1-.45 1-1s-.45-1-1-1z"></path></svg></button>',
		nextArrow: '<button class="slick-next slick-arrow  d-flex align-items-center justify-content-center"><svg fill="currentColor"><path d="M1 9h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41L8.71.7A.996.996 0 107.3 2.11L12.17 7H1c-.55 0-1 .45-1 1s.45 1 1 1z"></path></svg></button>',
	});
}

function givingSlider(){
	$('.giving-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 2000,
	});
}

function documentToggle(){
	$(document).on('click', function(e){
		var closearea = jQuery(".menu-toggle, .hright, .header-container, .footer-toggle, .footer-container, .right-sidebar");
		if (closearea.has(e.target).length === 0) {
		    $('.header-container').removeClass('menu-open');
		    $('.menu-toggle').removeClass('active');
		    $('.footer-container').removeClass('footer-open');
		    //$('.right-sidebar').removeClass('show');
		}
	});
}

function showCoords() {
	var items = $('.leadership .items');
	if ("ontouchstart" in document.documentElement){
		$('.leadership').addClass('touchstart');
	}
	else{
		$('.leadership').removeClass('touchstart');
	}
	if ($('.leadership').hasClass('touchstart')) {
		items.click(function(event) {
			$('.tooltips').removeClass('show');
			$(this).find('.tooltips').addClass('show');
		});
	}
	else{
		items.mousemove(function(event) {
			var x = event.clientX + 10;
			var y = event.clientY + 10;
			$(this).find('.tooltips').css('left', x);
			$(this).find('.tooltips').css('top', y);
			$(this).find('.tooltips').css('display', 'block');
		});
		items.mouseout(function(event) {
			$(this).find('.tooltips').css('left', '');
			$(this).find('.tooltips').css('top', '');
			$(this).find('.tooltips').css('display', 'none');
		});
	}
}

function registerInputFocusEvents() {
	jQuery('.wpcf7').on( 'input', '.form-control', function() {
		if ( jQuery( this ).val() != ''  ) {
			jQuery( this ).addClass( 'input-value-added' );
		} else {
			jQuery( this ).removeClass( 'input-value-added' );
		}
	} );

	jQuery('.wpcf7').on( 'focusin', '.form-control', function() {
		jQuery( this ).parents( '.form-group' ).addClass( 'input-has-value' );
	} );

	jQuery('.wpcf7').on( 'focusout', '.form-control', function() {
		if ( ! jQuery( this ).hasClass( 'input-value-added' ) ) {
			jQuery( this ).parents( '.form-group' ).removeClass( 'input-has-value' );
		}
	} );
}

function clickToScroll(){
	jQuery(".leadership a[href^='#']").on('click',function (e) {
		e.preventDefault();
		var targets = this.hash;
		jQuery('html, body').animate({
			'scrollTop': $(targets).offset().top - 120
		}, 500);
	});
}

function otherPage(){
	$("html, body").scrollTop(0);
	if (window.location.hash) {
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 120
            }, 2000)
            window.location.hash = '';
            history.replaceState('', document.title, window.location.pathname);
        }, 500);
    }
}

function horizontalTab() {
	$('.horizontal-tab-module').on('click','.nav-link', function(e){
        e.preventDefault();
        var tabTarget = $(this).attr('href');
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane').removeClass('active');
        $(tabTarget).addClass('active');
    });
    if($(window).width() < 767) {
    	$('.horizontal-tab-module .tab-pane').first().removeClass('active');
    }
    else{
    	$('.horizontal-tab-module .tab-pane').first().addClass('active');
    }
    $('.vertical-tab-module').on('click','.tab-link', function(e){
    	e.preventDefault();
    	var tabTarget = $(this).attr('href');
    	$('.tab-link').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane').removeClass('active');
        $(tabTarget).addClass('active');
    })
}

function career(){
	$(".page-template-career .work-with-us .cta-btn").attr('href', "javascript:;");
	$(".page-template-career .work-with-us .cta-btn").attr('data-target','#current-opening');
	$(".page-template-career .work-with-us .cta-btn").on('click',function() {
		var target = $(this).data('target');
		var headerHeight = $('.header').height();
	    $('html,body').animate({
	        scrollTop: $(target).offset().top - headerHeight
	    },500);
	});
}

$(document).ready(function(){
	touchCheck();
	mainMenu();
	sideBarToggle();
	footerToggle();
	caseStudySlider();
	dataColorGet();
	bannerBottom();
	lpBannerBottom();
	documentToggle();
	clientSaySlider();
	testimonialSlider();
	registerInputFocusEvents();
	givingSlider();
	showCoords();
	clickToScroll();
	otherPage();
	horizontalTab();
	career();
	// Refresh aos JS.
	onElementHeightChange(document.body, function(){
		AOS.refresh();
	});
	// gridMasonry();
});

$(window).on('resize', function(){
	touchCheck();
});
/*==============================================================*/
	// mobile menu toggle init
/*==============================================================*/
$(window).on('load', function(){
	
	jQuery('.right-sidebar ul > li').each(function( index, element ) {
		var currentlimobile=jQuery(this).find('ul.sub-menu').length;
		//console.log(currentlimobile)
		if(jQuery(currentlimobile).length == 1)
		{
			jQuery("<span class='nav-link-toggle d-flex align-items-center justify-content-center'><span class='plus'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/></svg></span><span class='minus'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-dash' viewBox='0 0 16 16'><path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/></svg></span></span>").insertBefore(jQuery(this).find('ul.sub-menu'))
		};
	});
	var link = jQuery(".nav-link-toggle");
	link.on('click', function(e) {
		e.preventDefault();
		if (jQuery(this).is('.open')) {
			jQuery(this).removeClass('open');
			jQuery(this).next('ul').slideUp();
		}else{
			jQuery('.right-sidebar ul > li').find('.nav-link-toggle').removeClass('open');
			jQuery('.right-sidebar ul > li').find('ul').slideUp();
			jQuery(this).addClass('open');
			jQuery(this).next('ul').slideDown();
		}
	});

	// $('.masorny-grid').isotope({
	// 	itemSelector: '.grid-item',
	// 	percentPosition: true,
	// 	masonry: {
	// 		columnWidth: '.grid-sizer',
	// 		gutter: 0,
	// 	}
	// });
	// $('.masorny-grid').imagesLoaded().progress( function() {
	// 	$('.masorny-grid').isotope('layout');
	// });
});

// $(window).on('scroll', function(){
// 	//var startAni = $('.process-we-follow').offset().top - 100;
// 	var scrollPosition = $(window).scrollTop();
// 	var pause = true;
// 	if(scrollPosition > startAni){
// 		pause = false;
// 		var item=  $('.process-follow .item');
// 		var k =0;
// 		setInterval(function () {
// 			if (!pause) {
// 				var $this = item.eq(k);
// 				if (item.hasClass('active'))  {
// 					item.removeClass('active');
// 				}
// 				$this.addClass('active');
// 				k++;
// 			}
// 		}, 2000);
// 	}
// });