import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { setDisplayData } from "../../redux/displayDataSlice";

export default function BasicPagination({ data }) {
  const dispatch = useDispatch();
  const totalNumberOfCards = data?.length;
  const cardsToShowOnOnePage = 8;
  const numberOfRequiredPagination = Math.ceil(
    totalNumberOfCards / cardsToShowOnOnePage
  );
  const [pageNumber, setPageNumber] = React.useState(1);
  const lastIndex = pageNumber * cardsToShowOnOnePage;
  const firstIndex = lastIndex - cardsToShowOnOnePage;
  React.useEffect(() => {
    const x = data?.slice(firstIndex, lastIndex);
    dispatch(setDisplayData(x));
  }, [pageNumber]);
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
