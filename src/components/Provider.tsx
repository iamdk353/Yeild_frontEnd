import { BrowserRouter, Route, Routes, Outlet } from "react-router";

import Nav from "./Nav";
import Footer from "./Footer";
import Hero from "./Hero";
import Login from "./Login";
import { ClerkProvider } from "@clerk/clerk-react";
import SignUp from "./Signup";
import OnBoard from "./OnBoard";
import { Toaster } from "react-hot-toast";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Provider = () => {
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
            <Route index element={<Hero />}></Route>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="onboard" element={<OnBoard />} />
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
