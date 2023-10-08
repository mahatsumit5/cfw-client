import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Divider } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function CustomBreadCrumb() {
  const navigate = useNavigate();
  const { slug, productSlug } = useParams();
  console.log(productSlug, slug);
  function handleClick(event) {
    event.preventDefault();
    navigate("/");
  }
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  return (
    <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
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
              href={`/${path}`}
              onClick={() => {
                navigate(path);
              }}
            >
              {path.toUpperCase()}
            </Link>
          );
        })}
      </Breadcrumbs>
      <Divider />
    </Box>
  );
}
