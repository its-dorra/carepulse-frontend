import { PropsWithChildren, ReactNode } from "react";

export default interface CustomInput extends PropsWithChildren {
  label: string;
  className?: string;
  error?: string;
}
