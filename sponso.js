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

/* Sposno forum */
const btn = document.querySelector('.sponsorship-form button'); // Update to target the button in the form

document.getElementById('sponsorshipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.innerText = 'Sending...'; // Update button text

    const serviceID = 'service_p6kh829'; // Replace with your EmailJS service ID
    const userTemplateID = 'kearnsrobotics_12Sa'; // Replace with your user confirmation template ID
    const adminTemplateID = 'AdminKearnsrobotics'; // Replace with your admin notification template ID

    // Send email to user
    emailjs.sendForm(serviceID, userTemplateID, this)
        .then(() => {
            // Send email to admin
            emailjs.sendForm(serviceID, adminTemplateID, this)
                .then(() => {
                    btn.innerText = 'Send Email'; // Reset button text
                    document.getElementById('successMessage').style.display = 'block'; // Show success message
                    this.reset(); // Clear the form after submission
                }, (err) => {
                    btn.innerText = 'Send Email'; // Reset button text
                    alert('Admin Notification Error: ' + JSON.stringify(err)); // Show error in an alert
                });
        }, (err) => {
            btn.innerText = 'Send Email'; // Reset button text
            alert('User Confirmation Error: ' + JSON.stringify(err)); // Show error in an alert
        });
});

// Get modal element
const modal = document.getElementById('formModal');
const openFormBtn = document.getElementById('openFormBtn');
const closeBtn = document.getElementsByClassName('close')[0];

// Open modal when button clicked
openFormBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close modal when x is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}