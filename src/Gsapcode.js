// function marqueAnimation(){
//     window.addEventListener('wheel',function(dets){
//         if(dets.deltaY>0){
//             gsap.to('.marque',{
//                 transform:"translateX(-200%)",
//                 repeat:-1,
//                 duration:4,
//                 ease:"none"
//             })
//         }
//         else{
//             gsap.to('.marque',{
//                 transform:"translateX(0%)",
//                 repeat:-1,
//                 duration:4,
//                 ease:"none"
//             })

//         }
//     })
// }



import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MarqueAnimation = () => {
  const marqueRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        gsap.to(marqueRef.current, {
          transform: 'translateX(-200%)',
          repeat: -1,
          duration: 4,
          ease: 'none'
        });
      } else {
        gsap.to(marqueRef.current, {
          transform: 'translateX(0%)',
          repeat: -1,
          duration: 4,
          ease: 'none'
        });
      }
    };

    // Attach the event listener
    window.addEventListener('wheel', handleWheel);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return <div className="marque" ref={marqueRef}>Your animated content</div>;
};

export default MarqueAnimation;
