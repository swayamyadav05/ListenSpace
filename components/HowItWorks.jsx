import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent } from "./ui/card";

const HowItWorks = ({
  data,
  variant = "default",
  showNumbers = false,
  className = "",
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={cn("grid md:grid-cols-3 gap-8 items-stretch")}>
        {data.map((step, index) => (
          <div key={index} className="relative h-full">
            {showNumbers && (
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>
            )}
            <Card
              className={
                "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
              }>
              <CardContent
                className={"p-8 text-center h-full flex flex-col"}>
                <div
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",
                    step.iconBg
                  )}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
