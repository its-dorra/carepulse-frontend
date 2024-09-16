import { appointments, dashboardCards } from "@/assets";
import DashboardCards from "@/lib/features/dashboard/components/DashboardCards";
import DashboardCardStat from "@/lib/features/dashboard/components/DashboardCardStat";
import DashboardHeader from "@/lib/features/dashboard/components/DashboardHeader";
import DashboardTable from "@/lib/features/dashboard/components/DashboardTable";

export default function Dashboard() {
  return (
    <main className="flex h-dvh w-dvw items-center justify-center">
      <div className="flex h-full w-full flex-col space-y-8 p-4">
        <DashboardHeader />
        <div className="w-full max-w-[1180px] space-y-8 self-center px-6">
          <div className="space-y-2">
            <h1 className="text-2xl">Welcome, Admin</h1>
            <p className="text-xs text-n-1">
              Start day with managing new appointments
            </p>
          </div>
          <DashboardCards />
          <DashboardTable />
        </div>
      </div>
    </main>
  );
}
