"use client";

import { useState } from "react";

const Sticky = ({ id, onDelete }) => {
  const [bgColor, setBgColor] = useState("#F8C47E"); // Default color
  const [isOpen, setIsOpen] = useState(false); // Panel visibility
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Default position
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [title, setTitle] = useState("could be anything");
  const [text, setText] = useState("make my bed");

  const colors = ["#F8C47E", "#FFD700", "#FF6347", "#90EE90", "#87CEEB", "#9370DB"];

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // Handle dragging movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  // Stop dragging
  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="absolute cursor-move"
      style={{ left: position.x, top: position.y, position: "absolute" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Header with Delete and Editable Title */}
      <div className="flex justify-between items-center w-64 p-2 bg-white">
        <button
          onClick={() => onDelete(id)}
          className="text-black font-bold text-lg"
        >
          ✖
        </button>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-black font-semibold bg-transparent outline-none text-left px-2"
        />
        {/* Color Picker Trigger - Yellow Circle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="w-4 h-4 bg-yellow-400 rounded-full shadow-md"
        ></button>
      </div>

      {/* Sticky Note Body */}
      <div
        className="w-64 h-64 rounded-md p-4"
        style={{ backgroundColor: bgColor }}
        onMouseDown={handleMouseDown}
      >
        <textarea
          className="w-full h-full bg-transparent outline-none resize-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Color Picker Dropdown */}
      {isOpen && (
        <div className="absolute top-0 right-0 bg-white p-2 shadow-lg rounded-md flex flex-col gap-2">
          <p className="text-sm text-gray-600">Pick a color:</p>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color }}
                onClick={() => {
                  setBgColor(color);
                  setIsOpen(false);
                }}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sticky;
