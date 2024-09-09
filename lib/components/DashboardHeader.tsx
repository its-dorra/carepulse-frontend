import { doctors, logo } from "@/assets";
import Image from "next/image";
import CustomAvatar from "./CustomAvatar";

export default function DashboardHeader() {
  return (
    <header className="flex w-full items-center justify-between rounded-lg bg-black/35 px-6 py-3">
      <Image className="w-28" src={logo} alt="logo" />
      <div className="flex items-center gap-x-2">
        <CustomAvatar
          src={doctors[2].imgPath}
          alt="admin picture"
          fallback="SM"
        />
        <p className="text-xs">Admin</p>
      </div>
    </header>
  );
}
