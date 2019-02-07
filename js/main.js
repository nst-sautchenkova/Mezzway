//animate
AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
	disable: function () {
    var maxWidth = 1100;
    return window.innerWidth < maxWidth;
  }
	
});

//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});



$(document).ready(function(){
	var nav_wrap = $(".sliding-menu"),
		elem_width,
		elem_left_offset,
		elem_parent,
		slider_line;
	$(window).load(function(){
		nav_wrap.each(function(){
			$(this).append('<li class="sliding-line"></li>');
			var start_elem_width = 0;
			var start_elem_offset = 0;
			var active_elem = $(this).find(".active");
			if(active_elem.length){
				start_elem_width = active_elem.outerWidth();
				start_elem_offset = active_elem.position().left;
			} 
			$(this).find(".sliding-line").css({
				"width": start_elem_width + "px",
				"left": start_elem_offset + "px"
			})
			.data("width", start_elem_width)
			.data("left", start_elem_offset);
		});
	});
	nav_wrap.find("li a").hover(function(){
		elem_parent = $(this).parent();
		elem_width = elem_parent.outerWidth();
	    elem_left_offset = $(this).position().left;
	    slider_line = elem_parent.siblings(".sliding-line");
	    slider_line.stop().animate({
	    	"width": elem_width + "px",
	        "left": elem_left_offset + "px"
	    });
	}, function(){
	    slider_line.stop().animate({
	    	"width": slider_line.data("width") + "px",
	        "left": slider_line.data("left") + "px"
	    });
	});
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.js-animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
});
	
//	accordion
$(document).on("ready", function () {
	$(".faq-accordion .accordion").click(function () {
	if ($(this).hasClass('active')) {
        $(this).removeClass('active');
		$(this).parent().toggleClass('active');
		$(this).siblings("").hide("slow");
    } else {
        $(this).addClass('active');
		$(this).parent().toggleClass('active');
		$(this).siblings().show("slow");
    }
   
	});
	
});	

$('.modal-block').on('click', function(){
	var	id =  this.id;
  $(".modal[data-id='#"+id+"']").toggleClass('open');
  $(".modal-ov").show("slow");
  $("body").addClass("open");
  
});

$(".close").click(function () {
	$(".modal-content").addClass('zoom');
	$(".modal-content.zoom").css({'transform':'scale(0)'});
	$(".modal-ov").hide("slow");
	function func() {
		$(".modal").removeClass("open");
		$("body").removeClass("open-hidden");
		$(".modal-content").removeClass('zoom');
		$(".modal-content").css({'transform':'scale(1)'});
	}
	setTimeout(func, 300);
	
});


$(document).on("ready", function () {
	$("#calculator-block ul.c-tab>li").click(function () {
		$("#calculator-block ul.c-tab>li").removeClass("active");
		$(this).addClass("active");
		
		$(this).parents('#calculator-block').removeAttr( 'class' );
		var cid=$("#calculator-block ul.c-tab>li.active").attr( 'id' );
		
		$(this).parents('#calculator-block').addClass(cid)
		
	});	
	
});

$(document).on("ready", function () {
	$("#calculator-block .top-block li").click(function () {
		$("#calculator-block .top-block li").removeClass("active");
		$(this).addClass("active");
	});	
});

//
$(document).on("ready", function () {
	$("#calculator-block .top-block .left-block").click(function () {
		$("#calculator-block .top-block .left-block span").css({display:'none'});
		$("#c-input").focus();
	});	
});

	

$('#c-input').on('change',function(){
	$('#minutely').html($('#c-input').prop("value") + "$");
	$('#diurnal').html($('#c-input').prop("value")  + "$");
	$('#total').html($('#c-input').prop("value") + "$");
});

/*MENU*/
$(document).on("ready", function () {
    $("header nav .cd-nav-trigger").click(function () {
        $("nav").toggleClass("menu-open");
		$(".nav-bar").toggleClass("open-menu");
		$('header nav .bar').toggleClass('animate');
		$("body").toggleClass("open-menu");
    });
});


$(document).on("ready", function () {
    $(".close-v").click(function () {
		var myVideo = document.getElementById("video-m");
		myVideo.pause ();
		
    });
});	


//tab
$('document').ready(function(){
   $('ul.tabs').delegate('li:not(.current)', 'click', function() {
	  $(this).addClass('current').siblings().removeClass('current').parents('div.tab-block').find('div.box').hide().eq($(this).index()).fadeIn(150);
	});
  $('ul.tabs li').click(function(e){
	 e.preventDefault();
  });
});