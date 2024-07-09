import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobileTestimonialView from "../mobile-testimonial-view/MobileTestimonialView ";
import DesktopTestimonialView from "../desktop-testimonial-view/DesktopTestimonialView ";
import "./ScrollAnimation.css";
import {
  pageContent,
  circleContent,
  pageColors,
  rightPageColor,
} from "./data.js";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`scroll-container ${isMobile ? "mobile-view" : ""}`}>
      {isMobile ? (
        <MobileTestimonialView
          pageContent={pageContent}
          circleContent={circleContent}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <DesktopTestimonialView
          pageContent={pageContent}
          circleContent={circleContent}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageColors={pageColors}
          rightPageColor={rightPageColor}
        />
      )}
    </div>
  );
};

export default ScrollAnimation;
