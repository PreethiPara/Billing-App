import DisplayProduct from './components/DisplayProduct/DisplayProduct';
import NavBar from './components/NavBar/NavBar';
import ProductControl from './components/ProductControl/ProductControl';
import './index.scss';
function Home(){
    return (
        <>
            <NavBar />
            <ProductControl />
            <DisplayProduct/>
        </>
    )
}
export default Home;