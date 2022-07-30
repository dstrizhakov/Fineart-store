import React, {FC} from 'react';
import InputLabel from "@mui/material/InputLabel";
import {FormControl, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

interface LimitterPropsType {
    limit: string
    selectChange: (event: SelectChangeEvent) => void
}

const Limitter:FC<LimitterPropsType> = ({limit, selectChange}) => {
    return (
        <FormControl sx={{m: 1, minWidth: 120}} size="small">
            <InputLabel id="demo-select-small">Per page</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={limit}
                label="Per page"
                onChange = {selectChange}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Limitter;