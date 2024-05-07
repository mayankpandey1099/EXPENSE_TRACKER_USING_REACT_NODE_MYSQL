import React from "react";

const ContactUs = () => {
    const linkStyle = {
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif", // Change the font family as per your preference
    };
  return (
    <div className="container mx-auto px-8 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4" style={linkStyle}>
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2x1 font-semibold mb-2">Our Address</h2>
          <p>123 Mayank Street</p>
          <p>Vice City</p>
        </div>
        <div>
          <h2 className="text-2x1 font-semibold mb-2">Contact Information</h2>
          <p>Email: mayank@gmail.com</p>
          <p>Phone: +91 134 567 890</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2" style={linkStyle}>
          Send us a message
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2 text-xl"
              style={linkStyle}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-gray-300 border w-full p-2 text-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2 text-xl"
              style={linkStyle}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-gray-300 border w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2 text-xl"
              style={linkStyle}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="border-gray-300 border w-full p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={linkStyle}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
