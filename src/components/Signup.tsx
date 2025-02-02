// import { Eye, Loader2 } from "lucide-react";
// import { NavLink } from "react-router";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { signinFormSchema, signinFormSchemaType } from "../interface/interface";
// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// // import Signup from "./Login";
// const signUp = () => {
//   const [farmer, setFarmer] = useState(true);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<signinFormSchemaType>({
//     resolver: zodResolver(signinFormSchema),
//   });
//   const onSignUp: SubmitHandler<signinFormSchemaType> = (data) => {
//     console.log({ ...data, AccountType: farmer ? "Farmer" : "Buyer" });
//   };

//   return (
//     <div className="min-h-screen bg-[#85A947]/70 flex flex-col">
//       <main className="flex-1 flex items-center justify-center py-12 px-4">
//         <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-bold text-[#123524]">
//               Create Your Account
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Join our community of farmers and buyers
//             </p>
//           </div>

//           <form className="space-y-6" onSubmit={handleSubmit(onSignUp)}>
//             <div className="grid grid-cols-2 gap-4">
//               <label
//                 className={
//                   farmer
//                     ? `flex items-center justify-center p-4 rounded-lg border-2 border-[#85A947] bg-[#85A947]/10 text-[#123524] cursor-pointer`
//                     : `flex items-center justify-center p-4 rounded-lg border-2 border-gray-200 hover:border-[#85A947]/50 cursor-pointer`
//                 }
//               >
//                 <input
//                   type="radio"
//                   name="accountType"
//                   value="farmer"
//                   defaultChecked={farmer}
//                   onChange={() => {
//                     setFarmer(true);
//                   }}
//                   className="hidden"
//                 />
//                 <span className="font-medium">Farmer</span>
//               </label>

//               <label
//                 className={
//                   !farmer
//                     ? `flex items-center justify-center p-4 rounded-lg border-2 border-[#85A947] bg-[#85A947]/10 text-[#123524] cursor-pointer`
//                     : `flex items-center justify-center p-4 rounded-lg border-2 border-gray-200 hover:border-[#85A947]/50 cursor-pointer`
//                 }
//               >
//                 <input
//                   type="radio"
//                   name="accountType"
//                   value="buyer"
//                   className="hidden"
//                   onChange={() => {
//                     setFarmer(false);
//                   }}
//                 />
//                 <span className="font-medium">Buyer</span>
//               </label>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="firstName"
//                   className="block text-sm font-medium text-[#123524] mb-1"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   {...register("firstName")}
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85A947]"
//                 />
//                 {errors.firstName && (
//                   <p className="text-red-400 font-medium">
//                     First name is required
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="lastName"
//                   className="block text-sm font-medium text-[#123524] mb-1"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   {...register("lastName")}
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85A947]"
//                 />
//                 {errors.lastName && (
//                   <p className="text-red-400 font-medium">
//                     Last name is required
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-[#123524] mb-1"
//               >
//                 Email Address
//               </label>
//               <input
//                 {...register("email")}
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85A947]"
//               />
//               {errors.email && (
//                 <p className="text-red-400 font-medium">
//                   {errors.email?.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-[#123524] mb-1"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   {...register("password")}
//                   type="password"
//                   id="password"
//                   name="password"
//                   className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85A947]"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 >
//                   <Eye size={20} />
//                 </button>
//                 {errors.password && (
//                   <p className="text-red-400 font-medium">
//                     {errors.password?.message}
//                   </p>
//                 )}
//               </div>
//               <p className="mt-2 text-sm text-gray-500">
//                 Password must be at least 8 characters long and include
//                 uppercase, lowercase, and numbers
//               </p>
//             </div>

//             <div>
//               <label className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   className="mt-1"
//                   {...register("agreeToTerms")}
//                 />
//                 <span className="text-sm text-gray-600">
//                   I agree to the{" "}
//                   <a href="#" className="text-[#3E7B27] hover:text-[#85A947]">
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a href="#" className="text-[#3E7B27] hover:text-[#85A947]">
//                     Privacy Policy
//                   </a>
//                 </span>
//               </label>
//               {errors.agreeToTerms && (
//                 <p className="text-red-400 font-medium">
//                   {errors.agreeToTerms?.message}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-[#85A947] hover:bg-[#3E7B27] transition-colors"
//             >
//               {isSubmitting ? (
//                 <Loader2 className="animate-spin" />
//               ) : (
//                 " Create Account "
//               )}
//             </button>

//             {/* Sign In Link */}
//             <p className="text-center text-sm text-gray-600">
//               Already have an account?{" "}
//               <NavLink
//                 to="/login"
//                 className="text-[#3E7B27] hover:text-[#85A947] font-medium"
//               >
//                 Log in
//               </NavLink>
//             </p>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };
// export default signUp;

import { SignUp } from "@clerk/clerk-react";
const Signup = () => {
  return (
    <div className="min-h-screen bg-#85A947 flex flex-col justify-center items-center">
      <SignUp forceRedirectUrl={"/onboard"} />
    </div>
  );
};
export default Signup;
