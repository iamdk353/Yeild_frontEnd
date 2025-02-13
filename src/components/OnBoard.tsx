import { useState } from "react";
import {
  Wheat,
  HandCoins,
  User,
  Mail,
  Phone,
  MapPin,
  Loader2,
} from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinFormSchema, signinFormSchemaType } from "../interface/interface";
import axios, { AxiosError } from "axios";
// import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useStore from "../state/store";
export default function OnboardingForm() {
  const updateCurrentUserState = useStore((state) => state.updateUser);

  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signinFormSchemaType>({
    resolver: zodResolver(signinFormSchema),
  });
  const [userType, setUserType] = useState<"farmer" | "buyer">("farmer");
  const { user } = useUser();
  const onSubmit = handleSubmit(async (data) => {
    try {
      const resp = await axios.post("/users", {
        ...data,
        userType,
        email: user?.primaryEmailAddress?.emailAddress,
      });
      const respData = await resp.data;
      if (user?.primaryEmailAddress?.emailAddress) {
        console.log("updated to state");
        updateCurrentUserState({
          ...data,
          userType,
          email: user?.primaryEmailAddress?.emailAddress,
          onboarded: true,
        });
      }
      toast.success(respData.msg);

      redirect("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("error ", error.response?.data.msg);
        if (error.response?.data.msg) toast.error(error.response?.data.msg);
        else {
          console.log(error);
          toast.error("Internal server error");
        }
        return;
      }
      //xtodo add toast
    }
    console.log("submitted data", {
      ...data,
      userType,
      email: user?.primaryEmailAddress?.emailAddress,
    });
    //xtodo push user to db
  });
  return (
    <div className="min-h-screen bg-lastCream flex items-center justify-center px-4 py-20">
      <div className="min-w-[30vw] bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-thirdGreen mb-6">
          Complete your Account
        </h2>
        <form className="space-y-7 text-xl" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="userType"
              className="text-md font-medium text-thirdGreen "
            >
              I am a
            </label>
            <div className="flex space-x-4 mt-3 md:flex-row flex-col">
              <button
                type="button"
                onClick={() => setUserType("farmer")}
                className={`flex-1 py-2 px-4 rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryGreen transition-colors flex justify-between items-center ${
                  userType === "farmer"
                    ? "bg-secondaryGreen text-white"
                    : "bg-white text-thirdGreen border border-secondaryGreen hover:bg-primaryGreen hover:text-white"
                }`}
              >
                Farmer
                <Wheat className="text-center" />
              </button>
              <button
                type="button"
                onClick={() => setUserType("buyer")}
                className={`flex-1 py-2 px-4 rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryGreen transition-colors flex justify-between items-center ${
                  userType === "buyer"
                    ? "bg-secondaryGreen text-white"
                    : "bg-white text-thirdGreen border border-secondaryGreen hover:bg-primaryGreen hover:text-white"
                }`}
              >
                Buyer
                <HandCoins />
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className=" text-md font-medium text-thirdGreen mb-2 flex items-center"
            >
              <User className="mr-2" size={20} /> Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primaryGreen focus:border-primaryGreen"
              placeholder="Enter your name"
              required
            />
            {errors.name && (
              <p className="text-red-500 ">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className=" text-md font-medium text-thirdGreen mb-2 flex items-center"
            >
              <Mail className="mr-2" size={20} /> Email
            </label>
            <input
              type="email"
              defaultValue={user?.primaryEmailAddress?.emailAddress}
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primaryGreen focus:border-primaryGreen cursor-default"
              placeholder="Enter your email"
              required
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="contactNumber"
              className=" text-md font-medium text-thirdGreen mb-2 flex items-center"
            >
              <Phone className="mr-2" size={20} /> Contact Number
            </label>
            <input
              {...register("number")}
              type="tel"
              id="contactNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primaryGreen focus:border-primaryGreen"
              placeholder="Enter your contact number"
              required
            />
            {errors.number && (
              <p className="text-red-500 ">{errors.number.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="location"
              className=" text-md font-medium text-thirdGreen mb-2 flex items-center"
            >
              <MapPin className="mr-2" size={20} /> Location
            </label>
            <input
              {...register("location")}
              type="text"
              id="location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primaryGreen focus:border-primaryGreen"
              placeholder="Enter your location"
              required
            />
            {errors.location && (
              <p className="text-red-500 ">{errors.location.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-secondaryGreen hover:bg-primaryGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryGreen transition-colors ${
              isSubmitting ? "pointer-events-none" : ""
            }`}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin mx-auto" />
            ) : (
              "Create Account"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
