import React from "react";
import { Box } from "@mui/material";
import DropDown from "../../Utils/DropDown/DropDown";
import {sortList } from '../../Constants/sort';
function AddProduct(){
    return(
        <Box>
            //add product modal
            //search-functionality
            <DropDown listOfItems={sortList} Label='Branch'/>
        </Box>
    )
}
export default AddProduct;

