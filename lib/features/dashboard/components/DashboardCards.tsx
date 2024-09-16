"use client";

import { dashboardCards } from "@/assets";
import DashboardCardStat from "./DashboardCardStat";
import { useAppointmentsCount } from "../hooks/useAppointmentsCount";

export default function DashboardCards() {
  const { statusCount, isPending } = useAppointmentsCount();

  let groupedStatus: any;
  if (statusCount) {
    groupedStatus = Object.groupBy(statusCount, (item) => item.status);
  }

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3 lg:gap-x-10">
      {dashboardCards.map((card, ind) => (
        <DashboardCardStat
          isLoading={isPending}
          key={card.id}
          text={card.text}
          statistic={!groupedStatus ? 0 : groupedStatus[card.label][0].count}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
}
