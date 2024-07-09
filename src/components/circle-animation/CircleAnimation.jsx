import React from "react";

const CircleAnimation = React.forwardRef(
  ({ circleContent, currentPage }, ref) => {
    return (
      <div ref={ref.circleRef} className="circle-animation">
        <div className="circle-content">
          <div
            ref={ref.contentRef}
            className="content d-flex flex-column gap-2"
          >
            <p style={{ margin: "0" }}>{circleContent[currentPage].top}</p>
            <h1 style={{ margin: "0" }}>{circleContent[currentPage].mid}</h1>
            <p
              style={{ margin: "0", flexDirection: "row-reverse" }}
              className="content-end d-flex"
            >
              {circleContent[currentPage].bottom}
            </p>
          </div>
        </div>
        <svg width="350" height="350" viewBox="0 0 300 300" className="p-4">
          <path
            ref={ref.arcRef}
            d="M 150,5 A 145,145 0 1 1 149.9,295"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {[0, 1, 2, 3, 4, 5, 6].map((_, index) => {
            const angle = index * (210 / 7) * (Math.PI / 180) - Math.PI / 2;
            const x = 150 + 145 * Math.cos(angle);
            const y = 150 + 145 * Math.sin(angle);
            return (
              <circle
                key={index}
                ref={(el) => (ref.dotsRef.current[index] = el)}
                cx={x}
                cy={y}
                r="5"
                fill={index === 0 ? "#3498db" : "#ffffff"}
              />
            );
          })}
        </svg>
      </div>
    );
  }
);

export default CircleAnimation;
