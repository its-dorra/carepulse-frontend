import { getUser } from "@/lib/features/users/utils";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  const { user } = await getUser();

  if (!user || user.role === "admin") return redirect("/");

  if (user.status === "notRegistered") return redirect("/patient-info");
  return <>{children}</>;
}
