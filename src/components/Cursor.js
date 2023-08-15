import React, { useEffect, useRef } from "react";
import { Back, gsap } from "gsap";

const Cursor = () => {
  const cursor = useRef(null);
  const cursorText = useRef(null);

  useEffect(() => {
    if (cursor.current !== null || cursor.current !== undefined) {
      const links = document.querySelectorAll(".cursorBig");

      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        gsap.to(cursor.current, {
          x: clientX,
          y: clientY,
        });
      };

      //  const onMouseEnterLink = (e) => {
      //    const link = e.target;
      //    if (link.classList.contains("view")) {
      //      gsap.to(cursor.current, {
      //        scale: 4,
      //        // mixBlendMode: "normal",
      //      });
      //      gsap.fromTo(cursorText.current, { opacity: 0 }, { opacity: 1 });
      //    } else {
      //      gsap.to(cursor.current, { scale: 4, ease: Back.easeOut.config(4) });
      //    }
      //  };

      //  const onMouseLeaveLink = (e) => {
      //    gsap.to(cursor.current, {
      //      scale: 1,
      //      mixBlendMode: "difference",
      //      background: "white",
      //      ease: Back.easeOut.config(4),
      //    });
      //    gsap.to(cursorText.current, { opacity: 0 });
      //  };

      document.addEventListener("mousemove", onMouseMove);

      //  s
    }
  }, []);

  return (
    <div
      id="custom-cursor"
      className="custom-cursor fixed top-0 left-0 w-[10px] h-[10px] rounded-[50%] pointer-events-none z-[9999] mix-blend-difference p-[10px] flex justify-center items-center bg-white"
      ref={cursor}
    >
      <span className="opacity-0 text-[3px]" id="cursor-text" ref={cursorText}>
        Visit
      </span>
    </div>
  );
};

export default Cursor;
