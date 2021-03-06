(function ($) {
  'use strict';

  // Preloader js
  $(window).on('load', function () {
    $('.preloader').fadeOut(700);
  });

  // hero slider without pagination
  $('.hero-slider-2').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false
  });
  $('.hero-slider-2').slickAnimation();

  // slick slider
  $('.work-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 401,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// about slider
$('.about-slider').slick({
  arrows: true,
  autoplay: true,
  prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
  nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'\'></i></button>'
});
// about post slider
$('.post-slider').slick({
  arrows: true,
  autoplay: true,
  prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
  nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'\'></i></button>'
});

// Accordions
$('.collapse').on('shown.bs.collapse', function () {
  $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
}).on('hidden.bs.collapse', function () {
  $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
});

// testimonial slider
$('.testimonial-slider').slick({
  infinite: false,
  dots: false,
  arrows: true,
  autoplay: true,
  prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
  nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'\'></i></button>'
});

// clients logo slider
$('.client-logo-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});

//   magnific popup video
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-zoom-in',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: true
});

// Magnific Popup Image
$('.popup-image').magnificPopup({
  type: 'image',
  removalDelay: 160, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function () {
      // just a hack that adds mfp-anim class to markup
      this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  closeOnContentClick: true,
  midClick: true,
  fixedContentPos: true,
  fixedBgPos: true
});

// mixitup filter
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
var mixer;
if (containerEl) {
  mixer = mixitup(containerEl, {
    selectors: {
      target: '[data-ref~="mixitup-target"]'
    }
  });
}

//Active changer
$('.control').on('click', function () {
  $('.control').removeClass('active');
  $(this).addClass('active');
});

// animation scroll js
var html_body = $('html, body');
$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      html_body.animate({
        scrollTop: target.offset().top - 90
      }, 1500, 'easeInOutExpo');
      return false;
    }
  }
});

// easeInOutExpo Declaration
jQuery.extend(jQuery.easing, {
  easeInOutExpo: function (x, t, b, c, d) {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
});

// back to top button
$('.back-to-top').on('click',function (e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
});

// -----------------------------
//  Count Up
// -----------------------------
function counter() {
  var oTop;
  if ($('.count').length !== 0) {
    oTop = $('.count').offset().top - window.innerHeight;
  }
  if ($(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
      countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  }
}
// -----------------------------
//  On Scroll
// -----------------------------
$(window).on('scroll', function () {
  counter();
});

// syotimer
$('#simple-timer').syotimer({
  year: 2019,
  month: 1,
  day: 31,
  hour: 0,
  minute: 0
});

// AOS
AOS.init();

})(jQuery);

$(document).ready(function() {
  /*  smoothscroll
  ----------------------------------------------*/
  $(function() {
    $('.hero-slider-2 a, .navbar-default a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });
});

// JS text-typing animation
//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #e84444}";
        document.body.appendChild(css);
    };
