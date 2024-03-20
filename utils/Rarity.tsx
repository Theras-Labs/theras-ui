export default function Rarity({
  type = "",
  className = "",
  children,
  text = "common",
  textColorOption = "light", // Option: "dark" or "light" for text color
  borderColorOption = "light", // Option: "dark" or "light" for border color
}) {
  // Define a mapping object for rarity types and their corresponding colors
  const rarityColors = {
    common: { textColor: "text-gray", borderColor: "border-gray" },
    uncommon: { textColor: "text-green", borderColor: "border-green" },
    rare: { textColor: "text-blue", borderColor: "border-blue" },
    epic: { textColor: "text-purple", borderColor: "border-purple" },
    legendary: { textColor: "text-yellow", borderColor: "border-yellow" },
  };

  // Determine rarity based on the provided text or children prop
  const rarityText = children ? children : text;
  const rarityType = rarityText.toLowerCase();

  // Extract text and border colors based on the rarity type and color options
  const textColorClass =
    rarityColors?.[rarityType]?.textColor ?? rarityColors["common"].textColor;
  const borderColorClass =
    rarityColors?.[rarityType]?.borderColor ??
    rarityColors["common"].borderColor;

  // Determine text color class based on the specified option
  const textColor = `${textColorClass}-${
    textColorOption === "dark" ? "700" : "400"
  }`;
  // Determine border color class based on the specified option
  const borderColor = `${borderColorClass}-${
    borderColorOption === "dark" ? "700" : "400"
  }`;

  return (
    <button
      disabled
      className={`border bg-gray-600  mb-10 opacity-75 uppercase px-4 rounded-full ${textColor} ${borderColor} ${className}`}>
      {children || text}
    </button>
  );
}
