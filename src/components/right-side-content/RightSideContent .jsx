import React from "react";

const RightSideContent = ({
  pageContent,
  currentPage,
  imageRefs,
  rightPageColor,
}) => {
  return (
    <div className="right-side">
      {pageContent.map((content, pageIndex) => (
        <div
          key={pageIndex}
          className="page"
          style={{
            height: "105vh",
            position: "relative",
            backgroundColor: rightPageColor[pageIndex],
            overflow: "hidden",
          }}
        >
          {content.images.map((image, imgIndex) => (
            <img
              key={imgIndex}
              ref={(el) => (imageRefs.current[`${pageIndex}-${imgIndex}`] = el)}
              src={image.src}
              alt={`${content.title} ${imgIndex + 1}`}
              className="animated-image"
              style={{ ...image.style, position: "absolute" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default RightSideContent;
