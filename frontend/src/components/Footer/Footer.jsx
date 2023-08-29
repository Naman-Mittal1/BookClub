import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full absolute bottom-0">
      <div className="py-6 px-3 bg-gray-900 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} BookClub Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
