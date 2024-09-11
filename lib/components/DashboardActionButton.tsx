"use client";

import { PropsWithChildren } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";

interface DashboardActionButton extends PropsWithChildren {
  isGreen?: boolean;
  btnTitle: string;
  modalTitle: string;
  btnActionTitle: string;
  className?: string;
}

export default function DashboardActionButton({
  isGreen,
  btnTitle,
  btnActionTitle,
  modalTitle,
  className,
  children,
}: DashboardActionButton) {
  const form = useForm({});

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={`m-0 border-none p-0 text-xs ${isGreen ? "text-primaryGreen" : ""} outline-none`}
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
          <AlertDialogDescription>{children}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            type="submit"
            className={`w-full ${isGreen ? "bg-primaryGreen" : "bg-red-500"}`}
          >
            {btnActionTitle}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
