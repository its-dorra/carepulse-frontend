import { appointments, dashboardCards } from "@/assets";
import DashboardCardStat from "@/lib/components/DashboardCardStat";
import DashboardHeader from "@/lib/components/DashboardHeader";
import DashboardTable from "@/lib/components/DashboardTable";

export default function Dashboard() {
  return (
    <main className="flex h-dvh w-dvw items-center justify-center">
      <div className="flex h-full w-full flex-col space-y-8 p-4">
        <DashboardHeader />
        <div className="max-w-[1180px] space-y-8 self-center px-6">
          <div className="space-y-2">
            <h1 className="text-2xl">Welcome, Admin</h1>
            <p className="text-xs text-n-1">
              Start day with managing new appointments
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3 lg:gap-x-10">
            {dashboardCards.map((card) => (
              <DashboardCardStat
                key={card.id}
                text={card.text}
                statistic={card.statistic}
                icon={card.icon}
                color={card.color}
              />
            ))}
          </div>
          <DashboardTable appointments={appointments} />
        </div>
      </div>
    </main>
  );
}
