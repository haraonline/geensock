import gsap from "gsap";



let tl = gsap.timeline({ defaults: { duration: 1, ease: "bounce" } });

tl.to(".box1", { skewX: 45 });
tl.to(".box2", { scaleY: 3 }, "<");
tl.to(".box3", { rotationX: 360 });
tl.to(".box4", { rotationY: 360 }, "<");

tl.eventCallback("onComplete", () => {
    tl.reverse();
});

tl.play();
