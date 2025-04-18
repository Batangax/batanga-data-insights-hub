
import { Button } from "@/components/ui/button";
import { ServicesCard } from "@/components/services-card";
import { IndustryCard } from "@/components/industry-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-batanga-purple/10 to-batanga-green/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/lovable-uploads/06268ca8-7d64-471d-bb7f-b17469e98617.png" 
            alt="Batanga Analytics Logo" 
            className="mx-auto h-32 mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Batanga Analytics Ltd
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Driving Business Decisions with Data & Cybersecurity Expertise
          </p>
          <Button 
            size="lg" 
            className="bg-batanga-purple hover:bg-batanga-purple/90"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle>Why Choose Us?</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "Industry Expertise",
              "Innovative Technology",
              "Proven Results",
              "Commitment to Excellence"
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-batanga-purple mb-2">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-batanga-purple/10 to-batanga-green/10">
        <div className="container mx-auto px-4">
          <SectionTitle>Contact Us</SectionTitle>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-batanga-purple" />
                <a href="mailto:batangaanalytics@gmail.com" className="hover:text-batanga-purple">
                  batangaanalytics@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-batanga-purple" />
                <a href="tel:+250783749339" className="hover:text-batanga-purple">
                  +250 783 749 339
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-batanga-purple" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">Empowering Your Business Through Data and Security!</p>
          <p className="text-sm text-gray-400">© 2024 Batanga Analytics Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
