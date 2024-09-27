import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/lib/components/ui/form";
import { PhoneInput } from "./phone-input";

export default function CustomPhoneInput({
  control,
  label,
  placeholder,
  name,
  error,
}: {
  control: any;
  label: string;
  placeholder: string;
  name: string;
  error?: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col justify-start">
          <FormLabel className="text-[12px] text-n-1">{label}</FormLabel>
          <FormControl>
            <div>
              <PhoneInput
                defaultCountry="DZ"
                international
                className="placeholder:text-n-1/50"
                placeholder={placeholder}
                {...field}
              />
              {error && (
                <span className="text-xs font-semibold text-red-500">
                  {error}
                </span>
              )}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
