import * as React from 'react';
import { useRef } from 'react';
import {Box, Button, Input, InputBase, TextField} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, IconButton, InputLabel, MenuItem} from '@mui/material';
import "./AddProduct.scss";
import DropDown from '../../Utils/DropDown/DropDown';
import { sortList } from '../../Constants/sort';
import BasicModal from '../ProductModal/BasicModal';
import CustomForm from '../CustomForm/CustomForm';
import { productFormList } from '../../Constants/branch';
import { AddAPhoto } from '@mui/icons-material';
import { theme } from '../../Constants/theme';
import './AddProduct.scss'


function AddPicture() {
    const customInput=useRef<null | HTMLInputElement>(null);
    const [viewImage,setViewImage]=React.useState(false);
    const [file,setFile]=React.useState<File>();
    function getFile(event:React.BaseSyntheticEvent){
        console.log(event.target.files[0])
        setFile(event.target.files[0])
    }
    function handleClick(){
        if(customInput.current!=null){
            customInput.current.click()
        }
    }
    function handleViewImage(){
        setViewImage((prev)=>!prev)
    }
    return(<>
       {
        file?(
            <div className='after-upload'>
                <BasicModal onClose={handleViewImage} element={<CustomForm buttonContent={"Close"} header="View Image" listOfEntries={[]} upperElement={<img style={{width:"50%"}} src={URL.createObjectURL(file)}/>} lowerElement={<Button onClick={hanleViewImage} variant="contained">Close</Button>}/>} header="View Image"/>
                <IconButton  className='reupload-picture-icon-button' style={{backgroundColor:theme.palette.secondary.light}} onClick={handleClick}>
                {
                    (<AddAPhoto className='add-picture-icon'/>)
                }
                </IconButton>
            </div>
        ):
        (
        <IconButton  className='add-picture-icon-button' style={{backgroundColor:theme.palette.secondary.light}} onClick={handleClick}>
        {
            (<AddAPhoto className='add-picture-icon'/>)
        }
        </IconButton>
        )
       }
        
       <p>{file?.name}</p>
        <input className="disabled-input" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={getFile} ref={customInput}/>
        </>
    )
}
function AddProduct(){
    return(<>
        <Box className="add-search-sort">
            <BasicModal element={<CustomForm buttonContent={"Submit"} header="Add Product" listOfEntries={productFormList} upperElement={<AddPicture/>} lowerElement={<></>} header="Add product" />
            { <FormControl className='search-bar'>
                <FormLabel className="search-product-label">Search Product</FormLabel>
                <Autocomplete
                placeholder="Type to Search"
                options={topFilms}
                className='auto-complete'
                />
            </FormControl> }
            <DropDown listOfItems={sortList} Label='sort'></DropDown>
        </Box>
        </>
    )
}
export default AddProduct;