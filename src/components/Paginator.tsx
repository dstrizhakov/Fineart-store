import React, {FC} from 'react';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PaginatorPropsType {
    spacing: number
    count: number
}

const Paginator: FC<PaginatorPropsType> = ({ spacing, count }) => {
    return (
        <Stack spacing={spacing}>
            <Pagination
                count={count}
                renderItem={(item) => (
                    <PaginationItem
                        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
            />
        </Stack>
    );
};

export default Paginator;