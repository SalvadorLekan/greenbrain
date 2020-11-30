import React from "react";

const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
const numbers = [500, 600, 700, 800, 900];

function ProjectCard({ children, name, head = true }) {
  return (
    <div className="text-center shadow-xl rounded m-4 bg-white">
      {head && (
        <div
          className={`p-3 bg-${
            colors[Math.floor(Math.random() * colors.length)]
          }-${numbers[Math.floor(Math.random() * numbers.length)]} text-white`}
        >
          {name}
        </div>
      )}
      {children}
    </div>
  );
}

export default ProjectCard;
