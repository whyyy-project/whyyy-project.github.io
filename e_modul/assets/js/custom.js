(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


})(jQuery);

function item(data){
	const pdf = data
   if(pdf.style.display == 'none'){
   pdf.style.display = 'block';
   }
  else
  {
	pdf.style.display = 'none';
	
  }
}

 // Fungsi untuk membagikan halaman web saat ini
 function bagikanHalaman() {
    // Periksa apakah browser mendukung fungsi navigator.share()
    if (navigator.share) {
      // Dapatkan URL halaman web saat ini
      var currentUrl = window.location.href;
      
      // Bagikan URL menggunakan navigator.share()
      navigator.share({
        title: document.title,
        url: currentUrl
      }).then(() => {
        console.log('URL berhasil dibagikan');
      }).catch((error) => {
        console.error('Gagal membagikan URL:', error);
      });
    } else {
      // Jika browser tidak mendukung navigator.share()
      alert('Maaf, browser Anda tidak mendukung fitur pembagian.');
    }
  }

  var audio = document.getElementById("myAudio");
  var soundIcon = document.getElementById("soundIcon");

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      soundIcon.className = "fa fa-volume-up";
    } else {
      audio.pause();
      soundIcon.className = "fa fa-volume-off";
    }
  }