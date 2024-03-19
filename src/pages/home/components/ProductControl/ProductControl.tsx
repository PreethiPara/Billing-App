import { Box } from "@mui/material";
import ProductModalFromButton from "../../../../components/ProductModalFromButton/ProductModalFromButton";
export default function ProductControl() {
    return (
        <Box className=" p-5 flex flex-start bg-slate-400">
            <Box>
                <ProductModalFromButton buttonText="Add product" mainHeading="Add Product" listOfModalItems={["Name", "Price"]} />
            </Box>
            <Box>

            </Box>
        </Box>
    )
}