
// Context: This project using the GreenSock library to create animations for learning purposes
// CDN Link to GSAP: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js

// LESSON 1: BASIC TWEEN
// simplest tween, moving the h3 element 200px to the right
// the first argument is the target element
// the code in the curly braces is called vars object using to animate the target element
// gsap.to("h3", {x:200});

// BASIC TWEEN WITH DURATION, ROTATION, EASE
// gsap.to("img", { x:200, duration:3});
// gsap.to(".fred1", { x:200, y:200, duration:3 });
// gsap.to(".fred2", { x:200, y:200, duration:3, rotation:360 });
// gsap.to(".fred1", { x:200, y:200, duration:3, rotation:360, ease:"bounce" });

// GSAP can animation any numeric property of any object (not just DOM elements)
// For example, width, height, opacity, border radius, color / background color, viewport heit, width etc.

// LESSON 2: from() and fromTo() methods

// from() method - moves from 200px (starting position ) to the original position
 //gsap.from("img", { x:200, y:200, duration:3});

// fromTo() method - moves from x:400, y:200, scale:3 to the position x:0, y:0, scale:1. We need two var objects here
// gsap.fromTo("img", { x:400, y:200, scale:3, opacity:0 }, { x:50, y:50, scale:1, duration:3, opacity:3 });

// LESSON 3: Special Properties: Delay and Repeat, Yoyo, RepeatDelay, eases
// gsap.to("img", { x:200, y:200, duration:3, rotation:360, ease:"bounce", delay:2, repeat:1 });
// -1 means infinite repeat
// gsap.to("img", { x:200, y:200, repeat:1, yoyo:true });
// gsap.to("img", { x:200, y:200, duration:3, ease: "linear" });
// gsap.to("img", { x:200, y:200, duration:3, ease: "elastic" });
// gsap.to("img", { x:200, y:200, duration:3, ease: "bounce" });
// gsap.to("img", { x:200, y:200, duration:3, ease: "bounce.in" });
// gsap.to("img", { x:200, y:200, duration:3, ease: "bounce.out" }); // default
// gsap.to("img", { x:200, y:200, duration:3, ease: "bounce.inOut" });
// gsap.to("img", { x:200, y:200, duration:3, ease: "bounce.back" });
// gsap.to("img", { x:200, duration:3, ease: "bounce.back(2)" }); // eases are functions, so we can pass arguments to them

// ease curves: https://greensock.com/docs/v3/Eases (check the ease visualizer)

// LESSON 4: Staggering