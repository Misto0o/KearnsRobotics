function checkScreenSize() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;

    // Elements to adjust based on screen size
    const welcomeSection = document.getElementById("welcome");
    const headerContent = document.querySelector(".header-content");
    const logo = document.querySelector(".logo");
    const dropdown = document.querySelector(".dropdown");
    const dropdownButton = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const contactInfo = document.getElementById("contact-info");

    // Apply styles to hide scroll bars for mobile and tablet
    if (isMobile || isTablet) {
        document.body.style.overflow = 'hidden'; // Hide overflow to remove scroll bars
    } else {
        document.body.style.overflow = ''; // Reset overflow for desktop
    }

    if (isMobile) {
        // Mobile-specific adjustments
        welcomeSection.style.textAlign = "center";
        welcomeSection.style.padding = "10px";

        headerContent.style.flexDirection = "row";
        headerContent.style.alignItems = "center";
        headerContent.style.justifyContent = "flex-start";
        headerContent.style.margin = "20px";
        logo.style.width = "30%";
        logo.style.marginRight = "auto";

        dropdown.style.width = "80%";
        dropdown.style.position = "relative";
        dropdown.style.left = "200px";
        dropdown.style.margin = "-25px 0";

        dropdownButton.style.fontSize = "1.5rem";
        dropdownButton.style.padding = "0.5rem 1rem";

        dropdownContent.style.display = "flex";
        dropdownContent.style.flexDirection = "column";
        dropdownContent.style.fontSize = "0.8rem";
        dropdownContent.style.left = "37%";
        dropdownContent.style.transform = "translateX(-80%) scale(0.7)";
        dropdownContent.style.top = "0.2rem";
        dropdownContent.style.minWidth = "80px";
        dropdownContent.style.padding = "4px";
        dropdownContent.style.width = "auto";

        contactInfo.style.position = "fixed";
        contactInfo.style.bottom = "5px";
        contactInfo.style.width = "100%";
        contactInfo.style.left = "50%";
        contactInfo.style.transform = "translateX(-50%)";
        contactInfo.style.padding = "15px";
    } else if (isTablet) {
        // Unified tablet-specific adjustments (landscape & portrait)
        welcomeSection.style.textAlign = "center";
        welcomeSection.style.padding = "15px";

        headerContent.style.flexDirection = "column";
        headerContent.style.alignItems = "center";
        headerContent.style.justifyContent = "center";
        headerContent.style.margin = "15px auto";
        logo.style.width = "35%"; // Increased width for better visibility
        logo.style.margin = "0 auto"; // Center align logo

        dropdown.style.width = "70%";
        dropdown.style.position = "relative";
        dropdown.style.left = "0"; // Center-align dropdown
        dropdown.style.margin = "10px auto";

        dropdownButton.style.fontSize = "1.3rem";
        dropdownButton.style.padding = "0.6rem 1.2rem";

        dropdownContent.style.display = "flex";
        dropdownContent.style.flexDirection = "column";
        dropdownContent.style.fontSize = "0.9rem";
        dropdownContent.style.left = "50%";
        dropdownContent.style.transform = "translateX(-50%) scale(0.85)"; // Center-align and adjust scale
        dropdownContent.style.top = "0.5rem";
        dropdownContent.style.minWidth = "100px";
        dropdownContent.style.padding = "5px";
        dropdownContent.style.width = "auto";

        contactInfo.style.position = "fixed";
        contactInfo.style.bottom = "10px";
        contactInfo.style.width = "80%";
        contactInfo.style.left = "50%";
        contactInfo.style.transform = "translateX(-50%)";
        contactInfo.style.padding = "15px";
    } else {
        // Desktop-specific adjustments (reset to default)
        welcomeSection.style.textAlign = "";
        welcomeSection.style.padding = "";

        headerContent.style.flexDirection = "";
        headerContent.style.alignItems = "";
        headerContent.style.justifyContent = "";
        headerContent.style.margin = "";

        logo.style.width = "15%";
        logo.style.marginRight = "";

        dropdown.style.width = "";
        dropdown.style.margin = "";
        dropdown.style.position = "";
        dropdown.style.left = "";

        dropdownButton.style.fontSize = "";
        dropdownButton.style.padding = "";

        dropdownContent.style.width = "";
        dropdownContent.style.position = "";
        dropdownContent.style.top = "";
        dropdownContent.style.left = "";
        dropdownContent.style.fontSize = "";
        dropdownContent.style.padding = "";

        contactInfo.style.position = "fixed";
        contactInfo.style.bottom = "80px";
        contactInfo.style.width = "60%";
        contactInfo.style.left = "50%";
        contactInfo.style.transform = "translateX(-50%)";
        contactInfo.style.padding = "20px";
    }
}

// Run the function on load and when resizing
window.addEventListener('resize', checkScreenSize);
checkScreenSize();

function removeScrollBars() {
    document.body.style.overflow = 'hidden'; // Prevent scroll bars on the body
    document.documentElement.style.overflow = 'hidden'; // Prevent scroll bars on the HTML element
}

// Call the function to remove scroll bars on page load
window.addEventListener('load', removeScrollBars);

// Optional: If you want to reapply this on window resize
window.addEventListener('resize', removeScrollBars);