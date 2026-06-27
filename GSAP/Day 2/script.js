// gsap.to(".box", {
//     x:800,
//     // y:600,
//     delay:2,
//     duration :1,
//     ease:"power2.inOut"
// })
// gsap.to(".box", {
//   x: 800,
//   // y:600,
//   delay: 2,
//   duration: 1,
//   ease: "back.inOut(1.7)",
// });
// gsap.to(".box", {
//   x: 800,
//   // y:600,
//   delay: 2,
//   duration: 1,
//   ease: "bounce.inOut",
// });

// gsap.to(".box", {
//   x: 800,
//   // y:600,
//   delay: 2,
//   duration: 1,
// ease: "elastic.inOut(1,0.3)",
// });

// gsap.to(".box", {
//   x: 800,
//   delay: 2,
//   duration: 1,
// ease: "expo.inOut",
// });

// gsap.to(".box", {
//   x: 800,
//   delay: 2,
//   duration: 1,
// ease: "expo.inOut",
// repeat :2
// });
// gsap.to(".box", {
//   x: 800,
//   delay: 2,
//   duration: 1,
//   ease: "expo.inOut",
//   repeat: -1,
// });
// gsap.to(".box", {
//   x: 800,
//   delay: 2,
//   duration: 1,
//   ease: "expo.inOut",
//   repeat: 2,
//   yoyo :true
// });
// gsap.to(".box", {
//   x: 800,
//   delay: 1,
//   ease: "expo.inOut",
//   repeat: 3,
//   onStart: () => {
//     console.log("Animation is Starting....!!")
//   },
//   onComplete: () => {
//     console.log("Animation is Finishing....!!")
//   },
//   onUpdate: () => {
//     console.log("Animation is updating....!!")
//   }
  
// });

//Marquee Animation
gsap.set(".circle", {
    x:-500
})
gsap.to(".circle", {
  x: 1800,
  ease: "expo.inOut",
//   duration:1,
  repeat: -1,
});
