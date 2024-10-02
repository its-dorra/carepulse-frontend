import { getUser } from "@/lib/features/users/utils";
import DashboardCards from "@/lib/features/dashboard/components/DashboardCards";

import DashboardHeader from "@/lib/features/dashboard/components/DashboardHeader";
import DashboardTable from "@/lib/features/dashboard/components/DashboardTable";

import { redirect } from "next/navigation";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { appointmentCountQuery, appointmentQueryOptions } from "@/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page of CarePulse",
};

export default async function Dashboard({
  searchParams,
}: {
  searchParams: any;
}) {
  const { user } = await getUser();

  if (!user || user.role === "user") return redirect("/");

  if (user.status === "registered") return redirect("/new-appointment");

  const page = Number(searchParams?.page) || 1;

  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(appointmentQueryOptions(page)),
    queryClient.prefetchQuery(appointmentCountQuery),
  ]);

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
          <HydrationBoundary state={dehydrate(queryClient)}>
            <DashboardCards />
            <DashboardTable />
          </HydrationBoundary>
        </div>
      </div>
    </main>
  );
}
