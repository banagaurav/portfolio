"use client";
import React from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import BanaImage from "../../assets/icons/bana/bana.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-24 overflow-hidden"
    >
      <div className="max-w-14xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 ">
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block fade-in-up animation-delay-100">
                  Hi, I'm <br />
                  <span className="text-[#FEBE0D] color-shift bg-gradient-to-r from-[#FEBE0D] via-[#ffd43b] to-[#FEBE0D] bg-clip-text text-transparent bg-size-200">
                    Gaurav Raj Bana
                  </span>
                </span>
                <span className="block fade-in-up animation-delay-300">
                  Web Developer
                </span>
              </h1>
            </div>

            <div className="overflow-hidden">
              <p className="text-gray-600 text-lg mb-8 max-w-lg fade-in-up animation-delay-500">
                I build modern, responsive web applications with clean design
                and exceptional user experience. Let's create something amazing
                together.
              </p>
            </div>

            <div className="flex space-x-6 fade-in-up animation-delay-700">
              <a
                href="https://github.com/banagaurav"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:rotate-12 bg-gray-100 p-3 rounded-full shadow-lg hover:shadow-xl bounce-slow"
              >
                <Github size={24} className="text-gray-800" />
              </a>
              <a
                href="https://linkedin.com/in/gaurav-raj-bana"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-110 hover:rotate-12 bg-blue-50 p-3 rounded-full shadow-lg hover:shadow-xl bounce-slow animation-delay-200"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 flex justify-center pl-10">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 float-animation glow-pulse">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#FEBE0D] shadow-lg pulse-gentle">
                <Image
                  src={BanaImage}
                  alt="Gaurav Raj Bana"
                  className="w-full h-full object-cover scale-in"
                  width={320}
                  height={320}
                />
              </div>
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 ping-slow -z-10"></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 ping-slower -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(8px) rotate(-2deg);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 12px #60a5fa, 0 0 20px #60a5fa;
          }
          50% {
            box-shadow: 0 0 24px #3b82f6, 0 0 40px #3b82f6;
          }
        }

        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulseGentle {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(254, 190, 13, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(254, 190, 13, 0);
          }
        }

        @keyframes colorShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pingSlow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .scale-in {
          animation: scaleIn 1s ease-out;
        }

        .pulse-gentle {
          animation: pulseGentle 3s ease-in-out infinite;
        }

        .color-shift {
          animation: colorShift 3s ease-in-out infinite;
        }

        .ping-slow {
          animation: pingSlow 3s ease-out infinite;
        }

        .ping-slower {
          animation: pingSlow 4s ease-out infinite;
        }

        .bg-size-200 {
          background-size: 200% auto;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
