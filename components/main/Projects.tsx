import React from "react";
import ProjectCard from "../sub/ProjectCard";

interface Props {
  themed: string;
}

const Projects = ({ themed }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[20]"
      id="projects"
    >
      <h1
        className={`text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r ${
          themed === "light"
            ? "from-orange-500 to-yellow-300"
            : "from-purple-500 to-cyan-500"
        } py-20`}
      >
        My Projects
      </h1>
      <div className="gap-10">
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            themed={themed}
            link="https://ecommerce-k3a9.vercel.app/"
            src="/ecommerce.png"
            title="Hokusai Ecommerce"
            description="The e-commerce application  include modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities, and most importantly, the complete integration with Stripe so that you can cover real payments."
          />
          <ProjectCard
            themed={themed}
            link="https://divine-speakers.netlify.app/"
            src="/divspeak.png"
            title="Divine Speakers"
            description="A vast library developed with React Native and Firebase, featuring several books, theological sermons, personalities and events that marked the history of the church."
          />
          <ProjectCard
            themed={themed}
            link="https://portifoliodouglas.netlify.app/"
            src="/portfolio-game.png"
            title="Gamefield Portfolio"
            description="My personal portfolio, in a gamified form, developed in HTML, Javascript and CSS, relying only on gsap.js for the animations and Howeler.js for the audio part, challenging myself to use pure javascript for its development."
          />
          <ProjectCard
            themed={themed}
            link="https://litterae.netlify.app/"
            src="/litterae.png"
            title="Litterae"
            description="Litterae is a template for a free ebook reading application, with most of the features that Google Books has, but it aims to make a vast collection of public domain works available. It was used in the React Native project on the front and back node.js, mongoDB and AWS."
          />
        </div>
        <br />
        <br />
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            themed={themed}
            link="https://comparadorgenoma.netlify.app/"
            src="/genoma.png"
            title="Genome Comparator"
            description="Algorithm in Python that receives two chains of nitrogenous bases, assembles the nucleotides and generates a visual comparison between them. The algorithm uses matplot to generate the comparative graph, and inquirer for user interaction."
          />
          <ProjectCard
            themed={themed}
            link="https://portscanner.netlify.app/"
            src="/port-scan.png"
            title="Port Scanner"
            description="The app's minimalistic interface belies its intricate functionality. It begins by gathering network information, scanning IPs and ports within the subnet. It then alerts the user about IPs responding to requests or with open connections on specified ports. This is achieved using tools such as `react-native-network-info` for network data, `get-subnet-mask` for IP range calculation, `shift8-ip-func` for IP conversion, `ipaddr.js` for IPv6 and IPv4 calculations, and `react-native-tcp-socket` for making requests."
          />
          <ProjectCard
            themed={themed}
            link=""
            src="/ferias.png"
            title="Vacation Management System"
            description="Vacation management system developed in React CLI, using: Emotion, Material UI, Fullcalendar, Formik and Yup."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
