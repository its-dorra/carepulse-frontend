"use client";

import { dashboardCards } from "@/assets";
import DashboardCardStat from "./DashboardCardStat";
import { useAppointmentsCount } from "../hooks/useAppointmentsCount";
import { notFound } from "next/navigation";
import { formatDataAsObject } from "@/lib/utils/index";

export default function DashboardCards() {
  const { statusCount, isPending, isError } = useAppointmentsCount();

  if (isError) {
    return notFound();
  }

  let groupedStatus: any = [];
  if (statusCount && statusCount.length > 0) {
    groupedStatus = formatDataAsObject(statusCount);
  }

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3 lg:gap-x-10">
      {dashboardCards.map((card, ind) => (
        <DashboardCardStat
          isLoading={isPending}
          key={card.id}
          text={card.text}
          statistic={
            Object.keys(groupedStatus).length === 0
              ? 0
              : groupedStatus[card.label]
          }
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
}
