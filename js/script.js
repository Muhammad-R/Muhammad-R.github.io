$(window).on("load",function(){

        $(".loader").fadeOut(3500);
        $(".loader.inner").fadeOut(3500)

    $(".items").isotope({
        filter: '*',
        animationOptions:{
            duration:1500,
            easing:'linear',
            queue:false
        }
    });




});




$(document).ready(function(){



    $('#slides').superslides({
        animation:'fade',
        play: 5000,
        pagination:false,

    });

    var typed = new Typed(".typed",{
        strings: ["Software Engineer", "Full stack Developer",  "Student"],
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });




    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function(){
        if (window.pageYOffset > skillsTopOffset - $(window).height()-+00){

            $('.chart').easyPieChart({
                easing:'easInOut',
                barColor:'#fff',
                trackColor:false,
                scaleColor:false,
                lineWidth:4,
                size:152,
                onStep: function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
             });
        }
    });

    $("[data-fancybox]").fancybox();


    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions:{
                duration:1500,
                easing:'linear',
                queue:false
            }
        });

        return false;

    });

    $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

});
