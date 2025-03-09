"use client";

import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    };

    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={handleClick}
        >
            Back
        </Button>
    );
};

export default BackButton;
