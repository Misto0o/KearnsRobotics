window.onload = function() {
    const intro = document.getElementById('intro');
    const content = document.getElementById('content');

    // Wait for a moment before starting the fade out
    setTimeout(() => {
        intro.classList.add('fade-out'); // Fade out the intro
        
        // Wait for the fade-out animation to complete before showing content
        setTimeout(() => {
            intro.style.display = 'none'; // Hide the intro
            content.style.display = 'block'; // Show the content
            content.classList.add('visible'); // Fade in the content
        }, 1300); // Match this time with the CSS transition duration
    }, 2500); // Duration before fade out starts (2 seconds)
};

// Assuming you have an animation function; you might already have this.
function startAnimation() {
    // Your animation logic here

    // After the animation completes, show the final message
    setTimeout(() => {
        document.getElementById('final-message').style.display = 'block';
    }, 3000); // Adjust the timeout duration to match your animation duration
}

// Call your animation function
startAnimation();

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