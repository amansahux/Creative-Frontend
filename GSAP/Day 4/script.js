// const play = document.querySelector(".play");
// const pause = document.querySelector(".pause");
// const restart = document.querySelector(".restart");
// const reverse = document.querySelector(".reverse");
// const seek = document.querySelector(".seek");

// const tl = gsap.timeline({
//   paused: true,
// });
// tl.to(".box1", {
//   x: 700,
//   duration: 0.3,
//   delay: 0.5,
//   ease: "power3.inOut",
// })
//   .to(".box2", {
//     x: 700,
//     duration: 0.3,
//     ease: "power3.inOut",
//   })
//   .to(".box3", {
//     x: 700,
//     duration: 0.3,
//     ease: "power3.inOut",
//   }).addLabel("aman")
//   .to(".box4", {
//     x: 700,
//     duration: 0.3,
//     ease: "power3.inOut",
//   })
//   .to(".box5", {
//     x: 700,
//     duration: 0.3,
//     ease: "power3.inOut",
//   });

// play.addEventListener("click", () => {
//   tl.play();
// });
// pause.addEventListener("click", () => {
//   tl.pause();
// });
// restart.addEventListener("click", () => {
//   tl.restart();
// });
// reverse.addEventListener("click", () => {
//   tl.reverse();
// });
// seek.addEventListener("click", () => {
//   tl.seek("aman");
// });

// gsap.to(".box", {
//   x:1000,
//   y:100,
//   ease:"power3.inOut",
//   duration:1,
//   delay:0.3,
//   scrollTrigger:{
//     trigger:".box",
//     start:"top center",
//     scrub:true
//   }
// })
// gsap.to(".box", {
//   x: 1000,
//   y: 100,
//   ease: "power3.inOut",
//   duration: 1,
//   delay: 0.3,
//   scrollTrigger: {
//     trigger: ".page2",
//     start: "top top",
//     end: "top -100%",
//     scrub: true,
//     pin: true,
//     onEnter: () => {},
//     onLeave: () => {},
//     onUpdate: () => {},
//     onEnterBack: () => {},
//     onLeaveBack: () => {},
//   },
// });

gsap.set(".page2 img", {
  scale: 0.3,
});
gsap.to(".page2 img", {
  scale: 1.02,
  duration: 0.8,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".page2 img",
    start: "top 90%",
    end: "top top",
    scrub: 1,
  },
});
