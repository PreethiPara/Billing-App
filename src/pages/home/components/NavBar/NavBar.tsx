import "./NavBar.scss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import backgroundImage from '../../assets/background-image/billingapp-bg.jpg';
import { Stack, Typography } from '@mui/material';
import { Person, PersonAdd } from "@mui/icons-material";
import React from "react";
import MenuWithIconButton from "../../../../components/MenuWithIconButton/MenuWithIconButton";
import { accountList } from "../../../../constants/helper/addAccountList";
import CustomIconButton from "../../../../helper/CustomIconButton/CustomIconButton";
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import CustomDropDown from "../../../../helper/CustomDropDown/CustomDropDown";
import { listOfIcon, listOfName } from "../../../../constants/helper/listOfIconsForCategoryDropDown";
export default function NavBar() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar style={{
          backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover",
          height: "60vh",
          backgroundRepeat: "no-repeat", alignItems: 'flex-start'
        }}>
          <Stack className="w-full">
            <Box className="m-10 justify-between flex items-center h-1/4">
              <a href="/dashboard" className="text-2xl font-bold text-white">Dashboard</a>
              <div className="items-center flex justify-between">
                <CustomIconButton children={<PersonAdd />} handleClick={() => { }} />
                <a href="/dashboard" className="text-2xl font-bold text-white m-4">Add Branch</a>
                <MenuWithIconButton icon={<Person />} listOfMenuItems={accountList} />
              </div>
            </Box>
            <Box>
              <Typography variant="h1" className="italic" fontWeight={'700'}>Hapree</Typography>
              <Typography variant="h3" className="italic" fontWeight={'700'}>Crush Your Restaurant Bills </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box>

                </Box>
              </Box>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}