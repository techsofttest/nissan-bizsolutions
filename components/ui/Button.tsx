import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: "px-1 py-1 text-[13px]",
    md: "px-1 py-1.5 text-[14px]",
    lg: "px-1 py-2 text-[15px]",
  };

  // High-contrast variant styles matching #5FAAAD palette
  const variantClasses = {
    primary:
      "bg-[#4A9396] hover:bg-[#346F72] text-white shadow-lg hover:shadow-xl border border-[#5FAAAD]/30 font-semibold tracking-wide rounded-sm px-6 py-3",
    secondary:
      "bg-black/40 hover:bg-black/65 text-white border border-white/60 hover:border-white font-semibold backdrop-blur-md shadow-md rounded-sm px-6 py-3",
    tertiary:
      "bg-transparent text-[#0F2628] hover:text-[#5FAAAD] font-semibold border-none shadow-none underline-offset-4 hover:underline p-0",
  };

  // Override padding for primary and secondary sizes if defined in sizeClasses
  const paddedSizeClasses = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-3 text-[14px]",
    lg: "px-8 py-3.5 text-[15px]",
  };

  const currentSizeClass = variant === "tertiary" ? sizeClasses[size] : paddedSizeClasses[size];

  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none group";

  const combinedClasses = `${baseClasses} ${currentSizeClass} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
