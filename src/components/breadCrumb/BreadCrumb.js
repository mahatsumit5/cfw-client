import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function CustomBreadCrumb() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/");
  }
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  return (
    <Container sx={{ p: 2 }}>
      <Breadcrumbs
        maxItems={3}
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
    </Container>
  );
}
