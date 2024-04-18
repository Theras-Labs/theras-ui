const CornerBox = ({
  children,
  className = "",
  classNameOutside = "",
  corner = true,
  border = false,
  background = "radial-gradient(circle, rgba(51,51,51,0.2) 10%,  rgba(132,212,188,0.25) 100%)",
  ...rest
}) => (
  <div className="flex h-full w-full items-center justify-center ">
    <div
      className={` relative rounded-sm ${
        border && " border "
      } border-green-100 ${classNameOutside}`}
      style={{
        background,
      }}
    >
      {corner && (
        <>
          <div
            id="TopLeft"
            className=" absolute left-0 top-0 h-4 w-4 border-green-300  border-l-2 border-t-2 rounded-sm"
          />
          <div
            id="TopRight"
            className=" absolute right-0 top-0 h-4 w-4 border-green-300 border-r-2 border-t-2 rounded-sm"
          />

          <div
            id="BotLeft"
            className="absolute bottom-0 left-0 h-4 w-4 border-green-300 border-b-2 border-l-2 rounded-sm"
          />

          <div
            id="BotRight"
            className="absolute bottom-0 right-0 h-4 w-4 border-green-300 border-b-2 border-r-2 rounded-sm"
          />
        </>
      )}
      <div className={` ${className}`} {...rest}>
        {children}
      </div>
    </div>
  </div>
);

export default CornerBox;
