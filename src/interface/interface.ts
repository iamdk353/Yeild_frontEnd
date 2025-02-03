import { z } from "zod";

export type userType = {
  name: string;
  email: string;
  number: string;
  location: string;
  userType: "farmer" | "buyer";
  onboard: boolean;
};

export const signinFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  number: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^(\+?[0-9]|\d)[0-9]{1,14}$/, "Invalid phone number format"),
  location: z.string().min(1, "Location is required"),
});

export type signinFormSchemaType = z.infer<typeof signinFormSchema>;
