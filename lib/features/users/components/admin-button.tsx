"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/lib/components/ui/alert-dialog";

import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import AdminForm from "./admin-form";
import { useState } from "react";

export default function AdminButton() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialog onOpenChange={(isOpen) => setIsOpen(isOpen)} open={isOpen}>
      <AlertDialogTrigger className="text-primaryGreen">
        Admin
      </AlertDialogTrigger>
      <AlertDialogContent className="w-fit space-y-4 border-none px-8 py-6">
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4">
            <div className="flex items-center justify-between">
              <p>Admin Access Verification</p>
              <AlertDialogCancel className="p-0.25 border-none">
                X
              </AlertDialogCancel>
            </div>
            <p className="text-xs text-n-1">
              To access the admin page, please enter the passkey
            </p>
          </AlertDialogTitle>
          <AdminForm closeModal={closeModal} length={6} />
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
