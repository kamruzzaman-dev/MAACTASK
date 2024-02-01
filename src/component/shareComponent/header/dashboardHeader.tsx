import { Layout, theme } from "antd";
import user from "../../../assets/icon/profile.png";
import arrow from "../../../assets/icon/arrow.svg";

const DashboardHeader = () => {
    const { Header } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header
            style={{
                paddingRight: "20px",
                background: colorBgContainer,
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img src={user} alt="" />
                </div>
                <p
                    style={{
                        padding: "0 8px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    Henry
                </p>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </Header>
    );
};

export default DashboardHeader;