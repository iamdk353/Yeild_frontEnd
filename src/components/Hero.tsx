import {
  ArrowRight,
  Shield,
  DollarSign,
  Handshake,
  MessageCircle,
  Sprout,
  Building,
} from "lucide-react";

const Hero = () => {
  return (
    <>
      <div
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18, 53, 36, 0.7), rgba(18, 53, 36, 0.7)), url("/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Secure Your Future with Guaranteed Buyers
            </h1>
            <p className="text-xl text-[#EFE3C2] mb-8">
              Connect directly with buyers, establish secure contracts, and grow
              your agricultural business with confidence.
            </p>
          </div>
        </div>
      </div>
      <div id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#123524] text-center mb-16">
            Key Features
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Transparent Contracts",
                desc: "Clear and secure agreement terms",
              },
              {
                icon: DollarSign,
                title: "Price Negotiation",
                desc: "Fair and flexible pricing tools",
              },
              {
                icon: Handshake,
                title: "Secure Payments",
                desc: "Protected transaction processing",
              },
              {
                icon: MessageCircle,
                title: "Direct Communication",
                desc: "Real-time messaging system",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg hover:shadow-xl transition-all"
              >
                <feature.icon className="w-12 h-12 text-[#3E7B27] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#123524] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="how-it-works" className="py-20 bg-[#123524] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Sign Up",
                desc: "Create your account as a farmer or buyer",
              },
              {
                step: 2,
                title: "Create/Find Contracts",
                desc: "Set terms and connect with partners",
              },
              {
                step: 3,
                title: "Manage Transactions",
                desc: "Secure payments and delivery tracking",
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#85A947] flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-[#EFE3C2]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Sprout className="w-8 h-8 text-[#3E7B27]" />
                <h2 className="text-3xl font-bold text-[#123524]">
                  Benefits for Farmers
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Guaranteed buyers for your produce",
                  "Stable and predictable income",
                  "Reduced market risks",
                  "Direct buyer relationships",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <ArrowRight className="text-[#85A947]" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Building className="w-8 h-8 text-[#3E7B27]" />
                <h2 className="text-3xl font-bold text-[#123524]">
                  Benefits for Buyers
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Reliable supply chain",
                  "Quality produce guarantee",
                  "Streamlined contract management",
                  "Direct farmer communication",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <ArrowRight className="text-[#85A947]" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials" className="py-20 bg-[#EFE3C2]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#123524] text-center mb-16">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Yield has transformed how I sell my produce. The guaranteed contracts give me peace of mind to focus on farming.",
                author: "John Smith",
                role: "Organic Farmer",
              },
              {
                quote:
                  "Finding reliable farmers has never been easier. The platform streamlines our entire procurement process.",
                author: "Sarah Johnson",
                role: "Procurement Manager",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#85A947] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#123524]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
