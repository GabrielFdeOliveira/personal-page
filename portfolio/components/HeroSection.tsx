"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-16 my-10 text-center animate-fadeIn animation-delay-2 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image src="/headshot.png" alt="" width={550} height={550} />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">
            Hi, I&#39;m Gabriel!
          </h1>
          <p className="mt-4 mb-6 text-lg md:text-2xl">
            A{" "}
            <span className="font-semibold text-teal-600">
              Junior Software Developer{" "}
            </span>
            based in Wantage, UK. Currently working to expand my exposure to
            different technologies through small personal projects.
          </p>
          <Link
            to="projects"
            className="px-6 py-3 mt-3 font-semibold bg-teal-600 rounded shadow cursor-pointer text-neutral-100 hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
