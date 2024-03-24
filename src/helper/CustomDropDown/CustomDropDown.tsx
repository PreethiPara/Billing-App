import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { customDropDown } from "../../constants/helper/customDropDown";
import NameWithIcon from "../NameWithIcon/NameWithIcon";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
function CustomDropDown(props: customDropDown) {
    const [state, setState] = React.useState('');
    
    const handleChange = (event: SelectChangeEvent) => {
        setState(event.target.value);
        if (event.target.value !== undefined)
            console.log(event);
            props.handleChangeInDropDown(event.target.value);
    };

    return (<Box sx={{ minWidth: 120, width: "100%" }}>
        <FormControl fullWidth>
            <InputLabel >
                
                {props.label}
            </InputLabel>
            <Select
                value={state}
                label={props.label}
                onChange={handleChange}
                placeholder={props.label}
                variant="outlined"
                style={{
                    backgroundColor:"white",
                    // fontSize:"25px",
                }}
                MenuProps={{
                    PaperProps: {
                      style: {
                      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                      width: 250
                      }
                  },
                    variant: "menu",
              }}
            >
                {
                    props.listOfDropDownEntries.map((value, itr) => {

                        return (< MenuItem value={value} children={< NameWithIcon icon={props.iconImageWithName.at(itr)} name={value} />} />)
                    })
                }

            </Select>
        </FormControl>
    </Box>)
}

export default CustomDropDown;