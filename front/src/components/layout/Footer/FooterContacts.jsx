"use client";
import { memo } from "react";

const FooterContacts = () => {
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("gauravbana840@gmail.com");
      alert("Email copied to clipboard!");
    } catch (err) {
      window.open("mailto:gauravbana840@gmail.com", "_blank");
    }
  };

  const handlePhoneClick = async () => {
    try {
      await navigator.clipboard.writeText("+977 9804056965");
      alert("Phone number copied to clipboard!");
    } catch (err) {
      window.open("tel:+9779804056965");
    }
  };

  return (
    <div>
      <p className="font-noto-sans-georgian text-[#FEBE0D] text-base mb-2">
        Contacts :
      </p>
      <div className="space-y-1">
        {/* Phone Number with Tooltip */}
        <div className="relative group">
          <p
            className="font-noto-sans-georgian text-white text-base cursor-pointer hover:underline"
            onClick={handlePhoneClick}
          >
            +977 9804056965
          </p>
          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Copy
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
          </div>
        </div>

        {/* Email with Tooltip */}
        <div className="relative group">
          <p
            className="font-noto-sans-georgian text-white text-base cursor-pointer hover:underline"
            onClick={handleEmailClick}
          >
            gauravbana840@gmail.com
          </p>
          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Copy
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FooterContacts);
