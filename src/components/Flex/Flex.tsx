import React from "react";

interface Props {
  className?: string;
  flexDirection?: "row" | "column";
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  flexGrow?: number;
  gap?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Flex: React.FC<Props> = ({
  className,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  flexGrow,
  gap,
  margin,
  padding,
  width,
  height,
  onClick,
  children,
}) => (
  <div
    className={className}
    onClick={onClick}
    style={{
      display: "flex",
      flexDirection,
      justifyContent,
      alignItems,
      alignSelf,
      flexGrow,
      gap,
      margin,
      padding,
      width,
      height,
    }}
  >
    {children}
  </div>
);
