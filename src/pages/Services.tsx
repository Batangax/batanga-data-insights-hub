
import { Navigation } from "@/components/Navigation";
import { ServicesCard } from "@/components/services-card";
import { SectionTitle } from "@/components/ui/section-title";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-batanga-skyblue/10 to-batanga-darkblue/10">
      <Navigation />
      <div className="container mx-auto px-4 py-8 md:py-20">
        <SectionTitle>Our Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <ServicesCard
            title="Data Analytics Solutions"
            items={[
              "Data Strategy Consultancy",
              "Data Engineering",
              "Data Science",
              "Platform Management"
            ]}
          />
          <ServicesCard
            title="Cybersecurity and AI Solutions"
            items={[
              "Transformation",
              "Operations Advisory"
            ]}
          />
        </div>
      </div>
    </div>
  );
}
