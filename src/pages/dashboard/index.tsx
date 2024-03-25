import OverView from "./components/Overview/Overview";
import Sidebar from "./components/Sidebar/Sidebar";
import './index.scss';
function Dashboard(){
    return(
        <div className="flex">
            <Sidebar/>
            <OverView/>
        </div>
    )
}
export default Dashboard;