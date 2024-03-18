import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomButton from '../../helper/CustomButton/CustomButton';
import { theme } from '../../constants/Theme/theme';
import { modalFromButtonProps } from '../../constants/helper/modalFromButtonProps';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import WineBarIcon from '@mui/icons-material/WineBar';
import Checkbox from '@mui/material/Checkbox';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import IcecreamIcon from '@mui/icons-material/Icecream';
import CakeIcon from '@mui/icons-material/Cake';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'30px',
  minWidth:'600px'
};

export default function ProductModalFromButton(props:modalFromButtonProps) {
  const [open, setOpen] = React.useState(false);
  const [clicked,setClicked]=React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  interface CountryType {
    category: string
    icon:React.ElementType
  }
  const countries: readonly CountryType[] = [
    { category:"Drinks" ,icon:WineBarIcon},
    {category:"Pizza",icon:LocalPizzaIcon},
    {category:"IceCreams",icon:IcecreamIcon},
    {category:"Cakes", icon:CakeIcon}
];
    function handleCheckBoxClick(){
        setClicked((prev)=>{
            console.log(!prev);
            return !prev;
        });
    }
  return (
    <div>
      <Button sx={{
            fontSize:'1.3rem',
            backgroundColor: theme.palette.primary.dark,
            color: '#ffff',
            ':hover': {
              backgroundColor: theme.palette.primary.main,
              color: '#ffff'
        }}}  
        onClick={handleOpen}>{props.buttonText}</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h3" component="h2" sx={{fontWeight:"500"}}>
            {props.mainHeading}
          </Typography>
          <Box className='flex flex-col w-4/5'>
            {
                props.listOfModalItems.map((item)=>{
                  return(
                      <TextField label={item} variant='outlined' required placeholder={item} sx={{margin:'1rem 0 1rem 0'}}  inputProps={{style: {fontSize: 25}}}
                      InputLabelProps={{style: {fontSize: 20}}}/>
                  )
              })
            }
            <Box className="flex">
                <Autocomplete
                  className='w-1/2'
                    id="country-select-demo"
                    sx={{ width: 300, margin:'1rem 0 1rem 0'}}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.category}
                    renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {option.icon && <option.icon />}
                        {option.category}
                    </Box>
                    )}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        required
                        label="Choose a Category"
                        InputLabelProps={{style: {fontSize: 20}}}
                        inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                    )}
                />
                <Box className="align flex ml-20 w-1/2">
                  <Checkbox onClick={handleCheckBoxClick} {...label} defaultChecked color="default" />
                  <TextField
                  label="Quantity"
                  variant="outlined"
                  className='flex justify-center'
                  required
                  type="number"
                  inputProps={{ min: "0", style: { textAlign: "center" } }} 
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  disabled={!clicked}
                />
                </Box>
                
            </Box>
            <Box className='flex justify-between w-1/3 mt-4 mb-2 min-w-200'>
              <CustomButton buttonText='Submit' handleClick={handleClose}></CustomButton>
              <CustomButton buttonText='Close' handleClick={handleClose}></CustomButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}