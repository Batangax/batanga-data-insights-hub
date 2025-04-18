
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { SectionTitle } from "@/components/ui/section-title";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-batanga-skyblue/10 to-batanga-darkblue/10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/lovable-uploads/06268ca8-7d64-471d-bb7f-b17469e98617.png" 
            alt="Batanga Analytics Logo" 
            className="mx-auto h-32 mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-batanga-darkblue">
            Batanga Analytics Ltd
          </h1>
          <p className="text-xl md:text-2xl text-batanga-brightblue mb-8">
            Driving Business Decisions with Data & Cybersecurity Expertise
          </p>
          <Button 
            size="lg" 
            className="bg-batanga-oceanblue hover:bg-batanga-darkblue"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white/50">
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
                <h3 className="text-lg font-semibold text-batanga-oceanblue mb-2">{item}</h3>
              </div>
            ))}
          </div>
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
