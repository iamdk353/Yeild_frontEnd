import { create } from "zustand";

type typeUser = {
  name: string;
  email: string;
  number: string;
  location: string;
  userType: "farmer" | "buyer";
  onboarded: boolean;
};

interface StateType {
  user: typeUser;
  userLoading: boolean;
  updateUser: (by: typeUser) => void;
  setUserLoading: (load: boolean) => void;
}

const useStore = create<StateType>((set) => ({
  user: {
    email: "",
    location: "",
    name: "",
    number: "",
    onboarded: false,
    userType: "farmer",
  },
  userLoading: false,

  updateUser: (by) => {
    return set((state) => ({ user: { ...state.user, ...by } }));
  },
  setUserLoading: (load: boolean) => {
    return set({ userLoading: load });
  },
}));

export default useStore;

// export const useCurrentUserState = () => {
//   return useStore((state) => state.user);
// };
// export const updateCurrentUserState = (value: typeUser) => {
//   return useStore((state) => state.updateUser(value));
// };
