
import { Navigation } from "@/components/Navigation";
import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-batanga-skyblue/10 to-batanga-darkblue/10">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-batanga-oceanblue" />
              <a href="mailto:batangaanalytics@gmail.com" className="hover:text-batanga-oceanblue">
                batangaanalytics@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-batanga-oceanblue" />
              <a href="tel:+250783749339" className="hover:text-batanga-oceanblue">
                +250 783 749 339
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-batanga-oceanblue" />
              <span>Kigali, Rwanda</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
