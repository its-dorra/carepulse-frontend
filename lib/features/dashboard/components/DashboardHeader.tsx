import { logo } from "@/assets";
import Image from "next/image";
import CustomAvatar from "@/lib/components/CustomAvatar";
import { getUser } from "@/actions/userActions";
import { redirect } from "next/navigation";

export default async function DashboardHeader() {
  const { user } = await getUser({});

  if (!user || user.role === "user") return redirect("/");

  if (user.status === "registered") return redirect("/new-appointment");

  return (
    <header className="flex w-full max-w-[1180px] items-center justify-between self-center rounded-lg bg-black/35 px-6 py-3">
      <Image className="w-28" src={logo} alt="logo" />
      <div className="flex items-center gap-x-2">
        <CustomAvatar src={user.imgPath} alt="admin picture" fallback="SM" />
        <p className="text-xs">Admin</p>
      </div>
    </header>
  );
}
