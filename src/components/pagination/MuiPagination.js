import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";

export default function BasicPagination() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </Box>
  );
}
