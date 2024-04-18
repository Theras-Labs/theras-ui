import React from "react";

export default function Traits({ title = "title", value = "subtitle" }) {
  return (
    <div className="flex flex-col  ">
      <div className="text-sm font-thin">{title}:</div>
      <div className="text-orange-500 text-xl font-bold">{value || "-"}</div>
    </div>
  );
}
