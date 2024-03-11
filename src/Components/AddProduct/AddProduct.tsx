import * as React from 'react';
import {Box} from '@mui/material';
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
    return(<>
        <IconButton className='add-picture-icon-button' style={{backgroundColor:theme.palette.secondary.light}}>
            <AddAPhoto className='add-picture-icon'/>
        </IconButton>
    </>)
}
function AddProduct(){
    return(<>
        <Box className="add-search-sort">
                <BasicModal element={<CustomForm header='Add Product' listOfEntries={productFormList} upperElement={<AddPicture/>} lowerElement={<></>}/>}/>
                {/* <FormControl className='search-bar'>
                    <FormLabel className="search-product-label">Search Product</FormLabel>
                    <Autocomplete
                    placeholder="Type to Search"
                    options={topFilms}
                    className='auto-complete'
                    />
                </FormControl> */}
                <DropDown listOfItems={sortList} Label='sort'/>
            </Box>
        </>
    )
}
export default AddProduct;