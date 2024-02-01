import { Link } from "react-router-dom";
import logo from "../../../assets/logo/FieldX.svg";
import { Button } from "antd";
import { Fragment } from "react";
const Header = () => {
    return (
        <Fragment>
            <div className="main-container">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: "112px",
                        marginRight: "112px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                    }}
                >
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div style={{ gap: "16px", display: "flex" }}>
                        <Link to="/log-in">
                            <Button
                                style={{
                                    color: "white",
                                    backgroundColor: "#0052CC",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "150%",
                                    padding: "12px 24px",
                                    height: "45px",
                                    width: "84px",
                                    textAlign: "center",
                                }}
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button
                                style={{
                                    color: "#0052CC",
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "150%",
                                    padding: "12px 24px",
                                    height: "45px",
                                    width: "130px",
                                    textAlign: "center",
                                    border: "1px solid #0052CC",
                                    boxShadow: "0 2px 5px #C2D2EB",
                                }}
                            >
                                Registration
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr style={{ border: "1px solid #C2D2EB" }} />
        </Fragment>

    );
};

export default Header;
