import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import DashboardFooter from "../shareComponent/footer/dashboardFooter";
import DashboardHeader from "../shareComponent/header/dashboardHeader";
import MenuItems from "./menu";
const DashboardLayout = () => {
    return (
        <Layout>
            <MenuItems />
            <Layout>
                <DashboardHeader />
                <div style={{
                    height: 'calc(100vh - 125px)',
                    overflowY: 'scroll',
                }}>
                    <Outlet />
                </div>
                <DashboardFooter />
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
