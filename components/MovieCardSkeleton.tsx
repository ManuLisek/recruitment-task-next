"use client";

import { Box, Card, CardActionArea, CardContent, Skeleton } from "@mui/material";

const MovieCardSkeleton = () => {
  return (
    <Box component="li" sx={{ width: "226px" }}>
      <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <CardActionArea sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Box sx={{ position: "relative", width: "100%", height: "300px" }}>
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Box>
          <CardContent
            sx={{
              textAlign: "center",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default MovieCardSkeleton;
