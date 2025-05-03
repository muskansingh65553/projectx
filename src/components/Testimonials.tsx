
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "StaticHost has transformed our workflow. The speed and reliability of their platform has cut our deployment time by 80%.",
    author: "Alex Johnson",
    title: "CTO, TechDynamics",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The simplicity of using StaticHost has been game-changing for our team. We can focus on developing while they handle the infrastructure.",
    author: "Sarah Chen",
    title: "Lead Developer, CreativeWeb",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "I've tried several static hosting providers, but StaticHost's performance and intuitive interface are unmatched. Highly recommended!",
    author: "Marcus Williams",
    title: "Freelance Web Developer",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text">
            Trusted by developers worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of developers and companies who rely on StaticHost for their hosting needs.
          </p>
        </div>

        {/* Logo cloud */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-12 w-32 bg-white/10 rounded opacity-60 border border-gray-800"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="rounded-2xl glass backdrop-blur-sm bg-dark-accent/30 p-8 border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} className="h-5 w-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <blockquote className="text-gray-300">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-orange-500/50">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 rounded-2xl glass backdrop-blur-sm bg-dark-accent/30 p-8 md:p-12 border border-gray-800">
          <div className="grid gap-y-8 md:grid-cols-3 md:gap-x-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text">99.99%</div>
              <div className="mt-2 text-gray-300">Uptime guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text">15,000+</div>
              <div className="mt-2 text-gray-300">Websites deployed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text">250+</div>
              <div className="mt-2 text-gray-300">Edge locations</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-300/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/5 to-orange-300/5 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default Testimonials;
