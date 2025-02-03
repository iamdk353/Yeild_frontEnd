import { Sprout, X, Menu, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useLocation } from "react-router";
import useStore from "../state/store";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const setUserLoading = useStore((state) => state.setUserLoading);
  const { user, isSignedIn } = useUser();
  const stateUser = useStore((state) => state.user);
  const UpdateStateUser = useStore((state) => state.updateUser);
  const userLoading = useStore((state) => state.userLoading);
  useEffect(() => {
    console.log("useload state", userLoading);
  }, [userLoading]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    console.log("nav monut");
    async function main() {
      setUserLoading(true);
      if (stateUser.onboarded || isSignedIn) {
        try {
          const resp = await axios.get(
            `/user/${user?.primaryEmailAddress?.emailAddress}`
          );
          const data = await resp.data;
          console.log(data.msg);
          UpdateStateUser(data.msg);
          console.log("updated user state from DB", stateUser);
          setUserLoading(false);
        } catch (error) {
          setUserLoading(false);
          console.log(error);
        }
      }
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <NavLink to={"/#"} className="flex items-center gap-2">
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
          <div className="hidden md:flex items-center gap-8">
            {location.pathname === "/" && (
              <>
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
              </>
            )}

            {stateUser.onboarded ? (
              <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-lg font-semibold transition-all">
                Hello ,{stateUser.name}
              </button>
            ) : userLoading ? (
              <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-lg font-semibold transition-all">
                <Loader2 className="animate-spin" />
              </button>
            ) : (
              <NavLink to="signup">
                {location.pathname !== "/onboard" && (
                  <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-lg font-semibold transition-all">
                    Get Started
                  </button>
                )}
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-[#123524]" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-[#123524]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-[#123524] hover:text-[#85A947] transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-[#123524] hover:text-[#85A947] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-[#123524] hover:text-[#85A947] transition-colors"
              >
                Benefits
              </a>
              <a
                href="#testimonials"
                className="text-[#123524] hover:text-[#85A947] transition-colors"
              >
                Success Stories
              </a>
              <button className="bg-[#85A947] hover:bg-[#3E7B27] text-white px-4 py-2 rounded-lg font-semibold transition-all w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Nav;
