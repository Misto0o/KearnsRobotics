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

// Call animations on page load (AOS Init)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init(); // Initialize AOS (animation on scroll)
});

// Function to adjust layout based on screen size
function checkScreenSize() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const navLinks = document.querySelector(".navbar-menu");

    // Adjust layout styles based on screen width
    navLinks.style.flexDirection = isMobile ? "column" : "row";
}

// Call the function on page load and on window resize
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

if (window.innerWidth <= 768) {
    // Disable or adjust smooth scrolling on mobile for better performance
    document.documentElement.style.scrollBehavior = 'auto'; // Reset smooth scrolling if needed
} else {
    document.documentElement.style.scrollBehavior = 'smooth';
}
