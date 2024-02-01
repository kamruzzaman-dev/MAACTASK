import { Footer } from "antd/es/layout/layout";

const DashboardFooter = () => {
    return (
        <Footer
            style={{
                textAlign: "center",
                background: "#F2F2F5",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 23px",
                height: "60px",
            }}
        >
            <div>
                <h2
                    style={{
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#74788D",
                    }}
                >
                    2022 © MAAC
                </h2>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "16px",
                }}
            >
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
            </div>
        </Footer>
    );
};

export default DashboardFooter;