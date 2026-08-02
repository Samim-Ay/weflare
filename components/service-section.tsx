import type { ComponentType, ComponentProps } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import ServiceCard from "./ui/serviceCard";
import StatsSection from "./stats";

type FeatureItem = {
  icon: ComponentType;
  title: string;
  description: string;
  cardBorderColor: string;
  avatarTextColor: string;
  avatarBgColor: string;
};

type ServiceCardItem = ComponentProps<typeof ServiceCard>;

type FeaturesProps = {
  featuresList: FeatureItem[];
  featuresHeader: {
    title: string;
    description: string;
  };
  serviceCards: ServiceCardItem[];
};

const Features = ({
  featuresList,
  featuresHeader,
  serviceCards,
}: FeaturesProps) => {
  return (
    <section className=" sm:py-16 lg:py-24">
      <StatsSection />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            {featuresHeader.title}
          </h2>
          <p className="text-muted-foreground text-xl">
            {featuresHeader.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "shadow-none transition-colors duration-300",
                feature.cardBorderColor,
              )}
            >
              <CardContent>
                <Avatar
                  className={cn(
                    "mb-6 size-10 rounded-md",
                    feature.avatarTextColor,
                  )}
                >
                  <AvatarFallback
                    className={cn(
                      "rounded-md [&>svg]:size-6",
                      feature.avatarBgColor,
                    )}
                  >
                    <feature.icon />
                  </AvatarFallback>
                </Avatar>
                <h6 className="mb-2 text-lg font-semibold">{feature.title}</h6>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8 sm:py-16 lg:py-24">
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
