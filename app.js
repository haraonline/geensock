

//gsap.to(), gsap.from(), gsap.fromTo()


//gsap.to(".fred1", {duration: 3, x: 400});
//gsap.fromTo(".fred1", {x:700, y:400, opacity:0}, {x: 400, y:200, duration: 3, scale:3, opacity:1});

//special Properties: delay, repeat, yoyo, repeatDelay
//gsap.to(".fred1", {duration: 3, x: 600, repeat:2, yoyo: true}); //repeat -1 for infinite loop
//gsap.to(".fred2", {duration: 3, x: 600, delay: 2, });

//gsap.to(".fred1", {duration: 3, x: 600}); // default: easeout
//gsap.to(".fred1", {duration: 3, x: 600, ease: "bounce"});     //ease: bounce on the way out
//gsap.to(".fred1", {duration: 3, x: 600, ease: "bounce.in"});  //ease: bounce on the way in
//gsap.to(".fred1", {duration: 3, x: 600, ease: "bounce.inOut"});  //ease: bounce on the way InOut
//gsap.to(".fred2", {duration: 3, x: 600, ease: "linear"}); //ease: linear. no ease

gsap.to(".fred1", {duration: 3, x: 600, ease: "bounce"});
gsap.to(".fred2", {duration: 3, x: 600, ease: "back(6)"});


//ease options
//https://greensock.com/docs/v3/Eases
//linear, in, out, inout, back, elastic, bounce


