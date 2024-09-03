import { FormControl, FormItem, FormLabel } from "./form";
import CustomInputInterface from "@/lib/types/InputTypes";

export default function CustomInput({ children, label }: CustomInputInterface) {
  return (
    <FormItem className="flex flex-col justify-start">
      <FormLabel className="text-[12px] text-n-1">{label}</FormLabel>
      <FormControl>
        <div className="rounded-md border border-white/20 p-0.5 has-[:active]:bg-gradient-radial has-[:focus]:bg-gradient-radial">
          <div className="flex items-center gap-x-2 rounded-md bg-foreground px-3 py-2">
            {children}
          </div>
        </div>
      </FormControl>
    </FormItem>
  );
}
