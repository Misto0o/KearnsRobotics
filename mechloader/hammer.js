// Hammer animation using vanilla JavaScript and GSAP
const hammer = document.querySelector('.hammer');
let hammerTl = gsap.timeline({ paused: true });

hammerTl
  .to(hammer, 0.15, {
    rotation: -30,
    transformOrigin: "right bottom",
    bezier: {
      type: "soft",
      values: [{ x: 0, y: 0 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -6 }, { x: 0, y: -10 }],
      autoRotate: true
    },
    ease: "expo.in"
  })
  .to(hammer, 0.15, {
    rotation: -40,
    transformOrigin: "right bottom",
    bezier: {
      type: "soft",
      values: [{ x: 0, y: -15 }, { x: 0, y: -15 }],
      autoRotate: true
    },
    ease: "power4.out"
  })
  .to(hammer, 0.6, {
    rotation: 0,
    transformOrigin: "right bottom",
    bezier: {
      type: "soft",
      values: [{ x: 0, y: -3 }, { x: 0, y: -2 }, { x: 0, y: -1 }, { x: 0, y: 0 }],
      autoRotate: true
    }
  });

// Trigger animation and navigate after completion
document.querySelector('.link-btn').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior
  hammerTl.play();
  hammerTl.eventCallback("onComplete", function () {
    window.location.href = '../mechs.html'; // Navigate to the correct relative path
  });
});
  

// Function to adjust layout based on screen size
function checkScreenSize() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const body = document.querySelector("body");

  // Adjust layout styles based on screen width
  body.style.flexDirection = isMobile ? "column" : "row";
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
