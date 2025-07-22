// ✅ IMPORT ALL YOUR PNG LOGOS
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import javascriptLogo from "../assets/logos/javascript.png";
import reactLogo from "../assets/logos/react.png";
import tailwindcssLogo from "../assets/logos/tailwindcss.png";
import nodejsLogo from "../assets/logos/nodejs.png";
import expressjsLogo from "../assets/logos/expressjs.png";
import mongodbLogo from "../assets/logos/mongodb.png";
import firebaseLogo from "../assets/logos/firebase.png";
import gitLogo from "../assets/logos/git.png";
import githubLogo from "../assets/logos/github.png";
import vscodeLogo from "../assets/logos/vscode.png";

function About() {
  // ✅ DEFINE SKILLS ARRAY
  const skills = [
    { name: "HTML", image: htmlLogo },
    { name: "CSS", image: cssLogo },
    { name: "JavaScript", image: javascriptLogo },
    { name: "React", image: reactLogo },
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
    <section className="px-4 py-16 max-w-5xl mx-auto text-center bg-blue-50">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">About Me</h2>

      <p className="mb-8 text-gray-700 max-w-3xl mx-auto">
        I'm Kavitha, a Full Stack Developer passionate about building web apps that solve real-world problems.
        I specialize in modern web technologies and love transforming creative ideas into real products.
      </p>

      <h3 className="text-3xl font-bold mb-8 text-gray-800">Skills</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.image}
              alt={`${skill.name} logo`}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-gray-700 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
