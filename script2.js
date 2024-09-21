const slides = document.querySelectorAll('.slide');
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const intervalTime = 5000;
let slideInterval;

next.addEventListener("click", e => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
});

prev.addEventListener("click", e => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
});

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if(current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if(current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

slideInterval = setInterval(nextSlide, intervalTime);

// contact us map
// Scroll reveal button
function scrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  for (let element of revealElements) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
          element.classList.add('revealed');
      }
  }
}

window.addEventListener('scroll', scrollReveal);


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

