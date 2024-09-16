import { PropsWithChildren } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/lib/components/ui/alert-dialog";
import { Button } from "@/lib/components/ui/button";
import { AppointmentsInterface } from "@/lib/types/AppointmentsType";

interface DashboardActionButton extends PropsWithChildren {
  isGreen?: boolean;
  disabled: boolean;
  btnTitle: string;
  modalTitle: string;
  btnActionTitle: string;
  className?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DashboardActionButton({
  disabled,
  isGreen,
  btnTitle,
  modalTitle,
  className,
  isOpen,
  setIsOpen,
  children,
}: DashboardActionButton) {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          className={`m-0 border-none p-0 px-2 text-xs ${isGreen ? "text-primaryGreen" : ""} outline-none transition-colors hover:bg-white/10 disabled:cursor-not-allowed`}
          disabled={disabled}
        >
          {btnTitle}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={`border-none ${className && className}`}>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-between">
            <p>{modalTitle}</p>
            <AlertDialogCancel className="m-0 border-none p-0.5 outline-none">
              X
            </AlertDialogCancel>
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="text-left">{children}</div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
