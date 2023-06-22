let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every "" seconds
}

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
