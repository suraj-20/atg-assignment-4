import React from "react";

const LeftSideContent = React.forwardRef(
  ({ titleRef, contentRef, pageContent, currentPage }, ref) => {
    return (
      <div ref={ref} className="left-side">
        <div className="left-content-container d-flex flex-column gap-4 p-2">
          <div
            ref={titleRef}
            className="title-content d-flex flex-column gap-3"
          >
            <h1 style={{ margin: "0" }} className="title">
              {pageContent[currentPage].title}
            </h1>
            <p style={{ margin: "0", width: "35%" }}>
              We are the best development company in the world
            </p>
          </div>
          <div className="view-buttons d-flex justify-content-between">
            <button
              className="view-button case-study-button d-flex gap-2 align-items-center justify-content-center"
              type="submit"
              aria-label="View case study"
            >
              View case study <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="skip-button" type="submit">
              SKIP
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default LeftSideContent;
