
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IndustryCardProps {
  title: string;
  features: string[];
}

export function IndustryCard({ title, features }: IndustryCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-batanga-green">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
