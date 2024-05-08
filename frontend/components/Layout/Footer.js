

const Footer = () => {
    const linkStyle = {
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif", // Change the font family as per your preference
    };
  return (
    <div
      className="bg-gray-800 text-white py-2 text-center bottom-0 w-full"
      style={linkStyle}
    >
      <p className="text-xl font-bold" style={linkStyle}>
        &copy; 2024 The Generics
      </p>
      <p className="mt-2" style={linkStyle}>
        Contact us: contact@thegeneric.com
      </p>
      <p>Follow us on social media:</p>
      <div className="flex justify-center mt-2" style={linkStyle}>
        <a href="#" className="mr-4" style={linkStyle}>
          Facebook
        </a>
        <a href="#" className="mr-4" style={linkStyle}>
          Twitter
        </a>
        <a href="#" className="mr-4" style={linkStyle}>
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;