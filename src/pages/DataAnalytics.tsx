
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DataAnalytics() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4 py-8 md:py-20">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold text-batanga-darkblue mb-4">
            Unlock Strategic Value from Your Data
          </h1>
          <p className="mb-4 text-gray-700">
            At Batanga Analytics Ltd, we empower forward-thinking organizations to leverage data as a strategic asset. Our advanced analytics services are designed to transform complex data sets into actionable intelligence, enabling confident decision-making and measurable business growth.
          </p>
          <p className="mb-4 text-gray-700">
            With deep expertise across sectors—including finance, telecommunications, insurance, and government—we provide customized analytics solutions that are secure, scalable, and aligned with your strategic objectives.
          </p>
          <h2 className="font-bold mt-4 mb-2 text-batanga-darkblue">What We Offer</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li><strong>Trend & Pattern Discovery</strong>: Identify market shifts and emerging opportunities through descriptive and predictive analytics.</li>
            <li><strong>Operational Optimization</strong>: Streamline processes and uncover inefficiencies using data-driven insights.</li>
            <li><strong>Customer Intelligence</strong>: Enhance segmentation, personalize experiences, and drive loyalty through behavioral analytics.</li>
            <li><strong>Risk Mitigation</strong>: Forecast risks and detect anomalies before they impact your operations.</li>
            <li><strong>Real-Time Dashboards & Reports</strong>: Monitor key performance indicators and make fast, informed decisions with clarity.</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-batanga-oceanblue text-white hover:bg-batanga-darkblue" asChild>
              <a href="mailto:batangaanalytics@gmail.com">Schedule a Consultation</a>
            </Button>
            <Link to="/services">
              <Button variant="outline">Explore Our Analytics Solutions</Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
            alt="Analytics teamwork"
            className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}
