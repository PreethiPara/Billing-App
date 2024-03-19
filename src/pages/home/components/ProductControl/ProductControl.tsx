import { Box } from "@mui/material";
import ProductModalFromButton from "../../../../components/ProductModalFromButton/ProductModalFromButton";
export default function ProductControl() {
    return (
        <Box className="m-20 flex flex-start">
            <Box>
                <ProductModalFromButton buttonText="Add product" mainHeading="Add Product" listOfModalItems={["Name", "Price"]} />
            </Box>
            <Box>

            </Box>
        </Box>
    )
}