import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const TrustIndicators = ({
  data = [
    {
      value: "1000+",
      label: "Sessions Completed",
      color: "text-purple-600",
      badge: "Popular",
    },
    {
      value: "4.9★",
      label: "Average Rating",
      color: "text-blue-600",
      badge: "Rated",
    },
    {
      value: "50+",
      label: "Trained Listeners",
      color: "text-green-600",
      badge: "Expert",
    },
    {
      value: "24/7",
      label: "Support Available",
      color: "text-orange-600",
      badge: "Always On",
    },
  ],
  variant = "default",
  size = "lg",
  showBadges = false,
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const containerClasses = {
    default: "py-12 bg-white",
    card: "py-12 bg-gray-50",
    minimal: "py-8",
  };

  const renderIndicator = (indicator, index) => {
    const content = (
      <div className="text-center">
        {showBadges && indicator.badge && (
          <Badge variant="secondary" className="mb-2">
            {indicator.badge}
          </Badge>
        )}
        <div
          className={cn(
            "font-bold",
            sizeClasses[size],
            indicator.color
          )}>
          {indicator.value}
        </div>
        <div className="text-gray-600 text-sm md:text-base">
          {indicator.label}
        </div>
      </div>
    );

    if (variant === "card") {
      return (
        <Card
          key={index}
          className="border-0 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">{content}</CardContent>
        </Card>
      );
    }

    return <div key={index}>{content}</div>;
  };

  return (
    <section className={cn(containerClasses[variant], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid gap-8",
            `md:grid-cols-${Math.min(data.length, 4)}`
          )}>
          {data.map(renderIndicator)}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
