import React from 'react';
import DisplayProduct from './components/DisplayProduct/DisplayProduct';
import NavBar from './components/NavBar/NavBar';
import ProductControl from './components/ProductControl/ProductControl';
import './index.scss';
function Home(){
    const [query,setQuery]=React.useState<string>("");
    function handleSetQuery(value:string){
        setQuery(value);
    }
    return (
        <>
            <NavBar handleSetQuery={handleSetQuery}/>
            <ProductControl />
            <DisplayProduct queryWord={query}/>
        </>
    )
}
export default Home;