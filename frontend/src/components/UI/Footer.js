import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          League Legends © {new Date().getFullYear()}
          {/* Add more footer content here as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
