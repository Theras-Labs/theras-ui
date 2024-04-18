import { Transition } from "@headlessui/react";

export default function ProgressBar({
  rounded = "xl",
  title = "progress",
  progress = 40,
  padding = "p2",
  classNameText = "",
  barColorFull = "bg-blue-600",
  barColorFill = "bg-green-600",
  barSlot = "bg-gray-900",
}) {
  return (
    <Transition
      show={progress > 0} // Show when progress is greater than 0
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      {/* {(ref) => ( */}
      <div
        // ref={ref}
        className={`relative w-full ${barSlot} overflow-hidden mb-2 alternative rounded-${rounded} `}>
        <div className={`absolute px-2 w-full ${classNameText}`}>{title}</div>

        <div
          className={`h-full ${
            progress !== 100 ? barColorFill : barColorFull
          } ${padding} uppercase text-xs font-bold rounded-${rounded}`}
          style={{ width: `${progress}%` }}>
          <div className="invisible">...</div>
        </div>
      </div>
      {/* )} */}
    </Transition>
  );
}
