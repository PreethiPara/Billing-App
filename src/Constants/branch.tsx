import { ReactElement } from "react";

// branch.ts
export const branchList = ['Pune', 'Mumbai', 'Bangalore'];
export interface DropDownProps {
    listOfItems: string[];
    Label: string;
}
export interface basicModalProps {
    element:ReactElement
}
export interface customFormProps {
    header:string;
    listOfEntries:string[];
    upperElement:ReactElement;
    lowerElement:ReactElement;
}
export const productFormList=["Name","Price"];
