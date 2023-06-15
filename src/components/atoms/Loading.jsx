import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box className="center" sx={{ display: "flex" }}>
      <CircularProgress color="inherit" size={100} />
    </Box>
  );
}
