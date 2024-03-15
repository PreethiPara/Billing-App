import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AddProductModal.scss'
import { addProductModalProps } from '../../Constants/branch';
import { theme } from '../../Constants/theme';
import { FormControl, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import AddPicture from '../AddPicture/AddPicture';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function AddProductModal(props: addProductModalProps) {

  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [removeFile, setremoveFile] = useState<Boolean>(false);
  const [nameHelperText, setNameHelperText] = useState<string>("");
  const [priceHelperText, setPriceHelperText] = useState<string>("");
  const [disableButton, setDisableButton] = useState<boolean>(true);
  let mapOfValueAndItsSetState = new Map<string, React.Dispatch<React.SetStateAction<string>>>();
  let mapOfValueAndItsState = new Map<string, string>();
  let mapOfValueAndItsStateHelperText = new Map<string, string>();
  mapOfValueAndItsSetState.set("Name", setName);
  mapOfValueAndItsSetState.set("NameHelperText", setNameHelperText);
  mapOfValueAndItsSetState.set("Price", setPrice);
  mapOfValueAndItsSetState.set("PriceHelperText", setPriceHelperText);
  mapOfValueAndItsStateHelperText.set("Price", priceHelperText);
  mapOfValueAndItsStateHelperText.set("Name", nameHelperText);
  mapOfValueAndItsState.set("PriceVar", price);
  mapOfValueAndItsState.set("NameVar", name);
  const handleOpen = () => setOpen(true);
  const handleFile = (state: Boolean) => {
    setremoveFile(state)
  }
  const handleClose = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    if (localStorage.getItem("Name") !== "chai") {
      handleFile(true)
      setName("");
      setPrice("");
      setPriceHelperText("");
      setNameHelperText("");
      setOpen(false);
    }
  }
  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    let arrayOfNameAndPrice = new Array<string>();
    arrayOfNameAndPrice.push(name);
    arrayOfNameAndPrice.push(price);
    localStorage.setItem("listOfEntries", localStorage.getItem("listOfEntries") + "," + arrayOfNameAndPrice.toString());
    handleClose(event);
  }
  function handleOnChangeOfTextField(event: React.BaseSyntheticEvent, setState: React.Dispatch<React.SetStateAction<string>> | undefined, value: string,
    setStateHelperText: React.Dispatch<React.SetStateAction<string>> | undefined) {
    if (setState !== undefined)
      setState(event.target.value);
    localStorage.setItem(value, event.target.value);
    if (setStateHelperText !== undefined) {
      let flag = true;
      if (value === "Name" && event.target.value === "chai") {
        setStateHelperText("Already Exist");
      } else if (event.target.value === "") {
        setStateHelperText("Required Value");
      } else if (value === "Price" && (isNaN(event.target.value) || isNaN(parseFloat(event.target.value)))) {
        setStateHelperText("Value should be a number");
      } else {
        flag = false;
        setStateHelperText("");
      }
      if (flag === false) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} style={{ padding: '15px', backgroundColor: theme.palette.primary.light, fontSize: "1rem" }}>{props.header}</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box className="form-main" component={"form"}>
            <FormControl className="form-control-main" style={{ width: "80%" }}>
              <Typography variant="h3" className="form-header">{props.header}</Typography>
              <AddPicture removeFile={removeFile} fileRemoved={handleFile} />
              <Stack className="form-field-container" >
                {
                  (props.listOfEntries || []).map((item) => (
                    <TextField
                      sx={{ margin: "15px 0px 15px 0px", width: "100%" }}
                      className="form-field"
                      required
                      id="outlined-required"
                      label={item}
                      onChange={(event) => {
                        handleOnChangeOfTextField(event, mapOfValueAndItsSetState.get(item), item,
                          mapOfValueAndItsSetState.get(item + "HelperText"));
                      }}
                      helperText={mapOfValueAndItsStateHelperText.get(item)}
                      value={mapOfValueAndItsState.get(item + "Var")}
                    />
                  ))
                }
              </Stack>
              <Button onClick={handleSubmit} disabled={disableButton} style={{ padding: '5px 10px 5px 10px', color: "white", backgroundColor: theme.palette.primary.dark, fontSize: "1rem", width: "fit-content" }}>{props.buttonContent}</Button>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div >
  );
}