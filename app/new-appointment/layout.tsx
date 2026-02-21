import { getUser } from "@/lib/features/users/utils";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "New appointment",
  description: "New appointment page of CarePulse",
};

export default async function Layout({ children }: PropsWithChildren) {
  const { user } = await getUser();

  if (!user || user.role === "admin") return redirect("/");

  if (user.status === "notRegistered") return redirect("/patient-info");

  return children;
}
