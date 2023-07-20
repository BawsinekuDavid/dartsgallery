
function toggleNav() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.height === "0px") {
    navLinks.style.height = "200px";
  } else {
    navLinks.style.height = "0px";
  }
}



var navbar = document.getElementById("navbar");
var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};



const passwordInput = document.getElementById('password');
const togglePassword = document.querySelector('.toggle-password');

togglePassword.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
});



// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// let currentIndex = 0;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.style.transform = `translateX(${(i - index) * 100}%)`;
//   });
// }

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   showSlide(currentIndex);
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   showSlide(currentIndex);
// });
