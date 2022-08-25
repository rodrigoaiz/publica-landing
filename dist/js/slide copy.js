let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function afuera() {


      let slideshowPage = document.querySelector(".slider");
      let slides = slideshowPage.querySelectorAll(".slide");
      for (i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains("animate__backInLeft")){
            slides[i].classList.remove("animate__backInLeft");
            slides[i].classList.add("animate__backOutLeft");
        }
      }

}


function showSlides(n) {
    let i;
    if (document.querySelector(".slider")) {
        let slideshowPage = document.querySelector(".slider");
        if (slideshowPage.classList.contains("slider")) {
            let slides = slideshowPage.querySelectorAll(".slide");
            if (n > slides.length) {
            slideIndex = 1
            }
            if (n < 1) {
            slideIndex = slides.length
            }
        for (i = 0; i < slides.length; i++) {

             //slides[i].classList.add("animate__backOutLeft");
        }

        slides[slideIndex-1].classList.add("animate__animated");
        slides[slideIndex-1].classList.add("animate__backInLeft");

        }
    }
}

setInterval(function() {
 afuera();
}, 5000);

setInterval(function() {

  plusSlides(1)
}, 5000);
