document.addEventListener("DOMContentLoaded", function() {
    const hammerImg = document.querySelector('.hammer img');
    const content = document.querySelector('.content');
    const title = document.querySelector('h1');
    const body = document.querySelector('body');
    const teamContainer = document.querySelector('.team-container');
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const whiteScreen = document.getElementById('white-screen');

    dropdownButton.style.opacity = '0';
    dropdownButton.style.pointerEvents = 'none';

    // Start the hammer animation
    setTimeout(() => {
        hammerImg.style.opacity = '1';
        hammerImg.style.animation = 'hammerSwing 2s ease-in-out 3 forwards';
    }, 100);

    // Start fade out after hammer animation
    setTimeout(() => {
        hammerImg.style.animation = 'fadeOut 2.5s ease-in-out forwards';
        
        hammerImg.addEventListener('animationend', () => {
            hammerImg.parentElement.style.display = 'none'; // Hide hammer
            content.style.display = 'block'; // Show content
            content.style.opacity = '1'; // Fade in content

            dropdownButton.style.opacity = '1'; // Show dropdown
            dropdownButton.style.pointerEvents = 'auto';

            teamContainer.style.display = 'flex';
            setTimeout(() => {
                teamContainer.style.opacity = '1'; // Fade in team container
            }, 100);
        });
    }, 6000); // Adjust timing

    // Fade out white screen after hammer animation
    setTimeout(() => {
        whiteScreen.style.transition = 'opacity 2s ease-out';
        whiteScreen.style.opacity = '0';
        setTimeout(() => whiteScreen.style.display = 'none', 2000); // Hide completely
    }, 7500);

    // Dropdown toggle function
    dropdownButton.addEventListener('mouseenter', () => {
        dropdownContent.style.opacity = '1';
        dropdownContent.style.visibility = 'visible';
    });

    dropdownButton.addEventListener('mouseleave', () => {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.visibility = 'hidden';
    });

    dropdownContent.addEventListener('mouseenter', () => {
        dropdownContent.style.opacity = '1';
        dropdownContent.style.visibility = 'visible';
    });

    dropdownContent.addEventListener('mouseleave', () => {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.visibility = 'hidden';
    });
});

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