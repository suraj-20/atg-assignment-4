import { useEffect } from "react";

const MobileTestimonialView = ({
  pageContent,
  circleContent,
  currentPage,
  setCurrentPage,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pageContent.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [pageContent.length, setCurrentPage]);

  const pageColors = [
    "#1e293b",
    "#2c3e50",
    "#34495e",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#16a085",
  ];

  const rightPageColor = [
    "rgba(30, 41, 59, 0.3)", // Darker low opacity version of #1e293b
    "rgba(52, 73, 94, 0.3)", // Darker low opacity version of #34495e
    "rgba(41, 128, 185, 0.3)", // Darker low opacity version of #2980b9
    "rgba(44, 62, 80, 0.3)", // Darker low opacity version of #2c3e50
    "rgba(142, 68, 173, 0.3)", // Darker low opacity version of #8e44ad
    "rgba(44, 62, 80, 0.3)", // Darker low opacity version of #2c3e50
    "rgba(22, 160, 133, 0.3)", // Darker low opacity version of #16a085
  ];

  return (
    <div className="mobile-testimonial">
      <div
        className="testimonial-content"
        style={{ backgroundColor: rightPageColor[currentPage] }}
      >
        <div className="right-side-content right-side">
          {pageContent[currentPage].images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`${pageContent[currentPage].title} ${index + 1}`}
              className="animated-image"
              style={{ ...image.style, position: "relative" }}
            />
          ))}
        </div>
        <div
          className="left-side-content left-side"
          style={{ backgroundColor: pageColors[currentPage] }}
        >
          <h1 className="title">{pageContent[currentPage].title}</h1>
          <p>We are the best development company in the world</p>
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
      <div className="testimonial-indicators">
        {pageContent.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileTestimonialView;
