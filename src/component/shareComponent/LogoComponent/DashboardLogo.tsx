import { Link } from "react-router-dom";
import logo from "../../../assets/logo/FieldX.svg";
import location from "../../../assets/icon/map.svg";

const DashboardLogo = () => {
    return (
        <div>
            <div
                style={{
                    padding: "11px 75px",
                }}
                className=""
            >
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <p
                style={{
                    margin: "20px 0 26px 20px",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#6A7187",
                }}
            >
                MENU
            </p>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "21px",
                }}
            >
                <div>
                    <img src={location} alt="Location" />
                </div>
                <p
                    style={{
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#757575",
                        marginLeft: "16px",
                    }}
                >
                    Geo Information
                </p>
            </div>
        </div>
    );
};

export default DashboardLogo;