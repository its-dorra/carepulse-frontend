import Image from "next/image";

interface DashboardCartStat {
  icon: string;
  statistic: number;
  text: string;
  color: string;
}

export default function DashboardCardStat({
  icon,
  statistic,
  text,
  color,
}: DashboardCartStat) {
  return (
    <div
      style={{ background: `linear-gradient(to right , ${color} ,#1A1D21)` }}
      className="space-y-4 rounded-lg bg-gradient-to-r px-4 py-6"
    >
      <div className="flex items-center gap-x-2">
        <Image src={icon} alt="icon" width={18} height={18} />
        <p className="text-lg">{statistic}</p>
      </div>
      <p className="text-s">{text}</p>
    </div>
  );
}
