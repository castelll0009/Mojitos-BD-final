//autoplay swiper1
var swiper1 = new Swiper(".swiper1",{
  slidesPerView: 3,
  spaceBetween: 15,
  freeMode: true,    
  autoplay: true,
  speed: 3000,
  stopOnLastSlide : true,
  breakpoints: {    
    // when window width is >= 320px
    350: {
     slidesPerView: 2,
     spaceBetween: 10      
   },
   // when window width is >= 320px
   360: {
     slidesPerView: 2.3,
     spaceBetween: 10      
   },
    // when window width is >= 411px
   411: {
     slidesPerView: 2.2,
     spaceBetween: 10
   },
   // when window width is >= 480px
   467: {
     slidesPerView: 2.5,
     spaceBetween: 10
   },
   500: {
     slidesPerView: 2.6,
     spaceBetween: 20
   },
   550: {
     slidesPerView: 3,
     spaceBetween: 20
   },
   // when window width is >= 640px
   640: {
     slidesPerView: 4,
     spaceBetween: 20
   },
   // when window width is >= 640px
   1000: {
     slidesPerView: 5,
     spaceBetween: 20, 
   }
 }, 
})
//autoplay swiper2////////////(/////)
/////////////////////////////sss
var swiper2 = new Swiper(".swiper2",{
  slidesPerView: 3,
  spaceBetween: 15,
  freeMode: true,    
  autoplay: true,
  speed: 3000,
  stopOnLastSlide : true,
  breakpoints: {    
    // when window width is >= 320px
    350: {
     slidesPerView: 2,
     spaceBetween: 10      
   },
   // when window width is >= 320px
   360: {
     slidesPerView: 2.3,
     spaceBetween: 10      
   },
    // when window width is >= 411px
   411: {
     slidesPerView: 2.2,
     spaceBetween: 10
   },
   // when window width is >= 480px
   467: {
     slidesPerView: 2.5,
     spaceBetween: 10
   },
   500: {
     slidesPerView: 2.6,
     spaceBetween: 20
   },
   550: {
     slidesPerView: 3,
     spaceBetween: 20
   },
   // when window width is >= 640px
   640: {
     slidesPerView: 4,
     spaceBetween: 20
   },
   // when window width is >= 640px
   1000: {
     slidesPerView: 5,
     spaceBetween: 20, 
   }
 }, 
})
//autoplay swiper3////////////
/////////////////////////////
//////////////////////////////
var swiper3 = new Swiper(".swiper3",{
  slidesPerView: 3,
  spaceBetween: 15,
  freeMode: true,    
  autoplay: true,
  speed: 3000,
  stopOnLastSlide : true,
  breakpoints: {    
    // when window width is >= 320px
    350: {
     slidesPerView: 2,
     spaceBetween: 10      
   },
   // when window width is >= 320px
   360: {
     slidesPerView: 2.3,
     spaceBetween: 10      
   },
    // when window width is >= 411px
   411: {
     slidesPerView: 2.2,
     spaceBetween: 10
   },
   // when window width is >= 480px
   467: {
     slidesPerView: 2.5,
     spaceBetween: 10
   },
   500: {
     slidesPerView: 2.6,
     spaceBetween: 20
   },
   550: {
     slidesPerView: 3,
     spaceBetween: 20
   },
   // when window width is >= 640px
   640: {
     slidesPerView: 4,
     spaceBetween: 20
   },
   // when window width is >= 640px
   1000: {
     slidesPerView: 5,
     spaceBetween: 20, 
   }
 }, 
})

$(".swiper1").on(" mouseover touched touchmove", function(e){  
  swiper1.autoplay.stop();   
  swiper2.autoplay.start();  
  swiper3.autoplay.start();  
})
$(".swiper2").on(' mouseover touched touchmove', function(e){  
  swiper1.autoplay.start();   
  swiper2.autoplay.stop();  
  swiper3.autoplay.start(); 
})
$(".swiper3").on(' mouseover touched touchmove', function(e){  
  swiper1.autoplay.start();   
  swiper2.autoplay.start();  
  swiper3.autoplay.stop();  
})

