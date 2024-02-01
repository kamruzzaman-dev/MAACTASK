import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import DashboardLogo from "../shareComponent/LogoComponent/DashboardLogo";

const { Sider } = Layout;

const MenuItems = () => {

    const items = [
        {
            id: 1,

            label: "Region",
            path: "/dashboard/region",
        },
        {
            id: 2,

            label: "Area",
            path: "/dashboard/area",
        }
    ].map((items) => ({
        key: items.id,
        label: (
            <Link
                to={items.path}
                style={{
                    background: "none",
                    marginBottom: "4px",
                    padding: "0px",
                }}
            >
                {items.label}
            </Link>
        ),
    }
    ));

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{
                background: "white",
                height: "100vh",
                borderRight: "1px solid #F3F3F3",
                boxShadow: "0 2px 5px #C2D2EB",
            }}
            width={252}
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <DashboardLogo />
            <Menu
                mode="inline"
                defaultSelectedKeys={["4"]}
                style={{
                    marginLeft: "12px",
                    width: "216px",
                    margin: "auto",
                    backgroundColor: "white",
                    borderRight: "1px solid transparent",
                }}
                items={items}
            />
        </Sider>
    );
};

export default MenuItems;