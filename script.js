


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

// let currentSlides = 0;
// function changeSlides(direction){
// const slides = document.querySelectorAll('.slider-item-projects'); // Updated class name
// const totalSlides = slides.length;

// currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
// const offset = -currentSlide * 100;
// document.querySelector('.slides-projects').style.transform = `translateX(${offset}%)`; // Updated class name
// }

// document.addEventListener('DOMContentLoaded', () => {
// changeSlides(0);
// });


// end slides projects



document.addEventListener('DOMContentLoaded', () => {
  let currentSlides = 0;

  // Array of link data for each project slide
  const slideLinks = [
    { href: "projectLandingpage.html", label: "Car Dealership Dashboard" },
    { href: "salesdashboard.html", label: "Golf Dashboard" }
  ];

  const slides = document.querySelectorAll('.slider-item-projects');
  const totalSlides = slides.length;
  const slidesContainer = document.querySelector('.slides-projects');
  const projectLink = document.getElementById('project-link');
  const prevButton = document.querySelector('.prevs');
  const nextButton = document.querySelector('.nexts');

  function changeSlides(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;

    // Update link based on slide
    projectLink.href = slideLinks[currentSlide].href;
    projectLink.textContent = `View: ${slideLinks[currentSlide].label}`;
  }

  // Attach button click events
  prevButton.addEventListener('click', () => changeSlides(-1));
  nextButton.addEventListener('click', () => changeSlides(1));

  // Initialize the first slide
  changeSlides(0);
});

//end slider projects new script


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
