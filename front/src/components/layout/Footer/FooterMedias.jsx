"use client";
import { memo } from "react";
import Image from "next/image";

import githubIcon from "@/assets/icons/social-media/github-icon.svg";
import linkedInIcon from "@/assets/icons/social-media/linkedIn-icon.svg";
import whatsAppIcon from "@/assets/icons/social-media/whatsApp-icon.svg";

const FooterMedias = () => {
  const socialMedia = [
    {
      icon: githubIcon,
      alt: "GitHub Icon",
      href: "https://github.com/banagaurav", // Replace with your GitHub URL
      tooltip: "Go to GitHub",
    },
    {
      icon: linkedInIcon,
      alt: "LinkedIn Icon",
      href: "https://www.linkedin.com/in/gaurav-raj-bana/", // Replace with your LinkedIn URL
      tooltip: "Go to LinkedIn",
    },
    {
      icon: whatsAppIcon,
      alt: "WhatsApp Icon",
      href: "https://wa.me/9779804056965", // Replace with your WhatsApp URL
      tooltip: "Go to WhatsApp",
    },
  ];

  return (
    <div>
      <p
        style={{
          fontFamily: "Noto Sans Georgian",
          color: "#FEBE0D",
          fontSize: "16px",
        }}
      >
        Socials :
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
            title={social.tooltip}
          >
            <Image
              src={social.icon}
              alt={social.alt}
              width={36}
              height={36}
              style={{
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default memo(FooterMedias);
