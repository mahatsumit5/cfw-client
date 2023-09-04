import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";

export default function BasicPagination({
  pageNumber,
  numberOfRequiredPagination,
  setPageNumber,
}) {
  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
      <Stack spacing={3}>
        <Pagination
          count={numberOfRequiredPagination}
          color="primary"
          defaultPage={pageNumber}
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
}
