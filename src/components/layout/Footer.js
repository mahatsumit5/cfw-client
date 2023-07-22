import React from "react";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer p-5 text-center d-flex ">
      &copy;Copyright all reserved to CFW {date}
    </div>
  );
};
