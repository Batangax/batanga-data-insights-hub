
import { Navigation } from "@/components/Navigation";
import { IndustryCard } from "@/components/industry-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export default function Industries() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-batanga-darkblue to-batanga-oceanblue py-16 px-4">
        <div className="container mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Transforming Industries</h1>
          <p className="text-lg md:text-xl mb-6">
            Tailored data solutions for diverse business sectors
          </p>
        </div>
      </section>
      
      {/* Industry Solutions Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle>Industry-Specific Solutions</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528" 
                alt="Healthcare Analytics" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-batanga-darkblue">Healthcare</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Predictive patient analytics</li>
                  <li>Clinical trial optimization</li>
                  <li>Personalized medicine</li>
                  <li>Healthcare operations efficiency</li>
                </ul>
                <Button className="mt-6 bg-batanga-oceanblue hover:bg-batanga-darkblue">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Financial Services Analytics" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-batanga-darkblue">Financial Services</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Risk analytics</li>
                  <li>Fraud detection</li>
                  <li>Customer segmentation</li>
                  <li>Investment optimization</li>
                </ul>
                <Button className="mt-6 bg-batanga-oceanblue hover:bg-batanga-darkblue">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f" 
                alt="Retail Analytics" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-batanga-darkblue">Retail & eCommerce</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Demand forecasting</li>
                  <li>Inventory management</li>
                  <li>CX personalization</li>
                  <li>Supply chain optimization</li>
                </ul>
                <Button className="mt-6 bg-batanga-oceanblue hover:bg-batanga-darkblue">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle>Success Stories</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-batanga-darkblue">Manufacturing Optimization</h3>
              <p className="text-gray-600 mb-4">
                Helped a leading manufacturer reduce operational costs by 23% through data-driven process optimization 
                and predictive maintenance solutions.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-batanga-oceanblue">Manufacturing Industry</span>
                <Button variant="outline" className="border-batanga-oceanblue text-batanga-oceanblue hover:bg-batanga-oceanblue/10">
                  View Case Study
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-batanga-darkblue">Financial Fraud Prevention</h3>
              <p className="text-gray-600 mb-4">
                Implemented advanced analytics system for a financial institution, reducing fraud incidents 
                by 87% and saving millions in potential losses.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-batanga-oceanblue">Financial Services</span>
                <Button variant="outline" className="border-batanga-oceanblue text-batanga-oceanblue hover:bg-batanga-oceanblue/10">
                  View Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Industries */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle>More Industries We Serve</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
            <IndustryCard
              title="Energy & Utilities"
              features={["Grid optimization", "Consumption forecasting", "Predictive maintenance"]}
            />
            <IndustryCard
              title="Transportation"
              features={["Route optimization", "Fleet management", "Logistics analytics"]}
            />
            <IndustryCard
              title="Public Sector"
              features={["Resource allocation", "Service delivery optimization", "Public safety analytics"]}
            />
            <IndustryCard
              title="Telecommunications"
              features={["Network optimization", "Customer churn prediction", "Service quality analytics"]}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-8 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Ready to transform your industry with data?
          </h2>
          <Button className="bg-batanga-darkblue hover:bg-batanga-oceanblue">
            Contact Our Experts
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-batanga-darkblue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">Empowering Your Business Through Data and Security!</p>
          <p className="text-sm text-gray-300">© 2024 Batanga Analytics Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
