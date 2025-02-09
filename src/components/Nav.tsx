import { Sprout, Loader2, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { useLocation } from "react-router";
import useStore from "../state/store";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const setUserLoading = useStore((state) => state.setUserLoading);
  const { user, isSignedIn } = useUser();
  const stateUser = useStore((state) => state.user);
  const UpdateStateUser = useStore((state) => state.updateUser);
  const userLoading = useStore((state) => state.userLoading);
  useEffect(() => {
    // console.log("useload state", userLoading);
  }, [userLoading]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // console.log("nav monut");
    async function main() {
      setUserLoading(true);
      if (stateUser.onboarded || isSignedIn) {
        try {
          const resp = await axios.get(
            `/user/${user?.primaryEmailAddress?.emailAddress}`
          );
          const data = await resp.data;
          // console.log(data.msg);
          UpdateStateUser(data.msg);
          // console.log("updated user state from DB", stateUser);
          setUserLoading(false);
        } catch (error) {
          setUserLoading(false);
          // console.log(error);
        } finally {
          setUserLoading(false);
        }
      }
      setUserLoading(false);
    }
    main();
  }, [UpdateStateUser, isSignedIn, stateUser.onboarded]);

  const location = useLocation();
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300  ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-36 md:h-16 flex-col py-10 md:flex-row ">
          {/* Logo */}

          <NavLink
            to={stateUser.onboarded ? "/app#" : "/#"}
            className="flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Sprout
              className={`w-6 h-6 ${
                isScrolled ? "text-[#3E7B27]" : "text-[#3E7B27]/80"
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-[#123524]" : "text-zinc-400"
              }`}
            >
              yield
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="flex  md:flex-row items-center gap-8">
            {location.pathname === "/" && !stateUser.onboarded && (
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#features"
                  className={`${
                    isScrolled ? "text-[#123524]" : "text-white"
                  } hover:text-[#85A947] transition-colors`}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className={`${
                    isScrolled ? "text-[#123524]" : "text-white"
                  } hover:text-[#85A947] transition-colors`}
                >
                  How It Works
                </a>
                <a
                  href="#benefits"
                  className={`${
                    isScrolled ? "text-[#123524]" : "text-white"
                  } hover:text-[#85A947] transition-colors`}
                >
                  Benefits
                </a>
                <a
                  href="#testimonials"
                  className={`${
                    isScrolled ? "text-[#123524]" : "text-white"
                  } hover:text-[#85A947] transition-colors`}
                >
                  Success Stories
                </a>
              </div>
            )}

            {stateUser.onboarded ? (
              <>
                <div className="flex  items-center gap-8">
                  <Link
                    to="my-contracts"
                    className={`${
                      isScrolled ? "text-[#123524]" : "text-thirdGreen"
                    } hover:text-[#85A947] transition-colors`}
                  >
                    My Contracts
                  </Link>
                  {stateUser.userType === "buyer" && (
                    <Link
                      to="create-product"
                      className={`${
                        isScrolled ? "text-[#123524]" : "text-thirdGreen"
                      } hover:text-[#85A947] transition-colors`}
                    >
                      Create Product
                    </Link>
                  )}
                </div>
                <Link
                  to="profile"
                  className={`${
                    isScrolled ? "text-[#123524]" : "text-thirdGreen"
                  } hover:text-[#85A947] transition-colors`}
                >
                  <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-lg font-semibold transition-all">
                    <User />
                  </button>
                </Link>
              </>
            ) : userLoading ? (
              <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-lg font-semibold transition-all">
                <Loader2 className="animate-spin" />
              </button>
            ) : (
              <NavLink to="signup">
                {location.pathname !== "/onboard" && (
                  <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-lg font-semibold transition-all my-5 md:my-0">
                    Get Started
                  </button>
                )}
              </NavLink>
            )}
          </div>
          {/* app navigation */}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
