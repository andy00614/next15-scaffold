import React from "react";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import UserProfile from "../user-profile";

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between p-4">
      <div>Scaffold Example</div>
      <div className="flex items-center gap-4">
        <Button
          asChild
          variant="ghost"
          size={"icon"}
          className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icons.Github className="h-6 w-6" />
        </Button>
        <UserProfile />
      </div>
    </header>
  );
}

export default Header;
