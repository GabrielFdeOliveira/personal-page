import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "CineMate",
    description:
      "CineMate is a dynamic web application that empowers users to effortlessly search for and save movies to a personal list. With access to a vast film library, users can easily find all technical information about their favorite titles.",
    image: "/CineMate.png",
    github: "https://github.com/GabrielFdeOliveira/CineMate",
    link: "https://project-cinemate.netlify.app/",
  },
  {
    name: "User Management System",
    description:
      "The User Management System is a project that I developed to fulfill an assignment, which required building both the front-end and back-end of an application that facilitates user data management.",
    image: "/CRUD.png",
    github: "https://github.com/GabrielFdeOliveira/CRUD-Tech-Test",
    link: "https://gabriel-crud-app.netlify.app/",
  },
  {
    name: "Wallys Widgets",
    description:
      "Wally's Widgets presented a challenging task, which involved devising a solution to a complex CodeWars-style problem and then developing a frontend interface to interact with that solution.",
    image: "/wallys.png",
    github: "https://github.com/GabrielFdeOliveira/Wallys-Widgets",
    link: "https://wallys-widgets-nu.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-4xl font-bold text-center">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="shadow-xl rounded-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="transition-transform cursor-pointer hover:-translate-y-1"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="transition-transform cursor-pointer hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
