import { auth } from "~/server/auth";

import LoginButton from "./login-button";
import UserProfileDropdown from "./user-profile-dropdown";

export default async function UserProfile() {
  const session = await auth();
  console.log("session", session);
  const hasUser = session?.user;
  if (hasUser) {
    return <UserProfileDropdown user={hasUser} />;
  }
  return (
    <div>
      <LoginButton />
    </div>
  );
}
