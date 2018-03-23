


$(document).ready(function() {
   $('.point').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        classToRemove: 'hidden',
        offset: 200
       });
});

$(function(){
 $(document).click(function(event) {
  if ($(event.target).closest('.').length) return;
   hideBlock();
   event.stopPropagation();
 });
// });

var lastScrollTop = 0;
  
    $(window).scroll(function(){
    
    
	    var st = $(this).scrollTop();
	    if (st > lastScrollTop) {
	      $("header").addClass("hide-menu");
	      $("header").removeClass("show-menu");
	      $("header").css("top", "none");
	    } else {
	      $("header").addClass("fixed-header");
	      $("header").addClass("show-menu");
	      $("header").removeClass("hide-menu");
	    } 
	    
	     lastScrollTop = st;
	    if ($(window).scrollTop() >= 100) {
	      $("header").addClass("fixed-header");
	    } else {
	      $("header").removeClass("hide-menu");
	      $("header").removeClass("show-menu");
	      $("header").removeClass("fixed-header");
	    }
   });

// var windowsHeigt = $(window).height();
// 	var windowsWidth = $(window).width();



	$(".menu-btn").click(function() {
		if ($(".menu-btn").hasClass("close-btn")) {
			$(".menu-btn").removeClass("close-btn");
			$(".menu-btn").addClass("open");
			$("footer .social").addClass("show-social");
			$("nav").addClass("open-menu");
		} else {
			$(".menu-btn").removeClass("open");
			$(".menu-btn").addClass("close-btn");
			$("footer .social").removeClass("show-social");
			$("nav").removeClass("open-menu");
		}
	});


	$("nav a").click(function() {
		$(".menu-btn").removeClass("open");
		$(".menu-btn").addClass("close-btn");
		$("footer .social").removeClass("show-social");
		$("nav").removeClass("open-menu");
	});
	
	function menuHeight() {
		if ($(window).width() <= 800) {
			$("nav").css("height", windowsHeigt+"px");
		}
	};
	menuHeight();
	
	$(window).resize(function() {
		menuHeight();
	});

	// 
	
	var lastScrollTop = 0;
	
	$(window).scroll(function(){
		
		
		var st = $(this).scrollTop();

		if (st > lastScrollTop) {
			$("header").removeClass("fixed-header");
			$("header").addClass("hide-menu");
			$("header").removeClass("show-menu");
			$(".menu-btn").removeClass("open");
			$(".menu-btn").addClass("close");
			$(".navigation").removeClass("active-navigation");
		} else {
			$("header").addClass("fixed-header");
			$("header").addClass("show-menu");
			$("header").removeClass("hide-menu");
			$(".menu-btn").removeClass("open");
			$(".menu-btn").addClass("close");
			$(".navigation").removeClass("active-navigation");
			
		}
	   lastScrollTop = st;

		if ($(window).scrollTop() >= 75) {
			$("header").addClass("fixed-header");
		} else {
			$("header").removeClass("hide-menu");
			$("header").removeClass("show-menu");
			$("header").removeClass("fixed-header");
		}
	 });
	
});

