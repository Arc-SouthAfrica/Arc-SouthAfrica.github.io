let slideIndex = 0;
let timer;

function startSlideshow() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    plusSlides(1);
    startSlideshow();
  }, 3000);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

startSlideshow();


var scrollTopButton = document.getElementById('scroll-top-button');
var scrollTimeout;

window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
    scrollTopButton.style.opacity = '0'; 
  }, 2000);
  
  if (window.pageYOffset > 0) {
    scrollTopButton.style.opacity = '1'; 
  } else {
    scrollTopButton.style.opacity = '0'; 
  }
});

scrollTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
