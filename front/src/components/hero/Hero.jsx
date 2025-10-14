"use client";
import { memo, useEffect, useState } from "react";
import laptopIcon from "@/assets/icons/laptop-icon.svg";
import Image from "next/image";
import Tools from "../tools/Tools";

// Define the content for each hold position with actual components
const holdContents = [
  {
    title: "Tools",
    description: "Powerful tools for modern development",
    component: <Tools />,
  },
  {
    title: "Frontend",
    description: "Discover what makes us different",
    component: (
      <div className="text-center p-6 bg-green-500 text-white rounded-lg">
        Features Component
      </div>
    ),
  },
  {
    title: "Database",
    description: "Custom solutions for your business",
    component: (
      <div className="text-center p-6 bg-purple-500 text-white rounded-lg">
        Solutions Component
      </div>
    ),
  },
  {
    title: "Backend",
    description: "Let's start your project today",
    component: (
      <div className="text-center p-6 bg-orange-500 text-white rounded-lg">
        Contact Component
      </div>
    ),
  },
];

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeHoldIndex, setActiveHoldIndex] = useState(null);
  const [contentTransition, setContentTransition] = useState({
    isTransitioning: false,
    direction: "in", // 'in' or 'out'
  });

  const holdPositions = [0, 90, 180, 270];
  const holdScrollRange = 200;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);

      const totalScrollDistance = 2000;
      const progress = Math.min(scrollY / totalScrollDistance, 1);

      let newRotation = 0;
      let newActiveHoldIndex = null;

      if (progress >= 1) {
        const extraScroll = scrollY - totalScrollDistance;
        const extraProgress = extraScroll / totalScrollDistance;
        newRotation = 360 + extraProgress * 360;
      } else {
        const segmentProgress = progress * 4;
        const holdIndex = Math.floor(segmentProgress);
        const segmentScroll =
          (progress * totalScrollDistance) % (totalScrollDistance / 4);

        const holdStart =
          holdIndex * (totalScrollDistance / 4) - holdScrollRange / 2;
        const holdEnd =
          holdIndex * (totalScrollDistance / 4) + holdScrollRange / 2;
        const currentScrollInSegment =
          holdIndex * (totalScrollDistance / 4) + segmentScroll;

        if (
          currentScrollInSegment >= holdStart &&
          currentScrollInSegment <= holdEnd &&
          currentScrollInSegment <= totalScrollDistance
        ) {
          newRotation = holdPositions[holdIndex % 4];
          newActiveHoldIndex = holdIndex % 4;
        } else {
          newRotation = progress * 360;
          newActiveHoldIndex = null;
        }
      }

      // Handle content transitions
      if (newActiveHoldIndex !== activeHoldIndex) {
        if (newActiveHoldIndex === null) {
          // Starting to transition out
          setContentTransition({ isTransitioning: true, direction: "out" });
        } else {
          // Starting to transition in
          setContentTransition({ isTransitioning: true, direction: "in" });
        }

        // Set the new active index after a small delay for smooth transition
        setTimeout(() => {
          setActiveHoldIndex(newActiveHoldIndex);
          setContentTransition({ isTransitioning: false, direction: "in" });
        }, 300); // Match this with your CSS transition duration
      }

      setRotation(newRotation);
      setIsVisible(true);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [activeHoldIndex]);

  // Get transition classes based on state
  const getTransitionClasses = () => {
    if (contentTransition.isTransitioning) {
      if (contentTransition.direction === "out") {
        return "opacity-0 scale-95 translate-y-4";
      } else {
        return "opacity-0 scale-95 -translate-y-4";
      }
    } else {
      return "opacity-100 scale-100 translate-y-0";
    }
  };

  return (
    <div style={{ minHeight: "250vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <Image
          src={laptopIcon}
          alt="Laptop Icon"
          width={425}
          height={425}
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "" : "opacity-0"
          }`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />

        {/* Content Display */}
        <div className="mt-8 w-full max-w-4xl px-4">
          <div className="min-h-[300px] flex items-center justify-center">
            <div
              className={`w-full transition-all duration-500 ease-in-out transform ${getTransitionClasses()}`}
            >
              {activeHoldIndex !== null ? (
                <div>
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 transition-all duration-500 ease-out">
                      {holdContents[activeHoldIndex].title}
                    </h2>
                    <p className="text-xl text-gray-600 mt-2 transition-all duration-500 ease-out delay-100">
                      {holdContents[activeHoldIndex].description}
                    </p>
                  </div>
                  <div className="transition-all duration-500 ease-out delay-200">
                    {holdContents[activeHoldIndex].component}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-400 mb-2 transition-all duration-500 ease-out">
                    Keep Scrolling
                  </h3>
                  <p className="text-gray-500 transition-all duration-500 ease-out delay-100">
                    Discover more as you scroll through different sections
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Optional Debug Info - you can remove this in production */}
        <div className="mt-4 px-4 py-2 bg-black bg-opacity-70 text-white rounded text-sm transition-all duration-300">
          Section:{" "}
          {activeHoldIndex !== null
            ? holdContents[activeHoldIndex].title
            : "Transitioning"}
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
