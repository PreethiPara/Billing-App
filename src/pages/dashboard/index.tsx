import { Box } from "@mui/material";
import OverView from "./components/Overview/Overview";
import SalesGraph from "./components/SalesGraph/SalesGraph";
import Sidebar from "./components/Sidebar/Sidebar";
import './index.scss';
import { PieChart } from "@mui/icons-material";
import PieChartRevenue from "./components/PieChartRevenue/PieChartRevenue";
import TopSellingProducts from "./components/TopSellingProducts/TopSellingProducts";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
function Dashboard(){
    return(
        <div className="flex overall">
            <Sidebar/>
            <div className="flex-col right-side">
                <OverView/>
                <div className="flex">
                    <SalesGraph/>
                    <PieChartRevenue/>
                </div>
                <div className="flex">
                    <TopSellingProducts/>
                    <RecentTransactions/>
                </div>
            </div>
        </div>

    )
}
export default Dashboard;