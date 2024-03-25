import { Box } from "@mui/material"
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material"
import "./Overview.scss";
export default function OverView(){
    return(
        <div className="overview">
            <Paper elevation={3} className="bg-pink-100 p-3 ml-10 mt-10"> 
                <Typography  fontWeight={'500'} variant="h4">Overview</Typography>
                
            </Paper>
            <Box>

            </Box>
            
        </div>
    )
} 