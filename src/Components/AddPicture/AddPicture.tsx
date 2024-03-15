import React, { useEffect } from "react";
import AddProductModal from "../Modals/AddProductModal";
import { IconButton } from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
import { theme } from "../../Constants/theme";
import ViewImageModal from "../Modals/ViewImageModal";
import { addPictureProps } from "../../Constants/branch";
export default function AddPicture(props: addPictureProps) {
    const customInput = React.useRef<null | HTMLInputElement>(null);
    const [file, setFile] = React.useState<File>();
    function getFile(event: React.BaseSyntheticEvent | null) {
        if (event !== null) {
            setFile(event.target.files[0])
        } else {
            setFile(undefined);
        }
    }
    function handleClick() {
        if (customInput.current != null) {
            customInput.current.click()
        }
    }
    useEffect(() => {
        getFile(null);
        props.fileRemoved(false);
    }, [props.removeFile])
    return (<>
        {
            file ? (
                <div className='after-upload'>
                    <ViewImageModal
                        header="View Image"
                        image={<img style={{ width: "50%" }} src={URL.createObjectURL(file)} />}
                        buttonContent="Close"
                    />
                    <IconButton className='reupload-picture-icon-button' style={{ backgroundColor: theme.palette.secondary.light }} onClick={handleClick}>
                        {
                            (<AddAPhoto className='add-picture-icon' />)
                        }
                    </IconButton>
                </div>
            ) :
                (
                    <IconButton className='add-picture-icon-button' style={{ backgroundColor: theme.palette.secondary.light }} onClick={handleClick}>
                        {
                            (<AddAPhoto className='add-picture-icon' />)
                        }
                    </IconButton>
                )
        }

        <p>{file?.name}</p>
        <input className="disabled-input" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={getFile} ref={customInput} />
    </>
    )
}