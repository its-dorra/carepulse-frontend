import { ReactNode } from "react";
import CustomInput from "./CustomInput";
import { FormField } from "./form";

export default function CustomFormField({
  control,
  label,
  placeholder,
  icon,
  name,
  textArea,
}: {
  control: any;
  label: string;
  name: string;
  placeholder: string;
  icon?: ReactNode;
  textArea?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <CustomInput className="text-xs" label={label}>
          {textArea ? (
            <textarea
              rows={3}
              className="w-full resize-none border-none bg-transparent p-1 text-xs outline-none placeholder:text-[12px] placeholder:text-n-1/50 focus:border-none active:border-none"
              placeholder={placeholder}
              {...field}
            />
          ) : (
            <>
              {icon && icon}
              <input
                className="w-full border-none bg-transparent text-xs outline-none placeholder:text-[12px] placeholder:text-n-1/50 focus:border-none active:border-none"
                placeholder={placeholder}
                {...field}
              />
            </>
          )}
        </CustomInput>
      )}
    />
  );
}
