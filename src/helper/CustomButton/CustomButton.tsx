
import { theme } from "../../constants/Theme/theme";
import { Button } from "@mui/material";
import {customButtonProps} from "../../constants/helper/customButtonProps";

function CustomButton(props: customButtonProps) {
    return(
        <Button color="primary" sx={{
            fontSize:'1.3rem',
            padding:'0.5rem 1rem 0.5rem 1rem',
            width:'45%',
            backgroundColor: theme.palette.primary.dark,
            color: '#ffff',
            ':hover': {
              backgroundColor: theme.palette.primary.main,
              color: '#ffff'
        }}}  
        size="large" onClick={()=>{props.handleClick()}}>{props.buttonText}</Button>
    )
    
}

export default CustomButton;