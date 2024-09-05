import { FormControl, FormField, FormItem, FormLabel } from "./form";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export default function CustomRadioGroup({
  form,
  label,
  name,
  items,
}: {
  form: any;
  label: string;
  name: string;
  items: string[];
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-[12px] text-n-1">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex space-x-1"
            >
              {items.map((item) => {
                return (
                  <FormItem
                    key={item}
                    className={`border-text-n-1 flex w-full items-center gap-x-3 space-y-0 rounded-md border border-dashed ${field.value === "Male" ? "bg-foreground" : ""} p-3`}
                  >
                    <FormControl>
                      <RadioGroupItem
                        className={`${field.value === item ? "bg-gradient-radial" : ""}`}
                        value={item}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item}</FormLabel>
                  </FormItem>
                );
              })}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
