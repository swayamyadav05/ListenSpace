import { cn } from "@/lib/utils";

// Reusable section wrapper
export const Section = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const variants = {
    default: "py-20 bg-white",
    gray: "py-20 bg-gray-50",
    minimal: "py-16",
  };

  return (
    <section className={cn(variants[variant], className)} {...props}>
      {children}
    </section>
  );
};

// Reusable container
export const Container = ({ children, className = "", ...props }) => (
  <div
    className={cn(
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      className
    )}
    {...props}>
    {children}
  </div>
);

// Reusable section header
export const SectionHeader = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) => (
  <div className={cn("text-center mb-16", className)}>
    <h2
      className={cn(
        "text-4xl font-bold text-gray-900 mb-4",
        titleClassName
      )}>
      {title}
    </h2>
    {subtitle && (
      <p
        className={cn(
          "text-xl text-gray-600 max-w-2xl mx-auto",
          subtitleClassName
        )}>
        {subtitle}
      </p>
    )}
  </div>
);
