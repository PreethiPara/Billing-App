import * as React from 'react';
import './NavAppBar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AccountCircleOutlined, AccountCircleRounded, GroupAddRounded, LogoDev } from '@mui/icons-material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, IconButton, InputLabel, MenuItem, colors} from '@mui/material';
import { branchList } from '../../Constants/branch';
import DropDown from '../../Utils/DropDown/DropDown';
import { theme } from '../../Constants/theme';

export default function NavAppBar() {
  const [branch, setBranch] = React.useState('ulhasnagar');
  const handleChange = (event: SelectChangeEvent) => {
    setBranch(event.target.value as string);
  };
  return (
    <Box className='navbar-container'>
      <AppBar position="static">
        <Toolbar className='navbar-main' style={{backgroundColor:theme.palette.primary.light}}>
          <Box className="left-navbar-main" >
            <LogoDev className='store-logo'/>
            <Typography variant='h3'className='store-name'>Hapree</Typography>
          </Box>
          <Typography variant='h2' className='greeting-header'>Welcome User</Typography>
          <Box className="right-navbar-main">
            <IconButton><GroupAddRounded className='add-account-icon'/></IconButton>
            <DropDown listOfItems={branchList} Label='Branch'/>
            <IconButton><AccountCircleRounded className='show-account-icon'/></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}