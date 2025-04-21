
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4 py-8 md:py-20">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold text-batanga-darkblue mb-4">
            Enterprise-Grade Cybersecurity. Local Context. Global Expertise.
          </h1>
          <p className="mb-4 text-gray-700">
            At Batanga Analytics Ltd, we understand the critical importance of cybersecurity in today’s interconnected world. Our solutions are built to protect sensitive data, critical infrastructure, and digital assets—while meeting the highest standards of compliance, including those set by NCSA Rwanda and other regulatory authorities.
          </p>
          <h2 className="font-bold mt-4 mb-2 text-batanga-darkblue">Our core cybersecurity offerings include:</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Privileged Access Management (PAM) powered by BeyondTrust:</strong> Secure, monitor, and manage privileged accounts across your enterprise to prevent insider threats and external breaches.
            </li>
            <li>
              <strong>Identity & Access Management (IAM):</strong> Ensure only the right individuals access the right resources at the right time.
            </li>
            <li>
              <strong>Security Assessments & Compliance Readiness:</strong> Evaluate your cybersecurity posture and align with frameworks such as ISO 27001, NIST, and NCSA guidelines.
            </li>
            <li>
              <strong>Threat Detection & Incident Response:</strong> Proactively identify threats and respond swiftly to minimize business impact.
            </li>
          </ul>
          <p className="mb-4 text-gray-700">
            Our team—comprised of professionals with hands-on experience serving national institutions like the National Bank of Rwanda—delivers strategic, scalable, and highly secure solutions tailored to both public and private sector environments.
          </p>
          <p className="mb-4 text-gray-700">
            Your mission-critical systems deserve nothing less than world-class protection. Let’s secure them together.
          </p>
          <Button className="bg-batanga-oceanblue text-white hover:bg-batanga-darkblue mt-2" asChild>
            <a href="mailto:batangaanalytics@gmail.com">Get in Touch</a>
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Cybersecurity protection"
            className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}
