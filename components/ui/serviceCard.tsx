// components/ServiceCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ServiceCardProps {
  title: string;
  badge?: string;
  description: string;
  techStack?: string[];
  features?: string[];
  icon?: React.ReactNode;
  className?: string; // Allow external styling overrides
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  badge,
  description,
  techStack = [],
  features = [],
  icon,
  className,
}) => {
  return (
    <Card
      className={cn(
        "bg-card group hover:shadow-md transition-all duration-300 border-muted/60 hover:border-primary/50",
        className,
      )}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
            {icon ?? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-6 h-6"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            )}
          </div>
          {badge && (
            <Badge variant="secondary" className="text-muted-foreground">
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="mb-4 text-base">
          {description}
        </CardDescription>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs bg-muted/50 hover:bg-muted"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {features.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/40">
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3 tracking-wider">
              Leistungen
            </h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, idx) => (
                <Button
                  variant="outline"
                  key={idx}
                  className="text-primary/80 border-primary/10"
                >
                  {feature}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
