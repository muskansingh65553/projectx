import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Perfect for personal projects and experiments.",
    features: [
      "1 site",
      "HTTPS/SSL included",
      "Continuous deployment",
      "Basic analytics",
      "Community support",
      "100GB bandwidth/month"
    ],
    cta: "Start for free",
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    description: "For professionals and growing businesses.",
    features: [
      "10 sites",
      "Custom domains",
      "Team collaboration",
      "Advanced analytics",
      "Form handling",
      "500GB bandwidth/month",
      "Email support"
    ],
    cta: "Get started",
    popular: true
  },
  {
    name: "Business",
    price: "$49",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited sites",
      "Enterprise SSO",
      "Advanced security",
      "Custom branding",
      "Priority support",
      "2TB bandwidth/month",
      "99.99% uptime SLA"
    ],
    cta: "Contact sales",
    popular: false
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-dark relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mt-8">
          <div className="relative flex items-center p-1 rounded-full glass">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                !annual ? "bg-orange-500 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                annual ? "bg-orange-500 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Annual (save 20%)
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl glass transition-transform duration-300 hover:scale-105 relative overflow-hidden ${
                plan.popular ? "border-orange-500/50" : "border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs font-medium px-3 py-1 tracking-wider uppercase">
                  Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="mt-2 text-gray-400">{plan.description}</p>
                <Button
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="px-6 pb-8 pt-2 md:px-8">
                <p className="text-sm font-medium text-white mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <Check
                        size={16}
                        className={`h-4 w-4 mr-3 ${
                          plan.popular ? "text-orange-400" : "text-gray-400"
                        }`}
                      />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Need something more specific?{" "}
            <a href="#" className="text-orange-400 font-medium hover:text-orange-300 transition-colors">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-accent/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Pricing;