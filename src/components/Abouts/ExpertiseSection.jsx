import React from "react";
import { Globe, Smartphone, Shield, Brain, Cpu, Network, Cloud, Database, Settings, BarChart } from "lucide-react";

const ExpertiseSection = () => {
  const expertise = [
    { icon: Globe, title: "Web Development", desc: "Custom websites, web applications, e-commerce platforms" },
    { icon: Smartphone, title: "Mobile Apps", desc: "iOS, Android, React Native, Flutter solutions" },
    { icon: Shield, title: "Cybersecurity", desc: "Security audits, penetration testing, data protection" },
    { icon: Brain, title: "AI/ML Solutions", desc: "Machine learning, NLP, computer vision, automation" },
    { icon: Cpu, title: "Cloud & DevOps", desc: "AWS, Azure, GCP, CI/CD, containerization" },
    { icon: Network, title: "Enterprise Systems", desc: "Large-scale architecture, microservices, integrations" },
  ];

  const detailedServices = [
    {
      title: "Web Development",
      description:
        "Custom, responsive websites built with the latest technologies to ensure performance and scalability. From simple landing pages to complex web applications.",
      icon: Globe,
    },
    {
      title: "App Development",
      description:
        "Cross-platform mobile applications that deliver seamless user experiences across all devices. Native and hybrid solutions for iOS and Android.",
      icon: Smartphone,
    },
    {
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets from modern threats. Ensure your data and applications are secure and compliant.",
      icon: Shield,
    },
    {
      title: "AI/ML Solutions",
      description:
        "Intelligent systems powered by artificial intelligence and machine learning algorithms. Transform data into actionable insights and automation.",
      icon: Brain,
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services to optimize your business operations. Migrate, deploy, and manage applications in the cloud.",
      icon: Cloud,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to enhance your online presence and drive growth. Reach your target audience effectively across all platforms.",
      icon: BarChart,
    },
    {
      title: "Database Solutions",
      description:
        "Robust database design, optimization, and management services. Ensure data integrity, security, and optimal performance for your applications.",
      icon: Database,
    },
    {
      title: "DevOps Services",
      description:
        "Continuous integration, delivery, and deployment solutions. Streamline your development workflow and improve deployment efficiency.",
      icon: Settings,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {detailedServices.map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.title}
        className="group relative rounded-2xl overflow-hidden"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

        {/* Card */}
        <div
          className="relative h-full p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl
          transition-all duration-500 ease-out
          group-hover:-translate-y-3 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        >
          {/* Top Right Blur Accent */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-gray-200 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition duration-500"></div>

          {/* Icon */}
          <div
            className="w-14 h-14 flex items-center justify-center rounded-xl mb-5
            bg-gray-100 text-black
            group-hover:bg-black group-hover:text-white
            transition-all duration-300"
          >
            <Icon size={24} />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg mb-2 tracking-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.description}
          </p>

          {/* Bottom Hover Line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    );
  })}
</div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-black italic">
            "Building the future, one line of code at a time."
          </p>
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;