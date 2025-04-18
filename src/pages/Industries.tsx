
import { Navigation } from "@/components/Navigation";
import { IndustryCard } from "@/components/industry-card";
import { SectionTitle } from "@/components/ui/section-title";

export default function Industries() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-batanga-skyblue/10 to-batanga-darkblue/10">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <SectionTitle>Transforming Industries</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <IndustryCard
            title="Healthcare"
            features={["Predictive patient analytics", "Clinical trial optimization", "Personalized medicine"]}
          />
          <IndustryCard
            title="Financial Services"
            features={["Risk analytics", "Fraud detection", "Customer segmentation"]}
          />
          <IndustryCard
            title="Retail & eCommerce"
            features={["Demand forecasting", "Inventory management", "CX personalization"]}
          />
          <IndustryCard
            title="Manufacturing"
            features={["Supply chain optimization", "Operational efficiency"]}
          />
        </div>
      </div>
    </div>
  );
}
