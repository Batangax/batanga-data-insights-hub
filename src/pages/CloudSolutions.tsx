
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function CloudSolutions() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4 py-8 md:py-20">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold text-batanga-darkblue mb-4">
            Accelerate Digital Transformation with Secure, Scalable Cloud Solutions
          </h1>
          <p className="mb-4 text-gray-700">
            At Batanga Analytics Ltd, we help organizations modernize their IT infrastructure through strategic cloud adoption. Our cloud solutions are designed to drive agility, cost-efficiency, and innovation—while ensuring robust security, compliance, and performance.
          </p>
          <p className="mb-4 text-gray-700">
            Whether you're migrating legacy systems, building cloud-native applications, or optimizing a hybrid environment, our services enable you to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Scale infrastructure on demand with minimal overhead</li>
            <li>Enhance security with industry-standard cloud governance frameworks</li>
            <li>Reduce operational costs through intelligent resource optimization</li>
            <li>Improve service availability and disaster recovery readiness</li>
            <li>Enable seamless collaboration across teams, locations, and platforms</li>
          </ul>
          <p className="mb-4 text-gray-700">
            We partner with leading cloud platforms and ensure that every deployment aligns with your technical requirements, business goals, and regulatory obligations.
          </p>
          <p className="mb-4 text-gray-700">
            Empower your organization with future-ready cloud infrastructure—flexible, secure, and built for growth.
          </p>
          <Button className="bg-batanga-oceanblue text-white hover:bg-batanga-darkblue">
            Contact Us
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Cloud Solutions"
            className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}
