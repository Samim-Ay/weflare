import ContactSection from "@/components/contact-section";
import Features from "@/components/service-section";
import { FEATURES_LIST, FEATURES_HEADER, SERVICE_CARDS } from "@/lib/service-data";

const FeaturesPage = () => {
  return (
    <>
      <Features
        featuresList={FEATURES_LIST}
        featuresHeader={FEATURES_HEADER}
        serviceCards={SERVICE_CARDS}
      />
      <ContactSection/>
    </>
  );
};

export default FeaturesPage;
