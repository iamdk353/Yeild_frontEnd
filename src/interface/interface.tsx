export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: "farmer" | "buyer";
  agreeToTerms: boolean;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  agreeToTerms?: string;
}
