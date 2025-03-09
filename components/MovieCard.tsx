"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import RatingStars from "@/components/RatingStars";
import { MovieCardProps } from "@/types/componentTypes";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

const MovieCard = ({ movie }: MovieCardProps) => {
  const hasImage = !movie.poster.src.includes("w300null");

  return (
    <Box component="li" sx={{ flexGrow: 1, maxWidth: "226px" }}>
      <Link href={`/movie/${movie.key}`} passHref style={{ width: "100%", textDecoration: "none" }}>
        <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <CardActionArea sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", flexGrow: 1 }}>
            {hasImage ? (
              <Box sx={{ position: "relative", width: "100%" }}>
                <Image
                  src={movie.poster.src}
                  alt={movie.poster.alt}
                  width={226}
                  height={339}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  width: "226px",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "grey.300"
                }}
              >
                <BrokenImageIcon sx={{ fontSize: 64, color: "grey.500" }} />
              </Box>
            )}
            <CardContent
              sx={{
                textAlign: "center",
                height: "120px",
                minHeight: "120px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start"
              }}
            >
              <RatingStars rating={movie.voteAverage} />
              <Typography variant="subtitle1" component="div">
                {movie.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  );
};

export default MovieCard;
