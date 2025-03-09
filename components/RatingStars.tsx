"use client";

import { RatingStarsProps } from '@/types/componentTypes';
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({ rating }: RatingStarsProps) => {
    const ratingInStars = rating / 2;
    const fullStars = Math.floor(ratingInStars);
    const hasHalfStar = ratingInStars - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex justify-center text-yellow-400">
            {Array.from({ length: fullStars }).map((_, i) => (
                <StarIcon key={`full-${i}`} />
            ))}
            {hasHalfStar && <StarHalfIcon key="half" />}
            {Array.from({ length: emptyStars }).map((_, i) => (
                <StarBorderIcon key={`empty-${i}`} />
            ))}
        </div>
    );
};

export default RatingStars;
