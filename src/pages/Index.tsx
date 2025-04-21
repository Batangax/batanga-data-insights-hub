import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { SectionTitle } from "@/components/ui/section-title";
import { StatCard } from "@/components/stat-card";
import { ServiceFeatureCard } from "@/components/service-feature-card";
import { Shield, Database, ChartBar, Cpu, Cloud } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-batanga-darkblue to-batanga-skyblue py-12 px-4 flex flex-col justify-center">
        <div className="container mx-auto text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Analytics & Cybersecurity Solutions 2025
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Driving Business Decisions with Data & Advanced Cybersecurity Protection
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            asChild
          >
            <a href="mailto:batangaanalytics@gmail.com">Contact Us</a>
          </Button>
        </div>
      </section>

      {/* Services Preview Cards */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-batanga-darkblue text-white rounded-md p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="font-bold mb-2">Data Analytics</h3>
              <p className="text-sm mb-4">Transform your business with actionable insights</p>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black mt-auto"
                onClick={() => navigate("/data-analytics")}
              >
                Learn More
              </Button>
            </div>
            <div className="bg-batanga-darkblue text-white rounded-md p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="font-bold mb-2">AI Solutions</h3>
              <p className="text-sm mb-4">Leverage machine learning for business growth</p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black mt-auto" asChild>
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
            <div className="bg-batanga-darkblue text-white rounded-md p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="font-bold mb-2">Cybersecurity</h3>
              <p className="text-sm mb-4">Protect your digital assets from threats</p>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black mt-auto"
                onClick={() => navigate("/cybersecurity")}
              >
                Learn More
              </Button>
            </div>
            <div className="bg-batanga-darkblue text-white rounded-md p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="font-bold mb-2">Cloud Solutions</h3>
              <p className="text-sm mb-4">Scale your infrastructure efficiently</p>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black mt-auto"
                onClick={() => navigate("/cloud-solutions")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-batanga-darkblue mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                Batanga Analytics is a leading provider of data analytics and cybersecurity solutions. 
                We help organizations transform their data into actionable insights while ensuring 
                top-tier protection against cyber threats.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts combines deep industry knowledge with cutting-edge technology to 
                deliver customized solutions that address your specific business challenges.
              </p>
              <Button className="bg-batanga-oceanblue hover:bg-batanga-darkblue">
                Learn More About Us
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="Analytics Innovation" 
                className="rounded-lg shadow-lg max-w-full h-auto w-full object-cover"
                width={500}
                height={300} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-batanga-darkblue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard value="250+" label="Active Clients" />
            <StatCard value="1500+" label="Projects Completed" />
            <StatCard value="50" label="Expert Analysts" />
            <StatCard value="5" label="Global Offices" />
          </div>
        </div>
      </section>

      {/* Services with Icons */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Primary Analytics Services</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <ServiceFeatureCard 
              icon={<Database className="h-10 w-10 text-batanga-oceanblue" />}
              title="Advanced Data Analytics"
              description="Transform raw data into meaningful insights that drive strategic decision-making and operational efficiency."
            />
            <ServiceFeatureCard 
              icon={<ChartBar className="h-10 w-10 text-batanga-oceanblue" />}
              title="Performance Tracking"
              description="Monitor key performance indicators in real-time to optimize business processes and identify opportunities."
            />
            <ServiceFeatureCard 
              icon={<Cpu className="h-10 w-10 text-batanga-oceanblue" />}
              title="AI Solutions"
              description="Leverage machine learning algorithms to automate processes, predict trends, and enhance customer experiences."
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button className="bg-batanga-oceanblue hover:bg-batanga-darkblue">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section with Image */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-batanga-darkblue mb-4">
                Data Analytics Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive data analytics solutions help businesses extract maximum value from their data assets.
                From data collection and processing to advanced analytics and visualization, we provide end-to-end
                services tailored to your specific needs.
              </p>
              <Link to="/services">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Data Analytics Solutions" 
                className="rounded-lg shadow-lg max-w-full h-auto w-full object-cover"
                width={500}
                height={300} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Kickstart Your Secure Digital Transformation Journey, Today!
          </h2>
          <Button className="bg-batanga-darkblue hover:bg-batanga-oceanblue" asChild>
            <a href="mailto:batangaanalytics@gmail.com">Contact Us Now</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-batanga-darkblue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-300">
                Batanga Analytics Ltd delivers cutting-edge data analytics and cybersecurity solutions to help businesses thrive in the digital age.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Data Analytics</li>
                <li>Cybersecurity</li>
                <li>AI Solutions</li>
                <li>Cloud Services</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-300">
                Kigali, Rwanda<br />
                +250 783 749 339<br />
                batangaanalytics@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.556 10.556 0 01-3.123 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
            <p>© 2024 Batanga Analytics Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
