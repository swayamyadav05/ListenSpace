import { cn } from "@/lib/utils";
import React, { useCallback } from "react";

const Features = React.memo(
  ({
    data,
    layout = "grid",
    columns = "auto",
    className = "",
    featureClassName = "",
    ...props
  }) => {
    const getGridColumns = useCallback(() => {
      if (columns !== "auto") return `md:grid-cols-${columns}`;

      const count = data.length;
      if (count <= 2) return "md:grid-cols-2";
      if (count <= 3) return "md:grid-cols-3";
      if (count <= 4) return "md:grid-cols-2 lg:grid-cols-4";
      if (count <= 6) return "md:grid-cols-2 lg:grid-cols-3";
      return "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }, [columns, data.length]);

    const renderIcon = useCallback((feature) => {
      return <span className="text-2xl">{feature.icon}</span>;
    }, []);

    const renderFeature = (feature, index) => {
      const content = (
        <div className="border-2 border-purple-400/30 shadow-lg hover:border-purple-400/10 transition-all duration-200 rounded-lg p-6 h-full">
          <div
            className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
              feature.iconBg || "bg-gray-100"
            )}>
            {renderIcon(feature)}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      );

      return (
        <div
          key={index}
          className={cn(
            "hover:bg-gray-50 rounded-lg transition-colors duration-200 h-full",
            featureClassName
          )}>
          {content}
        </div>
      );
    };

    const renderList = () => (
      <div className="space-y-8">
        {data.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                feature.iconBg || "bg-gray-100"
              )}>
              {renderIcon(feature)}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div className={cn(className)} {...props}>
        {layout === "list" ? (
          renderList()
        ) : (
          <div
            className={cn(
              "grid gap-8 items-stretch",
              getGridColumns()
            )}>
            {data.map(renderFeature)}
          </div>
        )}
      </div>
    );
  }
);

export default Features;
