import { signIn } from "~/server/auth";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";

export default function LoginDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login required</DialogTitle>
          <DialogDescription>
            You need to be logged in to use this feature.
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={async () => {
            "use server";
            await signIn("google");
          }}
        >
          Google Login
        </Button>
      </DialogContent>
    </Dialog>
  );
}
