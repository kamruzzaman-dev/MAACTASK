import { Breadcrumb, Button, theme, Layout } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import emptyTable from "../../../assets/image/emptyTable.png";
import AreaTable from "../../../component/table/AreaTable";
const { Content } = Layout;
const AreaList = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const data = []
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <h2
                        style={{
                            margin: "32px 0 8px 24px",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#0C1D37",
                        }}
                    >
                        Area List
                    </h2>
                    <Breadcrumb
                        style={{
                            marginLeft: "24px",
                            marginBottom: "8px",
                        }}
                        separator=">"
                        items={[
                            {
                                title: "Geo",
                            },
                            {
                                title: "Area List",
                                href: "/dashboard/area",
                            },
                        ]}
                    />
                </div>
                <Button
                    style={{
                        marginRight: "20px",
                        background: "#0B2E4E",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: 400,
                        width: "129px",
                        borderRadius: "10px",
                        padding: "8px 16px",
                    }}
                    type="primary"
                >
                    <Link to="/dashboard/create-area">
                        <PlusOutlined style={{ marginRight: "4px" }} />
                        Create New
                    </Link>
                </Button>
            </div>
            <Content
                style={{
                    margin: "24px 16px",
                    padding: "24px",
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                {data?.length !== 0 ? (
                    <AreaTable />
                ) : (
                    <EmptyTableData />
                )}
            </Content>
        </div>
    );
};

export default AreaList;


const EmptyTableData = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                justifyContent: "center",
                alignItems: "center",
                minHeight: 'calc(100vh - 320px)',
            }}
        >
            <img src={emptyTable} />
            <p
                style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#9FA3A6",
                    textAlign: "center",
                }}
            >
                Currently you have no Data. <br />
                For next step first{" "}
                <Link to={"/dashboard/create-area"} style={{ color: "#556EE6" }}>
                    Create Area
                </Link>
            </p>
        </div>
    )
}