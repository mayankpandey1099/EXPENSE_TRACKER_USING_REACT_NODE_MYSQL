import React from "react";

const ContactUs = () => {
    const linkStyle = {
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif", // Change the font family as per your preference
    };
  return (
    <div className="flex flex-wrap justify-center container m-4 py-8 max-h-full">
      <div style={{ width: "50%" }}>
        <h1 className="text-center text-4xl font-bold mb-6" style={linkStyle}>
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h2 className="text-2x1 font-bold mb-2 text-gray-900">
              Our Address
            </h2>
            <p className="font-semibold">123 Mayank Street</p>
            <p className="font-semibold">Vice City</p>
          </div>
          <div className="text-center">
            <h2 className="text-2x1 font-bold mb-2 text-gray-900">
              Contact Information
            </h2>
            <p className="font-semibold">Email: mayank@gmail.com</p>
            <p className="font-semibold">Phone: +91 134 567 890</p>
          </div>
        </div>
        <div className="mt-8">
          <h2
            className="text-xl font-semibold mb-2 text-center"
            style={linkStyle}
          >
            Send us a message
          </h2>
          <form className="flex flex-wrap justify-center">
            <div className="mb-4 w-full ml-28">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2 text-xl"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-black w-3/4 p-2 border-4 text-xl"
              />
            </div>
            <div className="mb-4 w-full ml-28">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2 text-xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-black w-3/4 border-4 p-2 text-xl"
              />
            </div>
            <div className="mb-4 w-full ml-28">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2 text-xl"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="border-black w-3/4 p-2 border-4 text-xl"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
