/*
  Author: Divine-Store
  Template: Masnoo (Landing Page)
  Version: 1.0
  URL: http://themeforest.net/user/divine-store/
*/
$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $(".btn-dark").css("display", "flex");
    $(".btn-dark").addClass("animate__fadeInUp animate__faster");
    $(".btn-dark").removeClass("animate__fadeOutDown");
  } else {
    $(".btn-dark").addClass("animate__fadeOutDown animate__faster");
    $(".btn-dark").removeClass("animate__fadeInUp");
  }
});

$(document).bind("contextmenu",function(e){
  return false;
    });
  
    // WOW initalization
    new WOW().init();
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1600
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 30],
    easing: "easeOutExpo",
    duration: 2000,
    delay: 20
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) =>64 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 99999000,
    easing: "easeOutExpo",
    delay: 1000
  });


(function($) {
  "use strict";

  $(document).ready(function (){
    'use strict';

    // Slick initializer function
    $(".ds-carousel").slick({
      autoplay: true,
      autoplaySpeed: 1000,
      dots: true,
      arrows: false
    });
    $(".ds-clients-carousel").slick({
      autoplay: true,
      autoplaySpeed: 1000,
      dots: true,
      arrows: false
    });

    // Scroll to next module after Header section 
    $(".ds-scroll-down a").on('click',function(e) { 
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $("header").nextAll('.module').offset().top},
        1250);           
    });
	
	
	// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


    // Featherlight
    $('.ds-projects-item a').featherlight({
        targetAttr:     'href',
        closeOnClick:   'anywhere'
    });

    // Countdown
    $(function() {
      var endDate = "January 12, 2021 00:00:00";
      $('.ds-countdown .row').countdown({
        date: endDate,
        render: function(data) {
          $(this.el).html('<div><div><span>' + (parseInt(this.leadingZeros(data.years, 2)*365) + parseInt(this.leadingZeros(data.days, 2))) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="ds-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
        }
      });
    });

    // backstretch
    $("header").backstretch("img/bg.jpg");    
    $(".photo").backstretch("img/bg-2.jpg");    
    $(".photo-centered").backstretch("img/bg-3.jpg");

    // Simple Text Rotator
    $("#words").wordsrotator({
      autoLoop: true,             //auto rotate words
      randomize: false,               //show random entries from the words array
      stopOnHover: false,             //stop animation on hover
      changeOnClick: false,           //force animation run on click
      animationIn: "fadeInDown",         //css class for entrace animation
      animationOut: "fadeOutUp",           //css class for exit animation
      speed: 2000,                //delay in milliseconds between two words
      words: ['Faster','Smoother','Creative', 'InteractiveUI', 'Vishesh']  //Array of words, it may contain HTML values
    });


    
    // block scroll mouse button
    $(function() {
      $('body').mousedown(function(e){if(e.button==1)return false});
    });

    // hiding other team members on hover
    $(".ds-team-person").on({
      mouseenter: function () {
        $('.ds-team-person').not($(this)).css("opacity", "0.25");
      },
      mouseleave: function () {
        $('.ds-team-person').not($(this)).css("opacity", "1");
      }
    });

  });

  // Preloader
  // Change delay and fadeOut speed (in miliseconds)
  $(window).load(function() {
    $(".ds-preloader").delay(1700).fadeOut(800);
  });

})(jQuery);