// import React from 'react'
// import { useRef } from 'react'
// import {useGSAP} from "@gsap/react"
// import gsap from 'gsap'

// const App = () => {

//   const boxRef = useRef(null)
//   useGSAP(() => {
//     gsap.to(boxRef.current, {
//       x:500,
//       ease:"power2.inOut",
//       delay:1,
//       duration:0.4
//     })
//   }
//   )
//   return (
//     <div>
//       <div ref={boxRef} className="box"></div>
//     </div>
//   )
// }

// export default App
// import React from "react";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const App = () => {
//   const boxRef = useRef(null);
//   const containerRef = useRef(null)
//   useGSAP(() => {
//     gsap.to(boxRef.current, {
//       x: 500,
//       ease: "power2.inOut",
//       delay: 1,
//       duration: 0.4,
//     });
//   },{scope: containerRef.current, dependencies:[], revertOnUpdate:true});
//   return (
//     <div ref={containerRef}>
//       <div ref={boxRef} className="box"></div>
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const App = () => {
//   const boxRef = useRef(null);
//   const containerRef = useRef(null)
//   const {contextSafe} = useGSAP(() => {
//     gsap.to(boxRef.current, {
//       x: 500,
//       ease: "power2.inOut",
//       delay: 1,
//       duration: 0.4,
//     });
//   },{scope: containerRef.current, dependencies:[], revertOnUpdate:true});
//   return (
//     <div ref={containerRef}>
//       <div ref={boxRef} className="box"></div>
//       <button onClick={contextSafe(() => {
//         gsap.to(boxRef.current,{
//           x:0,
//         } )
//       }
//       )}>Click ME</button>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Animate from "./components/Animate";

const App = () => {
  const boxRef = useRef([]);
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.to([boxRef.current], {
        x: 500,
        ease: "power2.inOut",
        delay: 1,
        duration: 0.4,
      });
    },
    { scope: containerRef.current, dependencies: [], revertOnUpdate: true },
  );
  return (
    <div>
      <div ref={(el) => boxRef.current.push(el)} className="box"></div>
      <div ref={(el) => boxRef.current.push(el)} className="box"></div>
      <div
        ref={(el) => {
          return boxRef.current.push(el);
        }}
        className="box"
      ></div>
    </div>
  );
};

export default App;
// import React from "react";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import Animate from "./components/Animate";

// const App = () => {
//   const boxRef = useRef(null);
//   const containerRef = useRef(null)
//    useGSAP(() => {
//     gsap.to(boxRef.current, {
//       x: 500,
//       ease: "power2.inOut",
//       delay: 1,
//       duration: 0.4,
//     });
//   },{scope: containerRef.current, dependencies:[], revertOnUpdate:true});
//   return (
//    <div>
//     <Animate>
//    <div className="box"></div>
//     </Animate>
//    </div>
//   );
// };

// export default App;
