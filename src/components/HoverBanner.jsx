import React, { useState } from "react";

export default function HoverBanner() {
  const [width, setWidth] = useState(0);

  function mouseMoveHandler(e) {
    setWidth(e.clientX);
  }
  function mouseOutHandler(e) {
    setWidth(0);
  }

  return (
    <div
      className="h-screen bg-gray-900 relative "
      onMouseMove={mouseMoveHandler}
      onMouseOut={mouseOutHandler}
    >
      <div style={{ width: width }} className="bg-orange-500 h-full" />

      <div className="absolute inset-0 grid place-items-center">
        <div className="select-none">
          <h2
            style={{ translate: -(width / 5) }}
            className="font-bold text-8xl transition-translate"
          >
            MOVE THE MOUSE
          </h2>
          <p
            style={{ translate: width / 40 }}
            className="font-semibold tracking-[10px]"
          >
            THE COLOR CHANGING BACKGROUND
          </p>
        </div>
      </div>
    </div>
  );
}
