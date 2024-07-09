import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeftSideContent from "../left-side-content/LeftSideContent";
import CircleAnimation from "../circle-animation/CircleAnimation";
import RightSideContent from "../right-side-content/RightSideContent ";

gsap.registerPlugin(ScrollTrigger);

const DesktopTestimonialView = ({
  pageContent,
  circleContent,
  currentPage,
  setCurrentPage,
  pageColors,
  rightPageColor,
}) => {
  // const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const dotsRef = useRef([]);
  const arcRef = useRef(null);
  const titleRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    // const container = containerRef.current;
    const leftSide = leftSideRef.current;
    const dots = dotsRef.current;
    const pages = gsap.utils.toArray(".page");

    pages.forEach((page, index) => {
      ScrollTrigger.create({
        trigger: page,
        start: "top top",
        end: "bottom top",
        onEnter: () => updatePage(index),
        onEnterBack: () => updatePage(Math.max(0, index - 1)),
      });
    });

    function updatePage(index) {
      setCurrentPage(index);
      const newColor = pageColors[index];
      gsap.to(leftSide, { backgroundColor: newColor, duration: 0.5 });

      // Update all dots
      dots.forEach((dot, i) => {
        if (i <= index) {
          gsap.to(dot, { fill: "#3498db", duration: 0.2 });
        } else {
          gsap.to(dot, { fill: "#ffffff", duration: 0.2 });
        }
      });

      // Update arc
      const pathLength = arcRef.current.getTotalLength();
      const arcLength = (pathLength / (pageContent.length - 1)) * index;
      gsap.to(arcRef.current, {
        strokeDashoffset: pathLength - arcLength,
        duration: 0.5,
      });

      // Update circle background color
      gsap.to(circleRef.current, {
        backgroundColor: newColor,
        duration: 0.5,
      });

      // Animate title and paragraph
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2 }
      );

      // Animate images
      pageContent.forEach((content, pageIndex) => {
        content.images.forEach((image, imgIndex) => {
          const direction = imgIndex % 2 === 0 ? -100 : 100; // alternate direction
          gsap.fromTo(
            imageRefs.current[`${pageIndex}-${imgIndex}`],
            {
              y: pageIndex === index ? direction : 0,
              opacity: 0,
            },
            {
              y: pageIndex === index ? 0 : direction,
              opacity: pageIndex === index ? 1 : 0,
              duration: 1,
              ease: "power2.out",
            }
          );
        });
      });
    }

    // Initialize the arc
    gsap.set(arcRef.current, {
      strokeDasharray: arcRef.current.getTotalLength(),
      strokeDashoffset: arcRef.current.getTotalLength(),
    });
  }, [pageContent, pageColors, setCurrentPage]);

  return (
    <>
      <LeftSideContent
        ref={leftSideRef}
        titleRef={titleRef}
        contentRef={contentRef}
        pageContent={pageContent}
        currentPage={currentPage}
      />
      <CircleAnimation
        ref={{ arcRef, dotsRef }}
        circleContent={circleContent}
        currentPage={currentPage}
      />
      <RightSideContent
        pageContent={pageContent}
        currentPage={currentPage}
        imageRefs={imageRefs}
        rightPageColor={rightPageColor}
      />
    </>
  );
};

export default DesktopTestimonialView;
