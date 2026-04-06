import AnimatedSection from "./AnimatedSection";
import ProcessStep from "./ProcessStep";
import TechTag from "./TechTag";
import PrototypeCard from "./PrototypeCard";

const ProjectCard = ({ project, delay }) => {
  return (
    <AnimatedSection delay={delay}>
      <section className="border border-gray-200 rounded-2xl p-8 md:p-12 hover:border-gray-400 transition-colors duration-500 bg-white shadow-sm">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {project.tagline}
            </p>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-black px-8 py-4 rounded-lg bg-white text-black font-medium transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Visit Platform
            </a>
          )}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-bold mb-3">Client Problem</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Process</h3>

              {project.process.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.desc}
                  delay={index * 200}
                  isLast={index === project.process.length - 1}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-bold mb-4 uppercase text-sm">
                Tech Stack
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.tech.map((tech, index) => (
                  <TechTag key={index} tech={tech} delay={index * 80} />
                ))}
              </div>
            </div>

            <PrototypeCard delay={200} />

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProjectCard;