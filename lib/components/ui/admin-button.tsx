import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/lib/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/lib/components/ui/input-otp";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";

export default function AdminButton() {
  return (
    <AlertDialog>
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
          <AlertDialogDescription>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot
                  className="h-14 w-14 border-white/20 text-3xl text-primaryGreen outline-none has-[:focus]:border-primaryGreen"
                  index={0}
                />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot
                  index={1}
                  className="h-14 w-14 border-white/20 text-3xl text-primaryGreen outline-none focus:border-primaryGreen"
                />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot
                  index={2}
                  className="h-14 w-14 border-white/20 text-3xl text-primaryGreen outline-none focus:border-primaryGreen"
                />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot
                  index={3}
                  className="h-14 w-14 border-white/20 text-3xl text-primaryGreen outline-none focus:border-primaryGreen"
                />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot
                  index={4}
                  className="h-14 w-14 border-white/20 text-3xl text-primaryGreen outline-none focus:border-primaryGreen"
                />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot
                  index={5}
                  className="h-14 w-14 border-white/20 text-3xl text-primaryGreen outline-none focus:border-primaryGreen"
                />
              </InputOTPGroup>
            </InputOTP>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-full rounded-md bg-primaryGreen py-2">
            Enter Admin Passkey
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
