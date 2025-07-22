function Contact() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-6">Contact Me</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Connect with me:</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/kavitha-udhayakumar08/" target="_blank" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/kavitha0802" target="_blank" className="text-gray-800 hover:underline">
            GitHub
          </a>
        </div>
      </div>

    </div>
  );
}

export default Contact;
