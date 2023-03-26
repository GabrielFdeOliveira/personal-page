import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Jest" },
  { skill: "Node.js" },
  { skill: "TypeScript (learning)" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Agile" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "RESTful API" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 my-12 md:pt-16 md:pb-48">
        <h1 className="text-4xl font-bold text-center">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="mb-6 text-2xl font-bold text-center md:text-left">
              Get to know me!
            </h1>
            <p>
              After six years working in the automotive sector, I have decided
              to change careers, and pursue a dream I have had since my teenage,
              so after achieving my mortgage I decided it was time.
            </p>
            <br />
            <p>
              {" "}
              I have a beautiful relationship with{" "}
              <span className="font-bold text-teal-500">{"feedback"}</span>, it
              is the tool I used to develop my English skills, and if it helped
              me with that I am sure it will continue to serve me well in the
              tech industry!
            </p>
            <br />
            <p>
              I have a diverse range of hobbies and interests that keep me busy.
              Including activities like reading, gaming, working out, and
              exploring the countryside, as well as bird watching and coding. I
              am constantly on the lookout for new experiences and opportunities
              to learn and grow, and I find great joy in engaging myself in
              these activities.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-6 text-2xl font-bold">My Skills</h1>
            <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="px-4 py-2 mt-2 mr-2 font-semibold text-gray-500 bg-gray-200 rounded"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={400}
              height={450}
              className="hidden md:block md:relative md:bottom-4 md:left-1 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
