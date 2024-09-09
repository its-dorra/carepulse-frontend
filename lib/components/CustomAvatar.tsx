import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface CustomAvatarInterface {
  src: string;
  alt: string;
  fallback: string;
}

export default function CustomAvatar({
  src,
  alt,
  fallback,
}: CustomAvatarInterface) {
  return (
    <Avatar className="h-6 w-6">
      <AvatarImage
        className="aspect-square h-6 object-cover"
        src={src}
        alt={alt}
      />
      <AvatarFallback className="aspect-square h-6">{fallback}</AvatarFallback>
    </Avatar>
  );
}
