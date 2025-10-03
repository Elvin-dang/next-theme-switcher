import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t py-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} next-theme-switcher — by{" "}
        <a
          href="https://elvindang.info/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-700 hover:underline"
        >
          Elvin Dang
        </a>
      </p>
    </footer>
  );
};

export default Footer;
