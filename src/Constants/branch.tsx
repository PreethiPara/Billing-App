import { ReactElement } from "react";

// branch.ts
export const branchList = ['Pune', 'Mumbai', 'Bangalore'];
export interface DropDownProps {
    listOfItems: string[];
    Label: string;
}
export interface basicModalProps {
    element:ReactElement
    header:string
    onClose: ()=>void
}
export interface customFormProps {
    header:string;
    listOfEntries:string[];
    upperElement:ReactElement;
    lowerElement:ReactElement;
    buttonContent:string;
}
export const productFormList=["Name","Price"];
