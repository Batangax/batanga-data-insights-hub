
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesCardProps {
  title: string;
  items: string[];
}

export function ServicesCard({ title, items }: ServicesCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-batanga-purple">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
