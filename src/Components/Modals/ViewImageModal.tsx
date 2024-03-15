import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import { viewImageProps } from "../../Constants/branch";
import { theme } from "../../Constants/theme";
import { useState } from "react";

export default function ViewImageModal(props: viewImageProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }
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
                    <Typography variant="h3" className="form-header">{props.header}</Typography>
                    {props.image}
                    <Divider />
                    <Button style={{ padding: '5px', backgroundColor: theme.palette.primary.dark, fontSize: "0.8rem", color: "white" }} onClick={handleClose}>{props.buttonContent}</Button>
                </Box>
            </Modal>
        </div>
    )
}