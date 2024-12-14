document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');
  const title = document.querySelector('h1');

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

document.addEventListener('DOMContentLoaded', function() {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Toggle dropdown on click for mobile and tablet users
  dropbtn.addEventListener('click', function() {
      const isVisible = dropdownContent.style.visibility === 'visible';
      
      // Toggle visibility
      dropdownContent.style.visibility = isVisible ? 'hidden' : 'visible';
      dropdownContent.style.opacity = isVisible ? '0' : '1';
      dropdownContent.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', function(event) {
      if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
          dropdownContent.style.visibility = 'hidden';
          dropdownContent.style.opacity = '0';
      }
  });
});
