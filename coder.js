document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');
  const title = document.querySelector('h2');

  // Set the initial opacity to 0
  container.style.opacity = '0';

  // Reveal the container with a delay
  setTimeout(() => {
      container.style.opacity = '1'; // Make container visible
      animateTitle(); // Play animation on page load
  }, 1250); // Delay for 1 second

  // Add mouseover event to title for animation
  title.onmouseover = event => {
      animateTitle();
  };

  // Add click event to title
  title.addEventListener('click', () => {
      title.classList.toggle('animated-title');
  });

  // Function for animating title
  function animateTitle() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval = null;
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
          title.innerText = title.innerText
              .split("")
              .map((letter, index) => {
                  if(index < iteration) {
                      return title.dataset.value[index];
                  }
                  return letters[Math.floor(Math.random() * 26)];
              })
              .join("");

          if(iteration >= title.dataset.value.length) { 
              clearInterval(interval);
          }

          iteration += 1 / 3;
      }, 30);
  }
}),

// Toggle the navigation menu
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.querySelector('.navbar-burger');
    
    // Toggle the 'is-active' class to open/close the menu
    navLinks.classList.toggle('is-active');
    menuToggle.classList.toggle('is-active');
}

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Function to adjust layout based on screen size
function checkScreenSize() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const navLinks = document.querySelector(".navbar-menu");

    // Adjust layout styles based on screen width
    navLinks.style.flexDirection = isMobile ? "column" : "row";
}
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);