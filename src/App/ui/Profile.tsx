import { SignOutButton, UserProfile } from "@clerk/clerk-react";
import { LogOut } from "lucide-react";

const Profile = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center  flex-col">
      <SignOutButton>
        <button className="bg-primaryGreen text-white p-2  flex m-2 rounded-xl text-xl cursor-pointer">
          Logout <LogOut className="mx-2" />
        </button>
      </SignOutButton>
      <UserProfile />
    </div>
  );
};
export default Profile;
