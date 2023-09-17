import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
export const AutoRedirect = ({ children }) => {
  const location = useLocation({ children });
  const [lastLocation, setLastLocation] = useState("");
  useEffect(() => {
    if (location.pathname === "/signin") {
      return;
    }
    setLastLocation(location.pathname);
  }, [location]);

  const childrenWithLastLocation = React.Children.map(children, (child) => {
    return React.cloneElement(child, { lastLocation });
  });
  return childrenWithLastLocation;
};
