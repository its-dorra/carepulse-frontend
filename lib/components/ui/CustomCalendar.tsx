import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "./calendar";
import { format } from "date-fns";

type type = "default" | "single" | "multiple" | "range";

export default function DateOfBirth({
  form,
  label,
  placeholder,
  type = "single",
  name,
  disabled,
}: {
  form: any;
  label: string;
  placeholder: string;
  type?: type;
  name: string;
  disabled?: boolean;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-[12px] text-n-1">{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <div className="rounded-lg border border-white/20 p-0.5 has-[:focus]:bg-gradient-radial">
                  <div
                    className={cn(
                      "flex w-full cursor-pointer items-center bg-foreground p-2 font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                    {field.value ? (
                      <span className="text-xs">
                        {format(field.value, "PPP")}
                      </span>
                    ) : (
                      <span className="text-sm text-n-1/50">{placeholder}</span>
                    )}
                  </div>
                </div>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode={type}
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date: Date) =>
                  !disabled ? date < new Date("1930-01-01") : date <= new Date()
                }
                className="border-white bg-foreground"
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
}
