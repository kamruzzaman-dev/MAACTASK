import { Button } from "antd";

const Hero = () => {
    return (
        <div className="main-bg">
            <div className="main-container"
                style={{
                    height: 'calc(100vh - 100px)',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: "column",
                        alignContent: "center",
                        justifyContent: "center",
                        gap: "36px"
                    }}>
                    <h1 style={{
                        color: "#0B141F",
                        textAlign: "center",
                        fontFamily: "Manrope",
                        fontSize: "56px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "100%",
                        maxWidth: " 850px"
                    }}>
                        Analytics that transform your product inside-out
                    </h1>

                    <div style={{ gap: "16px", display: "flex", justifyContent: "center" }}>
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
                                height: "56px",
                                width: "200px",
                                textAlign: "center",
                            }}
                        >
                            Request for Demo
                        </Button>
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
                                height: "56px",
                                width: "130px",
                                textAlign: "center",
                                border: "1px solid #0052CC",
                                boxShadow: "0 2px 5px #C2D2EB",
                            }}
                        >
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;