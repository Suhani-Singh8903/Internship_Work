import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`p-6 shadow-xl rounded-3xl bg-gradient-to-b from-white to-gray-100 border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

export { Card, CardContent };
