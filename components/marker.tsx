import { FaCaretDown } from "react-icons/fa";

interface MarkerProps {
  position: number;
  isLeft: boolean;
  isDragging: boolean;
  onMouseDown: () => void;
  onDoubleClick: () => void;
}

const Marker = ({
  position,
  isLeft,
  isDragging,
  onMouseDown,
  onDoubleClick,
}: MarkerProps) => {
  return (
    <div
      style={{ [isLeft ? "left" : "right"]: `${position}px` }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
      className="absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2"
    >
      <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2" />
      <div
        className="absolute left-1/2 top-4 transform -translate-x-1/2 "
        style={{
          height: "100vh",
          width: "1px",
          backgroundColor: "#3b72f6",
          display: isDragging ? "block" : "none",
        }}
      />
    </div>
  );
};

export default Marker;
