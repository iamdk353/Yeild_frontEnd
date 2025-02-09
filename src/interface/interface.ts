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

export interface productType {
  buyerName: string;
  buyerId: string;
  productId: Number;
  productName: string;
  quantity: string;
  price: Number;
  deliveryDate: string;
}

export interface AgreementType extends productType {
  farmerTerms: string | null;
  buyerTerms: string | null;
  isFetching: boolean;
}

export interface ServerResponseType {
  code: number;
  msg: AgreementType[];
}
export interface MyContractsType {
  productId: number;
  productName: string;
  buyerEmail: string;
}
