import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between items-center">
        <div>© 2025 Stockwins | All Rights Reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-600">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
