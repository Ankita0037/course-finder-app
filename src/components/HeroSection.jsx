// src/components/HeroSection.jsx
import { useEffect, useRef, useState } from "react";
import DashboardImage from "../assets/DashboardImage.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Scrolling animation for services bar
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      let scrollPos = 0;
      const scroll = () => {
        scrollPos += 0.5;
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
        requestAnimationFrame(scroll);
      };
      requestAnimationFrame(scroll);
    }
  }, []);

  const services = [
    "MARKETING",
    "WEBSITE DESIGN",
    "BRANDING",
    "WEBSITE DEVELOPMENT",
    "MOBILE APP DEVELOPMENT",
    "DIGITAL ESTATE",
  ];

  return (
    <div className="w-full xl:w-[1524px] mx-auto bg-white pt-3 sm:pt-4 md:pt-5 px-3 sm:px-4 md:px-5">
      {/* Main Container */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Sub Container - Hero Row */}
        <div className="flex flex-col xl:flex-row gap-3">
          {/* Left Content Container */}
          <div
            className="min-h-[350px] sm:min-h-[380px] md:min-h-[420px] xl:h-[450px] flex-1 bg-[#EFEFEF] rounded-[16px] sm:rounded-[20px] relative flex flex-col justify-center items-center p-6 sm:p-8 md:p-12 xl:p-0 pb-20 sm:pb-24 md:pb-28"
            style={{ paddingTop: "40px" }}
          >
            {/* Sub Container - Content */}
            <div className="flex flex-col justify-center items-start gap-1 sm:gap-2 w-full xl:w-[880px] xl:px-[60px]">
              {/* Desktop Layout: First Heading Row with button */}
              <div className="hidden lg:flex items-center gap-[30px] w-full">
                <h1
                  className={`font-roboto-flex font-semibold text-5xl uppercase text-[#1F1F1F] transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  DIGITAL SOLUTIONS
                </h1>

                {/* Button with ring effect */}
                <div className="relative flex items-center justify-center">
                  <svg
                    className={`absolute w-[80px] h-[80px] transition-all duration-500 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                    viewBox="0 0 62 62"
                  >
                    <circle
                      cx="31"
                      cy="31"
                      r="29"
                      fill="none"
                      stroke="#703BF7"
                      strokeWidth="1.5"
                      strokeDasharray="140 50"
                      strokeLinecap="round"
                      transform="rotate(40 30 30)"
                    />
                  </svg>
                  <button
                    className={`relative w-[44px] h-[44px] bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                    </svg>
                  </button>
                </div>

                {/* START A PROJECT Text - Desktop */}
                <span
                  className={`font-roboto-flex font-medium text-[24px] uppercase text-primary transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  START A PROJECT
                </span>
              </div>

              {/* Mobile Layout: Headings first, then START A PROJECT */}
              <div className="flex lg:hidden flex-col items-start gap-2 w-full">
                {/* DIGITAL SOLUTIONS */}
                <h1
                  className={`font-roboto-flex font-semibold text-3xl md:text-4xl uppercase text-[#1F1F1F] transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  DIGITAL SOLUTIONS
                </h1>
                
                {/* THAT DRIVE SUCCESS */}
                <h1
                  className={`font-roboto-flex font-semibold text-3xl md:text-4xl uppercase text-[#1F1F1F] transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  THAT DRIVE SUCCESS
                </h1>

                {/* START A PROJECT section - Mobile */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="relative flex items-center justify-center">
                    <svg
                      className={`absolute w-[55px] h-[55px] transition-all duration-500 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{ transitionDelay: "300ms" }}
                      viewBox="0 0 62 62"
                    >
                      <circle
                        cx="31"
                        cy="31"
                        r="29"
                        fill="none"
                        stroke="#703BF7"
                        strokeWidth="1.5"
                        strokeDasharray="140 50"
                        strokeLinecap="round"
                        transform="rotate(40 30 30)"
                      />
                    </svg>
                    <button
                      className={`relative w-[32px] h-[32px] bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                      style={{ transitionDelay: "300ms" }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                      </svg>
                    </button>
                  </div>
                  <span
                    className={`font-roboto-flex font-medium text-[16px] uppercase text-primary transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    START A PROJECT
                  </span>
                </div>
              </div>

              {/* Second Heading Row - Desktop only */}
              <div className="hidden lg:flex items-center w-full">
                <h1
                  className={`font-roboto-flex font-semibold text-5xl leading-[150%] uppercase text-[#1F1F1F] transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  THAT DRIVE SUCCESS
                </h1>
              </div>

              {/* Paragraph */}
              <div className="w-full mt-1">
                <p
                  className={`font-roboto-flex font-normal text-[14px] lg:text-[18px] leading-[150%] text-[#0F0F0F] transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  At NexGen, we believe in the transformative power of digital
                  solutions. Our team of experts is dedicated to helping
                  businesses like yours thrive in the fast-paced digital
                  landscape.
                </p>
              </div>
            </div>

            {/* Bottom Scrolling Services Bar */}
            <div className="absolute left-3 right-3 lg:left-5 lg:right-5 bottom-3 lg:bottom-5 bg-white rounded-[12px] h-[50px] lg:h-[70px] flex items-center justify-center overflow-hidden">
              {/* Scrolling Content */}
              <div
                ref={scrollRef}
                className="flex items-center gap-3 lg:gap-4 overflow-hidden whitespace-nowrap"
                style={{ scrollBehavior: "auto" }}
              >
                {/* First set */}
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 lg:gap-5">
                    <span className="font-roboto-mono font-normal text-[12px] lg:text-[20px] leading-[150%] uppercase text-[#0F0F0F] hover:text-primary transition-colors cursor-pointer">
                      {service}
                    </span>
                    <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-primary flex-shrink-0"></div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {services.map((service, index) => (
                  <div key={`dup-${index}`} className="flex items-center gap-3 lg:gap-5">
                    <span className="font-roboto-mono font-normal text-[12px] lg:text-[20px] leading-[150%] uppercase text-[#0F0F0F] hover:text-primary transition-colors cursor-pointer">
                      {service}
                    </span>
                    <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-primary flex-shrink-0"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Card - Hidden on mobile */}
          <div
            className={`hidden lg:flex w-[550px] flex-col rounded-[14px] overflow-hidden transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ height: "592px", transitionDelay: "300ms" }}
          >
            {/* Image Container */}
            <div className="relative h-[350px] bg-[#1a1a2e] overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a]"></div>

              {/* Brown/Red circle decoration */}
              <div
                className="absolute w-[170px] h-[170px] bg-white rounded-full"
                style={{ right: "-30px", top: "-20px" }}
              ></div>

              {/* Purple button with outer ring - top right */}
              <div
                className="absolute z-20"
                style={{ right: "8px", top: "8px" }}
              >
                {/* Half outer border ring */}
                <svg
                  className="absolute w-[115px] h-[115px]"
                  style={{ left: "-13px", top: "-12px" }}
                  viewBox="0 0 110 110"
                >
                  <circle
                    cx="55"
                    cy="55"
                    r="52"
                    fill="none"
                    stroke="#703BF7"
                    strokeWidth="2"
                    strokeDasharray="163 163"
                    strokeLinecap="round"
                    transform="rotate(50 53 53)"
                  />
                </svg>

                {/* Main button */}
                <button className="relative w-[88px] h-[88px] bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M18 42L42 18M42 18H18M42 18V42"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Dashboard Image */}
              <img 
                src={DashboardImage} 
                alt="Dashboard Preview" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-[20px]  mt-[-140px] flex-1 flex flex-col justify-center gap-1">
              <h3 className="font-roboto-flex font-medium text-[24px]  uppercase text-[#1F1F1F]">
                ESTATEIN REAL ESTATE
              </h3>
              <p className="font-roboto-flex font-normal text-[18px] text-[#0F0F0F]">
                Web Development.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full lg:w-[1480px] border-2 border-[#EFEFEF] rounded-[20px] p-4 lg:p-6 mt-0 lg:mt-[-140px] flex flex-wrap lg:flex-nowrap justify-center items-center gap-3 lg:gap-4">
          {/* CLIENTS */}
          <div
            className={`w-[calc(50%-6px)] lg:w-auto lg:flex-1 bg-[#EFEFEF] rounded-[14px] p-[15px_10px] lg:p-[10px_10px] flex flex-col items-center gap-2 lg:gap-5 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="font-roboto-mono font-medium text-[12px] lg:text-base leading-[150%] uppercase text-[#0F0F0F] text-center">
              CLIENTS
            </span>
            <span className="font-roboto-flex font-semibold text-2xl lg:text-4xl leading-[150%] uppercase text-primary text-center">
              200+
            </span>
          </div>

          {/* PROJECTS */}
          <div
            className={`w-[calc(50%-6px)] lg:w-auto lg:flex-1 bg-[#EFEFEF] rounded-[14px] p-[15px_10px] lg:p-[10px_10px] flex flex-col items-center gap-2 lg:gap-5 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="font-roboto-mono font-medium text-[12px] lg:text-base leading-[150%] uppercase text-[#0F0F0F] text-center">
              PROJECTS
            </span>
            <span className="font-roboto-flex font-semibold text-2xl lg:text-4xl leading-[150%] uppercase text-primary text-center">
              280+
            </span>
          </div>

          {/* HAPPY CLIENTS */}
          <div
            className={`w-[calc(50%-6px)] lg:w-auto lg:flex-1 bg-[#EFEFEF] rounded-[14px] p-[15px_10px] lg:p-[10px_10px] flex flex-col items-center gap-2 lg:gap-5 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="font-roboto-mono font-medium text-[12px] lg:text-base leading-[150%] uppercase text-[#0F0F0F] text-center">
              HAPPY CLIENTS
            </span>
            <span className="font-roboto-flex font-semibold text-2xl lg:text-4xl leading-[150%] uppercase text-primary text-center">
              100%
            </span>
          </div>

          {/* FOLLOWER */}
          <div
            className={`w-[calc(50%-6px)] lg:w-auto lg:flex-1 bg-[#EFEFEF] rounded-[14px] p-[15px_10px] lg:p-[10px_10px] flex flex-col items-center gap-2 lg:gap-5 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="font-roboto-mono font-medium text-[12px] lg:text-base leading-[150%] uppercase text-[#0F0F0F] text-center">
              FOLLOWER
            </span>
            <span className="font-roboto-flex font-semibold text-2xl lg:text-4xl leading-[150%] uppercase text-primary text-center">
              420K
            </span>
          </div>

          {/* YEARS OF EXPERIENCE */}
          <div
            className={`w-full lg:w-auto lg:flex-1 bg-[#EFEFEF] rounded-[14px] p-[15px_10px] lg:p-[10px_10px] flex flex-col items-center gap-2 lg:gap-5 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <span className="font-roboto-mono font-medium text-[12px] lg:text-base leading-[150%] uppercase text-[#0F0F0F] text-center">
              Years Of Experience
            </span>
            <span className="font-roboto-flex font-semibold text-2xl lg:text-4xl leading-[150%] uppercase text-primary text-center">
              10+
            </span>
          </div>

          {/* KNOW MORE Button */}
          <div
            className={`w-full lg:w-auto lg:flex-1 bg-[#EFEFEF] rounded-[14px] p-[15px_20px] lg:p-[30px_20px] flex justify-center items-center gap-[10px] transition-all duration-500 hover:bg-[#E5E5E5] cursor-pointer ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="w-[48px] h-[48px] lg:w-[68px] lg:h-[68px] bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <svg width="20" height="20" className="lg:w-7 lg:h-7" viewBox="0 0 28 28" fill="none">
                <path
                  d="M8 20L20 8M20 8H8M20 8V20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-roboto-mono font-medium text-[14px] lg:text-[20px] leading-[150%] uppercase text-[#0F0F0F]">
              KNOW MORE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
