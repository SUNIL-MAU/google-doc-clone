import Marker from "@/components/marker";
import { useRef, useState } from "react";

const markers = Array.from({ length: 83 }, (_, i) => i);

const Ruler = () => {
  const [leftMargin, setLeftMargin] = useState(56);
  const [rightMargin, setRightMargin] = useState(56);

  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);
  const rulerRef = useRef<HTMLDivElement>(null);

  const handleLeftMouseDown = () => {
    setIsDraggingLeft(true);
  };

  const handleRightMouseDown = () => {
    setIsDraggingRight(true);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    const PAGE_WIDTH = 816;
    const MIN_SPACE = 500;

    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector("#ruler-container");

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const relativeX = e.clientX - containerRect.left;

        // Clamp the `relativeX` within the container bounds
        const clampedX = Math.max(0, Math.min(relativeX, PAGE_WIDTH));

        if (isDraggingLeft) {
          // Ensure the left margin does not overlap the right margin
          const maxLeftPosition = PAGE_WIDTH - rightMargin - MIN_SPACE;
          const newLeftPosition = Math.min(clampedX, maxLeftPosition);

          setLeftMargin(newLeftPosition);
        } else if (isDraggingRight) {
          // Ensure the right margin does not overlap the left margin
          const maxRightPosition = PAGE_WIDTH - (leftMargin + MIN_SPACE);
          const newRightPosition = Math.min(
            PAGE_WIDTH - clampedX,
            maxRightPosition
          );

          setRightMargin(newRightPosition);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  const hangleLeftDoubleClick = () => {
    setLeftMargin(56);
  };

  const hangleRighttDoubleClick = () => {
    setRightMargin(56);
  };
  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      className="h-6 border-b border-gray-300 flex items-end relative select-none print:hidden"
    >
      <div
        id="ruler-container"
        className="max-w-[816px] mx-auto w-full h-full relative"
      >
        <Marker
          position={leftMargin}
          onDoubleClick={hangleLeftDoubleClick}
          onMouseDown={handleLeftMouseDown}
          isDragging={isDraggingLeft}
          isLeft={true}
        />
        <div className="absolute inset-x-0 bottom-0 h-full">
          <div className="relative h-full w-[816px]">
            {markers.map((marker) => {
              const position = (marker * 816) / 82;

              return (
                <div
                  key={marker}
                  style={{ left: `${position}px` }}
                  className=" absolute bottom-0"
                >
                  {marker % 10 === 0 && (
                    <>
                      <div className="absolute bottom-0 w-[1px] h-2 bg-neutral-500" />
                      <span className="absolute bottom-2 text-[10px] •text-neutral-500 transform -translate-x-1/2">
                        {marker / 10 + 1}
                      </span>
                    </>
                  )}

                  {marker % 5 === 0 && marker % 10 !== 0 && (
                    <div className="absolute bottom-0 w-[1px] h-1.5 bg-neutral-500" />
                  )}

                  {marker % 5 !== 0 && (
                    <div className="absolute bottom-0 w-[1px] h-1 bg-neutral-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Marker
          position={rightMargin}
          onDoubleClick={hangleRighttDoubleClick}
          onMouseDown={handleRightMouseDown}
          isDragging={isDraggingRight}
          isLeft={false}
        />
      </div>
    </div>
  );
};

export default Ruler;
