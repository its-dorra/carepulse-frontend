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
  error,
  inputType,
}: {
  control: any;
  label: string;
  name: string;
  placeholder: string;
  icon?: ReactNode;
  textArea?: boolean;
  error?: string;
  inputType?: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <CustomInput className="text-xs" label={label} error={error}>
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
                type={inputType || "text"}
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
