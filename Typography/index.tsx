// Title.tsx
interface TitleProps {
  children: React.ReactNode;
  variant?: "default" | "highlight";
  className?: string; // Add className prop
}

const Title: React.FC<TitleProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyle = "text-xl xl:text-4xl font-semibold";
  const variantStyles = {
    default: "text-gray-300",
    highlight: "text-blue-600",
  };
  return (
    <h1 className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </h1>
  );
};

// Subtitle.tsx
interface SubtitleProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className = "" }) => (
  <h2 className={`text-lg xl:text-2xl font-medium text-gray-300 ${className}`}>
    {children}
  </h2>
);

// Paragraph.tsx
interface ParagraphProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => (
  <p className={`text-base font-normal  ${className}`}>{children}</p>
);

// Caption.tsx
interface CaptionProps {
  children: React.ReactNode;
  variant?: "default" | "bold";
  className?: string; // Add className prop
}

const Caption: React.FC<CaptionProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyle = "text-xs xl:text-sm";
  const variantStyles = {
    default: "font-normal ",
    bold: "font-bold ",
  };
  return (
    <span className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Headings.tsx
interface HeadingProps {
  children: React.ReactNode;
  level?: number;
  className?: string; // Add className prop
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 3,
  className = "",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`text-lg font-semibold  ${className}`}>{children}</Tag>
  );
};

// Accent.tsx
interface AccentProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}

const Accent: React.FC<AccentProps> = ({ children, className = "" }) => (
  <span className={`text-base font-medium text-blue-600 ${className}`}>
    {children}
  </span>
);

// Overline.tsx
interface OverlineProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}

const Overline: React.FC<OverlineProps> = ({ children, className = "" }) => (
  <span
    className={`text-xs uppercase tracking-wide text-gray-500 ${className}`}>
    {children}
  </span>
);

// Label.tsx
interface LabelProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}

const Label: React.FC<LabelProps> = ({ children, className = "" }) => (
  <label className={`text-xs xl:text-sm font-medium  ${className}`}>
    {children}
  </label>
);

// Exporting all components
export {
  Title,
  Subtitle,
  Paragraph,
  Caption,
  Heading,
  Accent,
  Overline,
  Label,
};
