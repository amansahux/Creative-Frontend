// const split = new SplitText(".app h1", {
//     type:"chars",
//     charsClass:"nameChars"
// })
// gsap.from(split.chars,{
//     yPercent:100,
//     opacity:1,
//     delay:0.4,
//     duration:0.6,
//     ease:"expo.out",
//     stagger:{
//         each:0.05,
//         from:"edges",
//     }

// })

// Draggable.create(".boxx",{
//     bounds:".app",
//     // type:"y" // y | x | xy
//     edgeResistance:0,
//     inertia:true,
//     dragResistance:0.2

// })

// const imageGallery = document.querySelector(".imageGallery");
// const imageShowModal = document.querySelector(".imageShowModal");
// const modalImage = document.querySelector(".imageShowModal img");

// let isOpen = false;
// let activeImage = null;
// imageGallery.addEventListener("click", (e) => {
//   if (!e.target.matches("img")) return;

//   const clickedImage = e.target;
//   if (!isOpen) {
//     activeImage = clickedImage;
//     const clickedState = Flip.getState(clickedImage);
//     const modalState = Flip.getState(modalImage);

//     imageShowModal.appendChild(clickedImage);
//     imageGallery.appendChild(modalImage);

//     Flip.from(clickedState, {
//       duration: 1.2,
//       ease: "power3.inOut",
//     });
//     Flip.from(modalState, {
//       duration: 1.2,
//       ease: "power3.inOut",
//     });
//     isOpen = true;
//   } else {
//     if (clickedImage !== activeImage) return;
//     const clickedState = Flip.getState(clickedImage);
//     const modalState = Flip.getState(modalImage);

//     imageGallery.appendChild(clickedImage);
//     imageShowModal.appendChild(modalImage);

//     Flip.from(clickedState, {
//       duration: 1,
//       ease: "power3.inOut",
//     });

//     Flip.from(modalState, {
//       duration: 1,
//       ease: "power3.inOut",
//     });

//     isOpen = false;
//     activeImage = null;
//   }
// });

const imageGallery = document.querySelector(".imageGallery");
const imageShowModal = document.querySelector(".imageShowModal");

imageGallery.addEventListener("click", (e) => {
  if (!e.target.matches("img")) return;
    const clickedImage = e.target;

  const modalImage =
    imageShowModal.querySelector("img");
      const state = Flip.getState([
    clickedImage,
    modalImage,
  ]);

  imageShowModal.appendChild(clickedImage);
  imageGallery.appendChild(modalImage);
    Flip.from(state, {
    duration: 1,
    ease: "power3.inOut",
    absolute: true,
    scale:true
  });
});