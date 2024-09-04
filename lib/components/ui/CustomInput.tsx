import { FormControl, FormItem, FormLabel } from "./form";
import CustomInputInterface from "@/lib/types/InputTypes";

export default function CustomInput({ children, label }: CustomInputInterface) {
  return (
    <FormItem className="flex w-full flex-col justify-start">
      <FormLabel className="text-[12px] text-n-1">{label}</FormLabel>
      <FormControl>
        <div className="rounded-lg border border-white/20 p-0.5 has-[:focus]:bg-gradient-radial">
          <div className="flex items-center gap-x-2 space-y-0 rounded-md bg-foreground px-3 py-2">
            {children}
          </div>
        </div>
      </FormControl>
    </FormItem>
  );
}
