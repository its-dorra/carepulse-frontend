import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "./calendar";
import { format } from "date-fns";

export default function DateOfBirth({ form }: { form: any }) {
  return (
    <FormField
      control={form.control}
      name="dateOfBirth"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-[12px] text-n-1">Date of birth</FormLabel>
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
                      format(field.value, "PPP")
                    ) : (
                      <span className="text-sm text-n-1/50">
                        Select your birthdate
                      </span>
                    )}
                  </div>
                </div>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date: Date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                className="border-white bg-foreground"
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
}
