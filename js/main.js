$(document).ready(function(){
  $('.slider').slick({
  	fade: false,
  	autoplay: false,
  	autoplaySpeed: 2000,
  	arrows: true,
  	draggable: true,
  	cssEase: 'ease-in',
  	responsive: [
  	  {
  		breakpoint: 482,
  		settings: {
  			arrows: false,
  		}
  	  }
  	]
  });
  $('.slider-2').slick({
  	fade: true,
  	autoplay: false,
  	autoplaySpeed: 2000,
  	arrows: false,
  	draggable: true,
  	cssEase: 'ease-in',
  });
  $('.slider-3').slick({
  	fade: true,
  	autoplay: false,
  	autoplaySpeed: 2000,
  	arrows: false,
  	draggable: false,
  	cssEase: 'ease-in',
  	asNavFor: '.slider-3-mini',
  	responsive: [
  	  {
  		breakpoint: 480,
  		settings: {
  			draggable: true,
  			arrows: true,
  		}
  	  }
  	]
  });
  $('.slider-3-mini').slick({
  	centerMode: true,
  	slidesToShow: 7,
  	autoplay: false,
  	arrows: false,
  	draggable: false,
  	focusOnSelect: true,
  	asNavFor: '.slider-3',
  	cssEase: 'ease-in',
  });
  $('.slider-mini').slick({
  	centerMode: true,
  	centerPadding: '40px',
  	slidesToShow: 3,
  	autoplay: false,
  	arrows: false,
  	draggable: true,
  	focusOnSelect: true,
  	asNavFor: '.slider-4',
  	cssEase: 'ease-in',
  });
  $('.slider-4').slick({
  	autoplay: false,
  	arrows: true,
  	draggable: true,
  	focusOnSelect: true,
  	asNavFor: '.slider-mini',
  	cssEase: 'ease-in',
  });
  $('.slider-5-mini').slick({
  	centerMode: true,
  	centerPadding: '',
  	slidesToShow: 3,
  	autoplay: false,
  	arrows: false,
  	draggable: true,
  	focusOnSelect: true,
  	asNavFor: '.slider-5',
  	cssEase: 'ease-in',
  	centerMode: true,
  });
  $('.slider-5').slick({
  	autoplay: false,
  	arrows: true,
  	draggable: true,
  	focusOnSelect: true,
  	asNavFor: '.slider-5-mini',
  	cssEase: 'ease-in',
  });

  var slide1 = $('.slide-1')
  var slide2 = $('.slide-2')
  var slide3 = $('.slide-3')

  $( function() {
    var select = $( "#minbeds" );
    var foto1 = $(".img-slider-block-1");
    var foto2 = $(".img-slider-block-2");
    var foto3 = $(".img-slider-block-3");
    var foto4 = $(".img-slider-block-4");
    var foto5 = $(".img-slider-block-5");
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 4,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
        if (ui.value == 1) {
        	foto1.show();
        } else {
        	foto1.hide();
        }
        if (ui.value == 2) {
        	foto2.show();
        } else {
        	foto2.hide();
        }
        if (ui.value == 3) {
        	foto3.show();
        } else {
        	foto3.hide();
        }
        if (ui.value == 4) {
        	foto4.show();
        } else {
        	foto4.hide();
        }
        if (ui.value == 5) {
        	foto5.show();
        } else {
        	foto5.hide();
        }
       
      }
    });
    $( "#minbeds" ).on( "change", function() {
      slider.slider( "value", this.selectedIndex + 1 );

    });

 	
});



    });
    





