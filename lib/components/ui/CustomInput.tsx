import { FormControl, FormItem, FormLabel } from "./form";
import CustomInputInterface from "@/lib/types/InputTypes";

export default function CustomInput({
  children,
  label,
  className,
  error,
}: CustomInputInterface) {
  return (
    <FormItem className="flex w-full flex-col justify-start">
      <FormLabel className="text-[12px] text-n-1">{label}</FormLabel>
      <FormControl>
        <div>
          <div
            className={`rounded-lg border border-white/20 p-0.5 has-[:focus]:bg-gradient-radial ${className && className}`}
          >
            <div className="relative flex w-full items-center gap-x-2 space-y-0 rounded-md bg-foreground px-3 py-2">
              {children}
            </div>
          </div>
          {error && (
            <span className="mt-2 block w-fit rounded-sm bg-red-100 px-2 py-1 text-xs font-semibold text-red-400">
              {error}
            </span>
          )}
        </div>
      </FormControl>
    </FormItem>
  );
}
