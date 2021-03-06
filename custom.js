
// ISOTOPE FILTER
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});


// PRELOADER JS
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


// jQuery to collapse the navbar on scroll //
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });


  // HOME BACKGROUND SLIDESHOW
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "http://www.hercampus.com/sites/default/files/2016/09/09/ShowImage.jpeg", 
       "https://s-media-cache-ak0.pinimg.com/originals/5f/dd/98/5fdd9827de2d6ce36146ff8713af9ac5.jpg",
       "http://celebritywallpapershq.com/wp-content/uploads/2016/01/Joseph-Gordon-Levitt-Wallpapers-10.jpg",
       "http://www.reactiongifs.com/wp-content/uploads/2013/11/trre.gif",
       "http://wallpapersdsc.net/wp-content/uploads/2016/01/Chris-Pratt-Photos.jpg"
        ],  {duration: 2000, fade: 750});
    });
  })

  $(function(){
    jQuery(document).ready(function() {
    $('#contact').backstretch([
       "http://www.slate.com/content/dam/slate/blogs/wild_things/2015/09/02/150902_WILD_CutePenguins.jpg.CROP.promo-xlarge2.jpg",
       "http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-34.jpg",
       "https://i.ytimg.com/vi/1LqyOX12_nQ/maxresdefault.jpg",
       "http://kingworldnews.com/wp-content/uploads/2014/12/KWN-Worlds-Cutest-Baby-Animals-3.jpg"
        ],  {duration: 2000, fade: 750});
    });
  })

});

