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
        <div className="main-dashboard">
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>
            <div className="overview-wrapper">
                <OverView />
            </div>
            <div className="sales-graph-wrapper">
                <SalesGraph />
            </div>
            <div className="pie-chart-revenue-wrapper">
                <PieChartRevenue />
            </div>
            <div className="top-selling-products-wrapper">
                <TopSellingProducts />
            </div>
            <div className="recent-transactions-wrapper">
                <RecentTransactions />
            </div>
        </div>

    )
}
export default Dashboard;