const image1 = document.querySelector(".image1");
const image2= document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4= document.querySelector(".image4");
const image5 = document.querySelector(".image5");
const image6= document.querySelector(".image6");
const image7 = document.querySelector(".image7");
const image8= document.querySelector(".image8");
const image9= document.querySelector(".image9");


document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  });

 
  
  /* function select(i) {
  
    
    image(i).addEventListener("click", () => {
      swiper.slideTo(i - 1);
    });

    */
  
  
  
  image1.addEventListener("click", () => {
    swiper.slideTo(0);
    image1.style.opacity = "1";
    image2.style.opacity = "0.4";
    image3.style.opacity = "0.4";
    image4.style.opacity = "0.4";
    image5.style.opacity = "0.4";
    image6.style.opacity = "0.4";
    image7.style.opacity = "0.4";
    image8.style.opacity = "0.4";
    image9.style.opacity = "0.4";
  });

  image2.addEventListener("click", () => {
    swiper.slideTo(1);
    image2.style.opacity = "1";
    image1.style.opacity = "0.4";
    image3.style.opacity = "0.4";
    image4.style.opacity = "0.4";
    image5.style.opacity = "0.4";
    image6.style.opacity = "0.4";
    image7.style.opacity = "0.4";
    image8.style.opacity = "0.4";
    image9.style.opacity = "0.4";
  });
  image3.addEventListener("click", () => {
    swiper.slideTo(2);
    image1.style.opacity = "0.4";
    image2.style.opacity = "0.4";
    image3.style.opacity = "1";
    image4.style.opacity = "0.4";
    image5.style.opacity = "0.4";
    image6.style.opacity = "0.4";
    image7.style.opacity = "0.4";
    image8.style.opacity = "0.4";
    image9.style.opacity = "0.4";
  });
  image4.addEventListener("click", () => {
    swiper.slideTo(3);
    image1.style.opacity = "0.4";
    image2.style.opacity = "0.4";
    image3.style.opacity = "0.4";
    image4.style.opacity = "1";
    image5.style.opacity = "0.4";
    image6.style.opacity = "0.4";
    image7.style.opacity = "0.4";
    image8.style.opacity = "0.4";
    image9.style.opacity = "0.4";
  });
  image5.addEventListener("click", () => {
    swiper.slideTo(4);
    image1.style.opacity = "0.4";
    image2.style.opacity = "0.4";
    image3.style.opacity = "0.4";
    image4.style.opacity = "0.4";
    image5.style.opacity = "1";
    image6.style.opacity = "0.4";
    image7.style.opacity = "0.4";
    image8.style.opacity = "0.4";
    image9.style.opacity = "0.4";
  });
  image6.addEventListener("click", () => {
    swiper.slideTo(5);
    image1.style.opacity = "0.4";
    image2.style.opacity = "0.4";
    image3.style.opacity = "0.4";
    image4.style.opacity = "0.4";
    image5.style.opacity = "0.4";
    image6.style.opacity = "1";
    image7.style.opacity = "0.4";
    image8.style.opacity = "0.4";
    image9.style.opacity = "0.4";
  });
  image7.addEventListener("click", () => {
    swiper.slideTo(6);
    image1.style.opacity = "0.4";
    image2.style.opacity = "0.4";
    image3.style.opacity = "0.4";
    image4.style.opacity = "0.4";
    image5.style.opacity = "0.4";
    image6.style.opacity = "0.4";
    image7.style.opacity = "1";
    image8.style.opacity = "0.4";
    image9.style.opacity = "0.4";
  });
  image8.addEventListener("click", () => {
    swiper.slideTo(7);
    image1.style.opacity = "0.4";
    image2.style.opacity = "0.4";
    image3.style.opacity = "0.4";
    image4.style.opacity = "0.4";
    image5.style.opacity = "0.4";
    image6.style.opacity = "0.4";
    image7.style.opacity = "0.4";
    image8.style.opacity = "1";
    image9.style.opacity = "0.4";
  });
  image9.addEventListener("click", () => {
    swiper.slideTo(8);
    image1.style.opacity = "0.4";
    image2.style.opacity = "0.4";
    image3.style.opacity = "0.4";
    image4.style.opacity = "0.4";
    image5.style.opacity = "0.4";
    image6.style.opacity = "0.4";
    image7.style.opacity = "0.4";
    image8.style.opacity = "0.4";
    image9.style.opacity = "1";
  });



});
