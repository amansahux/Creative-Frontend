// gsap.to(".box",{
//   x:1200,
//   delay:1,
//   duration :1,
// ease: "power3.out",
//   stagger:"0.1",
//   repeat:-1,
//   yoyo:true

// })
// gsap.to(".box", {
//   x: 1200,
//   delay: 1,
//   duration: 1,
//   ease: "power3.out",
//   stagger: -0.1,
//   repeat: -1,
//   yoyo: true,
// });
// gsap.to(".box", {
//   x: 1200,
//   delay: 1,
//   duration: 1,
//   ease: "power3.out",
//   stagger: {
//     each:"0.05",
//     from:"center"
//   },
//   repeat: -1,
//   yoyo: true,
// });
// gsap.to(".box", {
//   x: 1200,
//   delay: 1,
//   duration: 1,
//   ease: "power3.out",
//   stagger: {
//     each:"0.05",
//     from:"edges"
//   },
//   repeat: -1,
//   yoyo: true,
// });
// gsap.to(".box", {
//   x: 1200,
//   delay: 1,
//   duration: 1,
//   ease: "power3.out",
//   stagger: {
//     each:"0.05",
//     from:"random"
//   },
//   repeat: -1,
//   yoyo: true,
// });

// Animation 1

// gsap.from("span", {
//   yPercent: 100,
//   ease: "power2.inOut",
//   delay: 0.3,
//   opacity: 0,
//   durattion: 2.5,
//   stagger: {
//     each: 0.05,
//     from: "center",
//   },
//    repeat:-1
// });

//  TimeLine

const tl = gsap.timeline();

// tl.to(".box1",{
//   x:600,
//   delay:0.5,
//   ease: "power3.inOut",

// }).to(".box2" ,{
//     x:700,
//   ease: "power4.inOut",
// }).to(".box3", {
//     x:800,
//   ease: "power2.inOut",
// })
// tl.to(".box1",{
//   x:600,
//   delay:0.5,
//   ease: "power3.inOut",

// }).to(".box2" ,{
//     x:700,
//   ease: "power4.inOut",

// }, "<").to(".box3", {
//     x:800,
//   ease: "power2.inOut",
// },)
// tl.to(".box1", {
//   x: 600,
//   delay: 0.5,
//   ease: "power3.inOut",
// })
//   .to(
//     ".box3",
//     {
//       x: 800,
//       ease: "power2.inOut",
//     },
//     "<",
//   )
//   .to(".box2", {
//     x: 700,
//     ease: "power4.inOut",
//   });

// tl.to(".box1",{
//   x:600,
//   delay:0.5,
//   ease: "power3.inOut",

// }).to(".box2" ,{
//     x:700,
//   ease: "power4.inOut",

// }).to(".box3", {
//     x:800,
//   ease: "power2.inOut",
// },"<0.07")

// tl.to(".box1",{
//   x:600,
//   delay:0.5,
//   ease: "power3.inOut",

// }).to(".box2" ,{
//     x:700,
//   ease: "power4.inOut",

// }).to(".box3", {
//     x:800,
//   ease: "power2.inOut",
// },"-=0.3")
// tl.to(".box1",{
//   x:600,
//   delay:0.5,
//   ease: "power3.inOut",

// }).to(".box2" ,{
//     x:700,
//   ease: "power4.inOut",

// }).to(".box3", {
//     x:800,
//   ease: "power2.inOut",
// },"+=0.7")


// tl.to(
//   ".box1",
//   {
//     x: 600,
//     ease: "power3.inOut",
//     duration:0.3
//   },
//   "aman",
// )
//   .to(".box2", {
//     x: 700,
//     ease: "power4.inOut",
//   })
//   .to(
//     ".box3",
//     {
//       x: 800,
//       ease: "power2.inOut",
//       duration:0.3
//     },
//     "aman",
//   );
