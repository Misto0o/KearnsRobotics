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

// Call the function on page load and on window resize
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

if (window.innerWidth <= 768) {
    // Disable or adjust smooth scrolling on mobile for better performance
    document.documentElement.style.scrollBehavior = 'auto'; // Reset smooth scrolling if needed
} else {
    document.documentElement.style.scrollBehavior = 'smooth';
}

 // Wait for the page to fully load
 window.onload = function () {
    const intro = document.getElementById('intro'); // Loading screen
    const header = document.getElementById('header'); // Navbar
    const teamContainer = document.querySelector('.team-container'); // Main content

    // Hide content during loading screen
    header.style.display = 'none';
    teamContainer.style.display = 'none';

    // Display main content after loading animation
    setTimeout(() => {
        intro.classList.add('fade-out'); // Add fade-out animation
        setTimeout(() => {
            intro.style.display = 'none'; // Hide loading screen
            header.style.display = 'block'; // Show navbar
            teamContainer.style.display = 'block'; // Show main content
            AOS.refresh(); // Refresh AOS to apply animations
        }, 1300); // Matches fade-out duration
    }, 2500); // Loading duration
};