import { ReactNode } from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./form";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./select";

interface CustomSelectGroupInterface<T> {
  form: any;
  items: T[];
  name: string;
  label: string;
  placeholder: string;
  icon?: ReactNode;
  disabled: boolean;
  render: (item: T) => ReactNode;
}

export default function CustomSelectGroup<T>({
  form,
  items,
  name,
  label,
  placeholder,
  disabled,
  render,
  icon,
}: CustomSelectGroupInterface<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[12px] text-n-1">{label}</FormLabel>
          <Select
            disabled={disabled}
            value={field.value}
            defaultValue={field.value}
            onValueChange={field.onChange}
          >
            <FormControl>
              <SelectTrigger className="border-white/20 bg-foreground">
                <div className="flex items-center gap-x-3">
                  {icon}
                  <SelectValue placeholder={placeholder} />
                </div>
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
