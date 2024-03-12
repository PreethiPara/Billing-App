import React from "react";
import FormControl from '@mui/material/FormControl';
import {customFormProps} from "../../Constants/branch"
import { Input, InputLabel, Typography, Stack, TextField, Button, Box } from "@mui/material";
import { FormHelperText } from "@mui/material";
import './CustomForm.scss'
function CustomForm(props:customFormProps){
    return(
        <Box className="form-main" component={"form"}>
            <FormControl className="form-control-main">
                <Typography variant="h3" className="form-header">{props.header}</Typography>
                {props.upperElement}
                {
                    (props.listOfEntries|| []).map((item)=>(
                        <Stack className="form-field-container">
                            <TextField
                                sx={{margin:"15px 0px 15px 0px", width:"100%"}}
                                className="form-field"
                                required
                                id="outlined-required"
                                label={item}
                            />
                        </Stack>
                    ))
                }
                {
                    props.lowerElement
                }
                {
                    props.buttonContent==="Submit" && (
                        <Button variant="contained" type="submit" className="form-submit-button">{props.buttonContent}</Button>
                    )
                }
            </FormControl>
        </Box>

    )
}
export default CustomForm;