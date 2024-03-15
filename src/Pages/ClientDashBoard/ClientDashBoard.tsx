import React from "react";
import AddProduct from "../../Components/AddProduct/AddProduct"
import NavAppBar from "../../Components/NavAppBar/NavAppBar";

function ClientDashBoard() {
    return(
    <div>
        <NavAppBar/>
        <AddProduct/>
    </div>)
}

export default ClientDashBoard;