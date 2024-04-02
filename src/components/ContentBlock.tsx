import { cn } from "@/lib/utils";
import React from "react";

type ContentBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentBlock({
  className,
  children,
}: ContentBlockProps) {
  return (
    <div
      className={cn(
        "h-full w-full bg-[#F7F8FA] shadow-sm rounded-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
