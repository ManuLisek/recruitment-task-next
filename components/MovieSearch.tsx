"use client";

import { Box, TextField, Button } from "@mui/material";
import { MovieSearchProps } from "@/types/componentTypes";

const MovieSearch = ({ searchInput, setSearchInput, handleSearchSubmit }: MovieSearchProps) => {
    return (
        <Box component="form" onSubmit={handleSearchSubmit} className="mb-4 flex gap-2">
            <TextField
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search movies..."
                variant="outlined"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>
        </Box>
    );
};

export default MovieSearch;
