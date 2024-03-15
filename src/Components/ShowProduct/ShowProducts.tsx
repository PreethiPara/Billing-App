import { Box, Stack } from "@mui/material";
import { showProductProps } from "../../Constants/branch";
import { useEffect, useState } from "react";
import { Image } from "@mui/icons-material";

export default function ShowProducts(props: showProductProps) {
    const [listOfItems, setlistOfItems] = useState<string[]>([]);
    useEffect(() => {
        setlistOfItems({
            ...listOfItems,
            ...props.productAdded
        })
    }, [props.productAdded])

    return (<Box>
        <Stack>
            {listOfItems.map((value, index,) => {
                return (
                    <Box>
                        <Image />
                        <p></p>
                    </Box>
                )
            })}
        </Stack>
    </Box>)
}