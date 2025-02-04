// import React from "react";
// import "../App.css";
// import "../Technology/Technology.css";
// const Technology = () => {
//   return (
//     <>
//       <div className=" container-fluid g-0  row  technology d-flex text-white justify-content-start align-items-center flex-wrap py-5">
//         <div className="technology d-flex text-white justify-content-start align-items-center flex-wrap ">
//           <div className="one">
//             {" "}
//             <p>Webflow</p>
//           </div>
//           <div className="one">
//             {" "}
//             <p>Vue.js</p>
//           </div>
//           <div className="one">
//             {" "}
//             <p>Angular js</p>
//           </div>
//           <div className="one">
//             {" "}
//             <p>Python</p>
//           </div>
//           <div className="one">
//             {" "}
//             <p>Laravel</p>
//           </div>
//         </div>
//         <div className="technology d-flex text-white justify-content-start align-items-center flex-wrap ">
//           <div className="two divwidth1">
//             {" "}
//             <p>Wordpress</p>
//           </div>
//           <div className="two divwidth2">
//             {" "}
//             <p>Shopify</p>
//           </div>
//           <div className="two divwidth3">
//             {" "}
//             <p>WIX partners</p>
//           </div>
//           <div className="two divwidth4">
//             {" "}
//             <p>Javascript</p>
//           </div>
//           <div className="two divwidth5">
//             {" "}
//             <p>php</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Technology;



// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "../App.css";
// import "../Technology/Technology.css";

// const Technology = () => {
//   const marqueRef = useRef(null);

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (e.deltaY > 0) {
//         gsap.to(marqueRef.current, {
//           transform: "translateX(-200%)",
//           repeat: -1,
//           duration: 4,
//           ease: "none",
//         });
//       } else {
//         gsap.to(marqueRef.current, {
//           transform: "translateX(0%)",
//           repeat: -1,
//           duration: 4,
//           ease: "none",
//         });
//       }
//     };

//     window.addEventListener("wheel", handleWheel);

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, []);

//   return (
//     <>
//       <div className="container-fluid g-0 row technology d-flex text-white justify-content-start align-items-center flex-wrap py-5">
//         <div className="technology d-flex text-white justify-content-start align-items-center " ref={marqueRef}>
//           <div className="one">
//             <p>Webflow</p>
//           </div>
//           <div className="one">
//             <p>Vue.js</p>
//           </div>
//           <div className="one">
//             <p>Angular js</p>
//           </div>
//           <div className="one">
//             <p>Python</p>
//           </div>
//           <div className="one">
//             <p>Laravel</p>
//           </div>
//         </div>

//         <div className="technology d-flex text-white justify-content-start align-items-center overflow-hidden"ref={marqueRef}>
//           <div className="two divwidth1">
//             <p>Wordpress</p>
//           </div>
//           <div className="two divwidth2">
//             <p>Shopify</p>
//           </div>
//           <div className="two divwidth3">
//             <p>WIX partners</p>
//           </div>
//           <div className="two divwidth4">
//             <p>Javascript</p>
//           </div>
//           <div className="two divwidth5">
//             <p>php</p>
//           </div>
//           <div className="two divwidth1">
//             <p>Wordpress</p>
//           </div>
//           <div className="two divwidth2">
//             <p>Shopify</p>
//           </div>
//           <div className="two divwidth3">
//             <p>WIX partners</p>
//           </div>
//           <div className="two divwidth4">
//             <p>Javascript</p>
//           </div>
//           <div className="two divwidth5">
//             <p>php</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Technology;






// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "../App.css";
// import "../Technology/Technology.css";

// const Technology = () => {
//   const marqueOneRef = useRef(null);
//   const marqueTwoRef = useRef(null);

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (marqueOneRef.current && marqueTwoRef.current) {
//         if (e.deltaY > 0) {
//           // Scroll down
//           gsap.to(marqueOneRef.current, {
//             transform: "translateX(2%)",
//             // duration: 4,
//             ease: "none",
//           });
//           gsap.to(marqueTwoRef.current, {
//             transform: "translateX(-2%)",
//             // duration: 4,
//             ease: "none",
//           });
//         } else {
//           // Scroll up
//           gsap.to(marqueOneRef.current, {
//             transform: "translateX(-2%)",
          
//             ease: "none",
//           });
//           gsap.to(marqueTwoRef.current, {
//             transform: "translateX(2%)",
      
//             ease: "none",
//           });
//         }
//       }
//     };

//     // Attach the event listener
//     window.addEventListener("wheel", handleWheel);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, []);

//   return (
//     <div className="overflow-hidden">
//       <div className=" container-fluid  g-0 row technology d-flex text-white  py-5">
//         {/* This section will move left on scroll */}
//         <div
//           className=" d-flex text-white  justify-content-start align-items-center flex-nowrap"
//           ref={marqueOneRef}
//         >
    
//           <div className="one">
//             <p>Webflow</p>
//           </div>
//           <div className="one">
//             <p>Webflow</p>
//           </div>
//           <div className="one">
//             <p>Vue.js</p>
//           </div>
//           <div className="one">
//             <p>Angular js</p>
//           </div>
//           <div className="one">
//             <p>Python</p>
//           </div>
//           <div className="one">
//             <p>Laravel</p>
//           </div>
//           <div className="one">
//             <p>Webflow</p>
//           </div>
//           <div className="one">
//             <p>Vue.js</p>
//           </div>
//           <div className="one">
//             <p>Angular js</p>
//           </div>
        
   
          
          
//         </div>

//         {/* This section will move right on scroll */}
//         <div
//           className="technology d-flex text-white justify-content-start align-items-center"
//           ref={marqueTwoRef}
//         >
//           <div className="two divwidth1">
//             <p>Wordpress</p>
//           </div>
//           <div className="two divwidth2">
//             <p>Shopify</p>
//           </div>
//           <div className="two divwidth3">
//             <p>WIX partners</p>
//           </div>
//           <div className="two divwidth4">
//             <p>Javascript</p>
//           </div>
//           <div className="two divwidth5">
//             <p>php</p>
//           </div>
//           <div className="two divwidth1">
//             <p>Wordpress</p>
//           </div>
//           <div className="two divwidth2">
//             <p>Shopify</p>
//           </div>
//           <div className="two divwidth3">
//             <p>WIX partners</p>
//           </div>
//           <div className="two divwidth4">
//             <p>Javascript</p>
//           </div>
//           <div className="two divwidth5">
//             <p>php</p>
//           </div>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technology;






import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../App.css";
import "../Technology/Technology.css";

const Technology = () => {
  const marqueOneRef = useRef(null);
  const marqueTwoRef = useRef(null);

  // Current translateX position
  const marqueOnePosition = useRef(0);
  const marqueTwoPosition = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (marqueOneRef.current && marqueTwoRef.current) {
        // Determine if scroll is up or down
        const scrollAmount = e.deltaY > 0 ? 2 : -2; // 2% per scroll

        // Update positions
        marqueOnePosition.current += scrollAmount;
        marqueTwoPosition.current -= scrollAmount;

        // Move the elements by 2% in the desired direction
        gsap.to(marqueOneRef.current, {
          transform: `translateX(${marqueOnePosition.current}%)`,
          ease: "none",
        });
        gsap.to(marqueTwoRef.current, {
          transform: `translateX(${marqueTwoPosition.current}%)`,
          ease: "none",
        });
      }
    };

    // Attach the wheel event listener
    window.addEventListener("wheel", handleWheel);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="container-fluid g-0 row technology d-flex text-white py-5">
        {/* This section will move left on scroll */}
        <div
          className="d-flex text-white justify-content-start align-items-center flex-nowrap"
          ref={marqueOneRef}
        >
          <div className="one">
            <p>Webflow</p>
          </div>
          <div className="one">
            <p>Vue.js</p>
          </div>
          <div className="one">
            <p>Angular js</p>
          </div>
          <div className="one">
            <p>Python</p>
          </div>
          <div className="one">
            <p>Laravel</p>
          </div>
          <div className="one">
            <p>Webflow</p>
          </div>
          <div className="one">
            <p>Vue.js</p>
          </div>
          <div className="one">
            <p>Angular js</p>
          </div>
        </div>

        {/* This section will move right on scroll */}
        <div
          className="technology d-flex text-white justify-content-start align-items-center"
          ref={marqueTwoRef}
        >
          <div className="two divwidth1">
            <p>Wordpress</p>
          </div>
          <div className="two divwidth2">
            <p>Shopify</p>
          </div>
          <div className="two divwidth3">
            <p>WIX partners</p>
          </div>
          <div className="two divwidth4">
            <p>Javascript</p>
          </div>
          <div className="two divwidth5">
            <p>php</p>
          </div>
          <div className="two divwidth1">
            <p>Wordpress</p>
          </div>
          <div className="two divwidth2">
            <p>Shopify</p>
          </div>
          <div className="two divwidth3">
            <p>WIX partners</p>
          </div>
          <div className="two divwidth4">
            <p>Javascript</p>
          </div>
          <div className="two divwidth5">
            <p>php</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
