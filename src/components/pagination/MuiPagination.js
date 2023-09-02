import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";

export default function BasicPagination() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
      <Stack spacing={3}>
        <Pagination
          count={5}
          color="primary"
          defaultPage={2}
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
}
