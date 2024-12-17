// Hammer animation using vanilla JavaScript and GSAP
const hammer = document.querySelector('.hammer');
let hammerTl = gsap.timeline({ paused: true });

hammerTl.to(hammer, 0.15, {
  rotation: -30,
  transformOrigin: "right bottom",
  bezier: {
    type: "soft",
    values: [{x: 0, y: 0}, {x: 0, y: -2}, {x: 0, y: -3}, {x: 0, y: -6}, {x: 0, y: -10}],
    autoRotate: true
  },
  ease: "expo.in"
})
.to(hammer, 0.15, {
  rotation: -40,
  transformOrigin: "right bottom",
  bezier: {
    type: "soft",
    values: [{x: 0, y: -15}, {x: 0, y: -15}],
    autoRotate: true
  },
  ease: "power4.out"
})
.to(hammer, 0.6, {
  rotation: 0,
  transformOrigin: "right bottom",
  bezier: {
    type: "soft",
    values: [{x: 0, y: -3}, {x: 0, y: -2}, {x: 0, y: -1}, {x: 0, y: 0}],
    autoRotate: true
  }
});

// Trigger animation on click
document.querySelector('.link-btn').addEventListener('click', function() {
  hammerTl.play();
  hammerTl.eventCallback("onComplete", function() {
    hammerTl.pause();
  });
});
