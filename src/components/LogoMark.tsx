import React from "react";

interface LogoMarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const LogoMark: React.FC<LogoMarkProps> = ({ className, ...props }) => {
  return (
    <img
      src="/asset image/BV logo.png"
      alt="Branco Venn Logo"
      className={className}
      {...props}
    />
  );
};
