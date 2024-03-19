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
import CustomDropDown from '../../helper/CustomDropDown/CustomDropDown';
import { listOfIcon, listOfName } from '../../constants/helper/listOfIconsForCategoryDropDown';
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
  borderRadius: '30px',
  minWidth: '600px'
};

export default function ProductModalFromButton(props: modalFromButtonProps) {
  const [open, setOpen] = React.useState(false);
  const [clicked, setClicked] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function handleCheckBoxClick() {
    setClicked((prev) => {
      console.log(!prev);
      return !prev;
    });
  }
  return (
    <div>
      <Button sx={{
        fontSize: '1.3rem',
        backgroundColor: theme.palette.primary.dark,
        color: '#ffff',
        ':hover': {
          backgroundColor: theme.palette.primary.main,
          color: '#ffff'
        }
      }}
        onClick={handleOpen}>{props.buttonText}</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "500" }}>
            {props.mainHeading}
          </Typography>
          <Box className='flex flex-col w-4/5'>
            <TextField type='text' label='Name' variant='outlined' required placeholder={'Name'} sx={{ margin: '1rem 0 1rem 0' }} inputProps={{ style: { fontSize: 25 } }}
              InputLabelProps={{ style: { fontSize: 20 } }} />
            <Box className='flex justify-between items-center'>
              <TextField type='number' label='Price' variant='outlined' required placeholder={'Price'} sx={{ margin: '1rem 2rem 1rem 0rem', width: "40%" }} inputProps={{ style: { fontSize: 18 } }}
                InputLabelProps={{ style: { fontSize: 20 } }} />
              <Box className="flex w-2/5">
                <CustomDropDown label='Branch' listOfDropDownEntries={["dummy1", "dummy2", "dummy3"]} iconImageWithName={[]} />
              </Box>
            </Box>
            <Box className="flex mt-4 mb-4 justify-between">
              <Box className="flex w-2/5">
                <CustomDropDown label='Category' listOfDropDownEntries={listOfName} iconImageWithName={listOfIcon} />
              </Box>
              <Box className="flex w-3/5 justify-end">
                <Checkbox checked={clicked} onClick={handleCheckBoxClick} />
                <TextField className="flex w-7/10" type="number" disabled={!clicked} label={"Quantity"} children={"Quantity"} />
              </Box>
            </Box>
            <Box className='flex justify-between w-fit mt-4 mb-2 min-w-48'>
              <CustomButton buttonText='Submit' handleClick={handleClose}></CustomButton>
              <CustomButton buttonText='Close' handleClick={handleClose}></CustomButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}