import { Sprout, Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#123524] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <Sprout className="w-6 h-6 text-[#85A947]" />
              <span className="text-xl font-bold">yield</span>
            </a>
            <p className="text-[#EFE3C2] text-sm">
              Connecting farmers and buyers through secure, transparent
              contracts for a sustainable agricultural future.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@yield.com"
                className="flex items-center gap-2 text-[#EFE3C2] hover:text-[#85A947] transition-colors"
              >
                <Mail size={16} />
                <span>contact@yield.com</span>
              </a>
              <p className="text-[#EFE3C2] text-sm">
                123 Agriculture Way
                <br />
                Farmington, ST 12345
                <br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#85A947]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#EFE3C2] text-sm">
            © {new Date().getFullYear()} yield. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#EFE3C2] hover:text-[#85A947] transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
