import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router";

import Nav from "./Nav";
import Footer from "./Footer";
import Hero from "./Hero";
import Login from "./Login";
import { ClerkProvider } from "@clerk/clerk-react";
import SignUp from "./Signup";
import OnBoard from "./OnBoard";
import { Toaster } from "react-hot-toast";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import useStore from "../state/store";
import Dashboard from "../App/ui/Dashboard";
import CreateContract from "../App/ui/CreateContract";
import Contracts from "../App/ui/Contracts";
import Profile from "../App/ui/Profile";
import TopBuyers from "./TopBuyers";
import TopFarmers from "./TopFarmers";

const Provider = () => {
  const user = useStore((state) => state.user);
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      appearance={{
        elements: {
          formButtonPrimary: {
            backgroundColor: "#123524",
            "&:hover": { backgroundColor: "#85A947" },
          },
        },
      }}
    >
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={!user.onboarded ? <Hero /> : <Navigate to="app" />}
            />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="onboard" element={<OnBoard />} />
          </Route>
          <Route
            path="app"
            element={
              <>
                <Nav />
                <Outlet />
              </>
            }
          >
            <Route index element={<Contracts />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create-contract" element={<CreateContract />} />
            <Route path="profile" element={<Profile />} />
            <Route path="top-buyers" element={<TopBuyers />} />
            <Route path="top-farmers" element={<TopFarmers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
};

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Provider;
