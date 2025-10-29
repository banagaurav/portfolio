import { memo } from "react";

const IntroSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Gaurav Raj Bana
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Full-Stack Developer & Software Engineer
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-400 leading-relaxed">
            I specialize in building robust, scalable full-stack applications
            using modern technologies. With expertise in{" "}
            <span className="text-blue-400">.NET</span> and{" "}
            <span className="text-red-400">NestJS</span> for backend
            development, coupled with{" "}
            <span className="text-cyan-400">React</span> and{" "}
            <span className="text-green-400">Next.js</span> for dynamic
            frontends, I architect complete digital solutions. I enhance these
            with data-driven capabilities using
            <span className="text-yellow-400"> Python</span> and{" "}
            <span className="text-green-300">Pandas</span>, and manage data
            efficiently with <span className="text-purple-400">PostgreSQL</span>{" "}
            and <span className="text-emerald-400">MongoDB</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(IntroSection);
