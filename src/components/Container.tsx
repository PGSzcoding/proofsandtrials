import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ 
  children, 
  className = "" 
}: ContainerProps) {
  return (
    <div 
      className={`max-w-[1440px] mx-auto px-6 ${className}`}
    >
      {children}
    </div>
  );
}