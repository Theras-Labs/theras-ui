import React from "react";

// color
export default function Rarity({
  type = "",
  className = "",
  children,
  text = "common",
}) {
  return (
    <button
      disabled
      className={`border bg-gray-400  px-4 rounded-full ${className}`}>
      {children || text}
    </button>
  );
}
