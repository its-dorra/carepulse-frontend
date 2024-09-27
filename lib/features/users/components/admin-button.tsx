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

import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import AdminForm from "./admin-form";

export default function AdminButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-primaryGreen">
        Admin
      </AlertDialogTrigger>
      <AlertDialogContent className="w-fit space-y-4 border-none px-8 py-6">
        <AlertDialogHeader>
          <AlertDialogTitle>
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
          <AlertDialogDescription asChild>
            <div>
              <AdminForm length={6} />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
