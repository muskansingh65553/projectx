import React from "react";
import { 
  Server, 
  Globe, 
  Zap, 
  Lock, 
  Code, 
  RefreshCw, 
  GitBranch, 
  LineChart, 
  Wand2
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global CDN",
    description: "Deploy your static sites to our global network of edge servers for lightning-fast load times worldwide.",
    color: "bg-orange-500/10 text-orange-400"
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Connect your GitHub, GitLab, or Bitbucket repositories for automatic deployments on every push.",
    color: "bg-orange-500/10 text-orange-400"
  },
  {
    icon: RefreshCw,
    title: "Instant Rollbacks",
    description: "Revert to any previous deployment with a single click, ensuring you can quickly fix issues.",
    color: "bg-orange-500/10 text-orange-400"
  },
  {
    icon: Lock,
    title: "SSL Encryption",
    description: "Free SSL certificates are automatically provisioned and renewed for all your sites.",
    color: "bg-orange-500/10 text-orange-400"
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Get detailed insights into your site's traffic, performance metrics, and user behavior.",
    color: "bg-orange-500/10 text-orange-400"
  },
  {
    icon: Wand2,
    title: "Custom Domains",
    description: "Use your own domain names with easy DNS configuration and management tools.",
    color: "bg-orange-500/10 text-orange-400"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-dark relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text">
            Everything you need to deploy static sites
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our platform combines simplicity with powerful features, giving you the tools to deploy
            and manage static sites with confidence.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`rounded-lg ${feature.color} p-3 inline-block transition-all duration-300 group-hover:scale-110`}>
                <feature.icon size={24} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature showcase */}
        <div className="mt-24 rounded-2xl glass p-8 md:p-12 lg:flex lg:items-center lg:gap-x-10 border border-white/10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Deploy with confidence
            </h3>
            <p className="mt-4 text-lg text-gray-400">
              Our platform handles the complexity of modern web deployments, giving you more time
              to focus on building great experiences.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <div className="rounded-full bg-orange-500/10 p-1">
                  <Zap size={16} className="h-4 w-4 text-orange-400" />
                </div>
                <span className="ml-3 text-gray-300">Automated builds and deployments</span>
              </li>
              <li className="flex items-center">
                <div className="rounded-full bg-orange-500/10 p-1">
                  <Zap size={16} className="h-4 w-4 text-orange-400" />
                </div>
                <span className="ml-3 text-gray-300">Preview deployments for PRs</span>
              </li>
              <li className="flex items-center">
                <div className="rounded-full bg-orange-500/10 p-1">
                  <Zap size={16} className="h-4 w-4 text-orange-400" />
                </div>
                <span className="ml-3 text-gray-300">Serverless functions support</span>
              </li>
              <li className="flex items-center">
                <div className="rounded-full bg-orange-500/10 p-1">
                  <Zap size={16} className="h-4 w-4 text-orange-400" />
                </div>
                <span className="ml-3 text-gray-300">Environment variables and secrets</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="rounded-xl glass p-6 border border-white/10">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-dark-accent rounded-lg p-4 text-sm font-mono text-orange-400">
                <div className="opacity-70">$ statichost deploy</div>
                <div className="mt-2">✓ Preparing build...</div>
                <div>✓ Analyzing source files...</div>
                <div>✓ Building site...</div>
                <div>✓ Optimizing assets...</div>
                <div>✓ Uploading to CDN...</div>
                <div className="mt-2">🚀 Success! Deployed to:</div>
                <div className="text-blue-400">https://your-site.statichost.app</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-accent/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Features;