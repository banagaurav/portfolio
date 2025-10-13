"use client";
import { memo, useEffect, useState } from "react";
import laptopIcon from "@/assets/icons/laptop-icon.svg";
import Image from "next/image";

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Define the hold positions (in degrees)
  const holdPositions = [0, 90, 180, 270];
  // Define the scroll range for each hold (in pixels)
  const holdScrollRange = 200;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);

      // Total scroll distance for one full rotation
      const totalScrollDistance = 2000; // pixels for complete 0° to 360° rotation

      // Calculate progress (0 to 1)
      const progress = Math.min(scrollY / totalScrollDistance, 1); // Cap at 1

      let newRotation = 0;

      // If we've scrolled beyond the total distance, maintain smooth continuous rotation
      if (progress >= 1) {
        // Continue rotating smoothly beyond 360°
        const extraScroll = scrollY - totalScrollDistance;
        const extraProgress = extraScroll / totalScrollDistance; // Progress beyond 1
        newRotation = 360 + extraProgress * 360; // Continue from 360°
      } else {
        // Calculate which hold segment we're in
        const segmentProgress = progress * 4; // Convert to 0-4 range for 4 segments
        const holdIndex = Math.floor(segmentProgress);
        const segmentScroll =
          (progress * totalScrollDistance) % (totalScrollDistance / 4);

        const holdStart =
          holdIndex * (totalScrollDistance / 4) - holdScrollRange / 2;
        const holdEnd =
          holdIndex * (totalScrollDistance / 4) + holdScrollRange / 2;
        const currentScrollInSegment =
          holdIndex * (totalScrollDistance / 4) + segmentScroll;

        // Check if we're in a hold position range
        if (
          currentScrollInSegment >= holdStart &&
          currentScrollInSegment <= holdEnd &&
          currentScrollInSegment <= totalScrollDistance
        ) {
          // We're in a hold range - maintain the hold position
          newRotation = holdPositions[holdIndex % 4];
        } else {
          // Normal rotation - map progress to rotation
          newRotation = progress * 360;
        }
      }

      setRotation(newRotation);
      setIsVisible(true);
    };

    // Throttle scroll events for better performance
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
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <div style={{ minHeight: "250vh" }}>
      {" "}
      {/* Reduced height since we only need one rotation */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          src={laptopIcon}
          alt="Laptop Icon"
          width={500}
          height={500}
          style={{
            transform: `rotate(${rotation}deg)`,
            opacity: isVisible ? 1 : 0,
            transition: "transform 0.1s ease-out",
          }}
        />
        <p
          style={{
            marginTop: "20px",
            color: "white",
            background: "rgba(0,0,0,0.7)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Scroll Position: {scrollPosition}px | Rotation: {rotation.toFixed(1)}°
          | Progress: {Math.min((scrollPosition / 2000) * 100, 100).toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

export default memo(Hero);
