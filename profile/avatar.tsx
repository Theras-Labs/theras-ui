export default function Avatar({
  imageUrl,
  className = "",
  ...rest
}: {
  imageUrl: string;
  className?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={`${className} h-16 w-16 bg-gray-500 rounded-full border-red-400 border-1 border-black bg-cover bg-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none `}
      {...rest}
    ></div>
  );
}
