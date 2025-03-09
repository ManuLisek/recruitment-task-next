"use client";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4, height: "100vh" }}>
            <CircularProgress />
        </Box>
    );
}
