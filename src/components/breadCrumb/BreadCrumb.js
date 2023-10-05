import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function CustomBreadCrumb() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/");
  }
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);
  console.log(pathname);
  const breadcrumbs = [
    ,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Product
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Shoes
    </Link>,
  ];

  return (
    <Box sx={{ width: "80%", p: 2 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="/"
          onClick={handleClick}
        >
          HOME
        </Link>
        {pathname.map((path, index) => {
          return (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={"/"}
              onClick={() => {
                navigate(path);
              }}
            >
              {path.toUpperCase()}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
