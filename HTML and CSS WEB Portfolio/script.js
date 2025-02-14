function sendMail(){
let parms = {

    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value

}

    emailjs.sendForm("service_oex0w0i","template_o5td2ej",parms).then(aleart("Email Sent!"))

}

//accordian funtionality
document.addEventListener('DOMContentLoaded', () => {
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
});
// Slider skills
let currentSlide = 0;
function changeSlide(direction){
  const slides = document.querySelectorAll('.slider-item');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  const offset = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}
  document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0);
  });

//slider projects

let currentSlides = 0;
function changeSlides(direction){
const slides = document.querySelectorAll('.slider-item-projects'); // Updated class name
const totalSlides = slides.length;

currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
const offset = -currentSlide * 100;
document.querySelector('.slides-projects').style.transform = `translateX(${offset}%)`; // Updated class name
}

document.addEventListener('DOMContentLoaded', () => {
changeSlides(0);
});


// Hamburger Menu 
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('.nav ul');

  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav a');

  // Function to remove the 'active' class from all nav links
  const removeActiveClasses = () => navLinks.forEach(link => link.classList.remove('active'));

  // Function to add the 'active' class to the current link
  const addActiveClass = (id) => {
    removeActiveClasses();
    const activeLink = document.querySelector(`.nav a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add('active');
  };

  // Function to detect section in view
  const observeSections = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        addActiveClass(entry.target.id);
      }
    });
  };

  // Set up Intersection Observer
  const observer = new IntersectionObserver(observeSections, {
    root: null,
    threshold: 0.5
  });

  // Observe each section
  sections.forEach(section => observer.observe(section));

  // Add click event to nav links for scrolling
  navLinks.forEach(link => { 
    link.addEventListener('click', (event) => {
       event.preventDefault();
        const section = document.querySelector(link.getAttribute('href')); 
        if (section) { 
          const headerOffset = document.querySelector('header').offsetHeight; 
          const elementPosition = section.getBoundingClientRect().top; 
          const offsetPosition = elementPosition - headerOffset;
           window.scrollBy({ 
            top: offsetPosition, 
            behavior: 'smooth' 
          }); 
          setTimeout(() =>{
            addActiveClass(section.id); 
          }, 500);
        } 
      }); 
    });
});
