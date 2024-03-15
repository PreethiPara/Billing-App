
import { Box } from '@mui/material';
import "./AddProduct.scss";
import DropDown from '../../Utils/DropDown/DropDown';
import { sortList } from '../../Constants/sort';
import { productFormList } from '../../Constants/branch';
import './AddProduct.scss'
import AddProductModal from '../Modals/AddProductModal';
function AddProduct() {
    return (<>
        <Box className="add-search-sort">
            <AddProductModal
                buttonContent={"Submit"}
                header="Add Product"
                listOfEntries={productFormList}
            />
            {/* <FormControl className='search-bar'>
                    <FormLabel className="search-product-label">Search Product</FormLabel>
                    <Autocomplete
                    placeholder="Type to Search"
                    options={topFilms}
                    className='auto-complete'
                    />
                </FormControl> */}
            {/* This is where you had JSX structure error */}
            <DropDown listOfItems={sortList} Label='sort' />
        </Box>
    </>
    )
}
export default AddProduct;