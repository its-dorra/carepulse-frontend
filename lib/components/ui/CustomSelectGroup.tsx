import { ReactNode } from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./form";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./select";

interface CustomSelectGroupInterface {
  form: any;
  items: any[];
  name: string;
  label: string;
  placeholder: string;
  render: (item: any) => ReactNode;
}

export default function CustomSelectGroup({
  form,
  items,
  name,
  label,
  placeholder,
  render,
}: CustomSelectGroupInterface) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[12px] text-n-1">{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="border-white/20 bg-foreground">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-foreground py-2">
              {items.map(render)}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
