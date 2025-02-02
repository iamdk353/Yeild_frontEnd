import { z } from "zod";

export type FarmerDataType = {
  name: string;
  email: string;
  contactNumber: string;
  location: string;
  cropType: string;
  farmSize: string;
  irrigationType: string;
  income: string;
};
export type BuyerDataType = {
  name: string;
  email: string;
  contactNumber: string;
  location: string;
};

export interface signInFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: "farmer" | "buyer";
  agreeToTerms: boolean;
}

export const signinFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  number: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^(\+?[0-9]|\d)[0-9]{1,14}$/, "Invalid phone number format"),
  location: z.string().min(1, "Location is required"),
});

export type signinFormSchemaType = z.infer<typeof signinFormSchema>;
