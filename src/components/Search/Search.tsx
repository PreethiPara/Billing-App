import { Box, IconButton, TextField } from "@mui/material";
import React, { FormEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";
import { searchProps } from "../../constants/helper/searchProps";
export default function Search(props:searchProps){
    const [searchWord,setSearchWord]=React.useState<string>("");
    const handleSearchChange=(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        console.log(event.target.value);
        setSearchWord(event.target.value);
    }
    function handleSearchClick(event: React.FormEvent){
        event.preventDefault();
        console.log("clicked-In search");
        console.log(searchWord);
        props.handleSearch(searchWord);
    }
    return(
        <Box className="w-full">
            <TextField
                id="search-bar"
                className="text bg-white rounded"
                label="Search for Product"
                variant="outlined"
                onChange={(event)=>handleSearchChange(event)}
                placeholder="Search for Product"
                fullWidth
                inputProps={{ style: { fontSize: 25 } }}
                InputLabelProps={{ style: { fontSize: 20, alignContent: 'center'} }}
            />
            <IconButton className="w-10" onClick={handleSearchClick} type="submit" aria-label="search">
                <SearchIcon style={{fill:"blue"}} />
            </IconButton>
            
        </Box>
    )
}