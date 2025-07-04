
interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="p-4">
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
}
