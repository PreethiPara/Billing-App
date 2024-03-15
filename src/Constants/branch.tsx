import { ReactElement } from "react";

// branch.ts
export const branchList = ['Pune', 'Mumbai', 'Bangalore'];
export interface DropDownProps {
    listOfItems: string[];
    Label: string;
}
export interface addProductModalProps {
    listOfEntries: string[];
    header: string
    buttonContent: string;
}
export interface customFormProps {
    header: string;
    listOfEntries: string[];
    buttonContent: string;
}
export interface viewImageProps {
    header: string;
    image: ReactElement;
    buttonContent: string;
}
export interface addPictureProps {
    removeFile: Boolean;
    fileRemoved: Function;
}
export interface showProductProps {
    productAdded: string[];
}
export const productFormList = ["Name", "Price"];
