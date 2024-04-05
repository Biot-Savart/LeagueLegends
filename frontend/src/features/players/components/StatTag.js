import React from "react";

const StatTag = ({ icon, label, value }) => {
  return (
    <span className="inline-flex items-center bg-blue-600 text-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
      {icon}
      {label}: {value}
    </span>
  );
};

export default StatTag;
