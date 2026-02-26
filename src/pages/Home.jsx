import { Link } from "react-router-dom";
import profileImage from "../assets/pic.jpg";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-b from-white to-blue-50">
      <img
        src={profileImage}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-gray-300"
      />

      <h1 className="text-4xl font-bold mb-4">
        Hey, I'm Kavitha 👋
      </h1>

      <p className="text-gray-700 max-w-xl mb-8">
        A passionate Full Stack Developer building responsive and user-friendly websites with React, Node.js, and MongoDB.
      </p>

      <div className="flex gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          View Projects →
        </Link>

       <a
  href={`${import.meta.env.BASE_URL}kavitha.pdf`}
  download
  className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition"
>
  Download Resume
</a>
      </div>
    </section>
  );
}

export default Home;