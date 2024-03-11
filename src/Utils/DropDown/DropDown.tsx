import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { branchList, DropDownProps } from "../../Constants/branch";
import { useState } from "react";


function DropDown(props:DropDownProps) {
    const [item, setItem] = useState(props.listOfItems.at(0))
    const handleChange = (event: SelectChangeEvent) => {
        setItem(event.target.value as string);
    };
    return(
        <Box className="dropdown-main" minWidth={"40%"}>
              <FormControl fullWidth className="dropdown-form-control">
                  <InputLabel id="demo-simple-select-label" className="dropdown-label">{props.Label}</InputLabel>
                  <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={item}
                  label={props.Label}
                  onChange={handleChange}
                  >
                {props.listOfItems.map((item:string) => (
                        <MenuItem className="dropdown-item" key={item} value={item}>
                            {item}
                        </MenuItem>
                ))}
                  </Select>
              </FormControl>
            </Box>
    )
}
export default DropDown;