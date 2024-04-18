import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./style.scss";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export default function HorizontalScroll({ children, ...props }) {
  return (
    <div
    // className="flexx flex-col justify-center row h-full "
    // className="flexx flex-col justify-center row h-full "
    >
      <ScrollMenu
        // Footer={<div>FOOTER</div>}
        {...props}
        onWheel={onWheel}>
        {children}
      </ScrollMenu>
    </div>
  );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY > 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY < 0) {
    apiObj.scrollPrev();
  }
}
