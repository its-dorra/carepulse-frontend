import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function DoctorTile({
  img,
  name,
  padding,
  className,
}: {
  img: string;
  name: string;
  padding?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-8 w-full items-center gap-x-2 rounded-md bg-gradient-to-br from-white/10 to-foreground ${padding ? padding : "px-3 py-2"} ${className && className} hover:bg-yellow-50/10`}
    >
      <Avatar className="h-5 w-5">
        <AvatarImage className="object-cover" src={img} alt={name} />
        <AvatarFallback>
          {name
            .split(".")[1]
            .trim()
            .split(" ")
            .map((p) => p[0].toUpperCase())
            .join("")}
        </AvatarFallback>
      </Avatar>
      <span className="text-xs">{name}</span>
    </div>
  );
}
