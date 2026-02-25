import cssLogo from "../assets/logos/CSS.png";
import javascriptLogo from "../assets/logos/JavaScript.png";
import reactLogo from "../assets/logos/React.png";
import tailwindcssLogo from "../assets/logos/tailwindcss.png";
import gitLogo from "../assets/logos/Git.png";
import githubLogo from "../assets/logos/Github.png";
import vscodeLogo from "../assets/logos/VsCode.png";
import firebaseLogo from "../assets/logos/Firebase.png";
import nodejsLogo from "../assets/logos/NodeJS.png";
import htmlLogo from "../assets/logos/html.png";
import mongodbLogo from "../assets/logos/MongoDB.png";
import expressjsLogo from "../assets/logos/expressjs.png";

function About() {

  const skills = [
    { name: "HTML", image: htmlLogo },
    { name: "CSS", image: cssLogo },
    { name: "JavaScript ", image: javascriptLogo },
    { name: "React.js", image: reactLogo },
    { name: "Tailwind CSS", image: tailwindcssLogo },
    { name: "Node.js", image: nodejsLogo },
    { name: "Express.js", image: expressjsLogo },
    { name: "MongoDB", image: mongodbLogo },
    { name: "Firebase", image: firebaseLogo },
    { name: "Git", image: gitLogo },
    { name: "GitHub", image: githubLogo },
    { name: "VS Code", image: vscodeLogo },
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto bg-blue-50">

      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        About Me
      </h2>

      <p className="mb-12 text-gray-700 max-w-4xl mx-auto text-center leading-relaxed text-lg">
        I am a MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js. I specialize in building responsive user interfaces and efficient backend systems with clean, maintainable code. I am currently seeking a Frontend or Full Stack Developer internship to apply my skills in a professional environment.</p>

      <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Technical Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.image}
              alt={`${skill.name} logo`}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-gray-700 font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default About;