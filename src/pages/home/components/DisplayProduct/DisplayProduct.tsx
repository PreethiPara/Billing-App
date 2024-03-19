import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { autocompleteClasses, Container, Typography } from '@mui/material';
import productData from '../../helper/productData';
import "./DisplayProduct.scss";
export default function DisplayProduct() {
  return (
    <Box className="flex justify-center">
        <Box className=" w-10/12 p-10 mt-10 mb-10">
            <Box
                sx={{
                    '& > :not(style)': {
                    m: 1,
                    borderRadius:3,
                    height: 256,
                    },
                }}
                className="product-paper"
            >
                
                    {
                        productData.map((item)=>(
                            
                            <Paper className="paper" elevation={8}>
                               
                               <Typography style={{"marginBottom":"20px"}} variant="h4" fontWeight={'600'}>{item.name}</Typography>
                               
                                <Typography style={{"marginBottom":"10px"}} variant="h6" className="italic" fontWeight={'400'}>{item.price} $</Typography>
                            
                               <Typography  style={{"marginBottom":"10px"}} variant='h5' className="italic">{item.category}</Typography>
                               <Typography variant='h6'>{`Quantity: ${item.quantity}`}</Typography>
                               
                            </Paper>
                        ))
                    }
                
            </Box>
        </Box>
    </Box>
  );
}
