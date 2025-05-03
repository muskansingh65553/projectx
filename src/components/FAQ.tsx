
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQItems = [
  {
    question: "What is StaticHost?",
    answer: "StaticHost is a static site hosting platform designed to make deploying websites simple and fast. We specialize in hosting static sites built with frameworks like React, Vue, Angular, and static site generators like Next.js, Gatsby, and Hugo."
  },
  {
    question: "How do I deploy my site?",
    answer: "You can deploy your site in three ways: connect your Git repository for automatic deployments, use our CLI tool, or simply drag and drop your build folder through our web interface."
  },
  {
    question: "Can I use a custom domain?",
    answer: "Yes! You can easily connect your custom domain to your StaticHost deployment. We automatically provision SSL certificates for all domains at no additional cost."
  },
  {
    question: "Do you offer a free plan?",
    answer: "Yes, we offer a generous free tier that includes one site, SSL, continuous deployment from Git, and 100GB of bandwidth per month. It's perfect for personal projects and learning."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer community support for our free tier users, email support for Pro plan users, and priority support with dedicated account managers for Business plan customers."
  },
  {
    question: "How does billing work?",
    answer: "We offer both monthly and annual billing options. Annual billing comes with a 20% discount. You can upgrade, downgrade, or cancel your plan at any time."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 bg-transparent">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl gradient-text">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Have a question that's not answered here? Contact our support team.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-gray-700">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-orange-400 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      {/* Orange gradient orb for background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-300/10 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default FAQ;
