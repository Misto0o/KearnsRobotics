   // Dropdown toggle function
   function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onload = function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block'; // Show the popup
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


const track = document.getElementById("image-track");

// Scrolling function to move images over time
let scrollSpeed = 0; // This variable controls the scrolling speed

const animateScroll = () => {
    scrollSpeed += 0.5; // Increment scroll speed
    track.style.transform = `translateX(-${scrollSpeed}px)`; // Move track left

    // Reset the scroll speed if it reaches halfway
    if (scrollSpeed > track.scrollWidth / 2) {
        scrollSpeed = 0.5; // Reset to start
    }

    requestAnimationFrame(animateScroll); // Call function recursively
};

// Start the scrolling animation
animateScroll();


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


function removeScrollBars() {
    document.body.style.overflow = 'hidden'; // Prevent scroll bars on the body
    document.documentElement.style.overflow = 'hidden'; // Prevent scroll bars on the HTML element
}

// Call the function to remove scroll bars on page load
window.addEventListener('load', removeScrollBars);

// Optional: If you want to reapply this on window resize
window.addEventListener('resize', removeScrollBars);