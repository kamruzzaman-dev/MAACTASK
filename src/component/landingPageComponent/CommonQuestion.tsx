import Faq from "../shareComponent/Faq";

const CommonQuestion = () => {
    return (
        <div className="faq-bg" style={{ paddingBottom: "50px", background: "#0052CC" }}>
            <div className="main-container" >
                <div style={{ padding: "100px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{
                        textAlign: "center",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        color: "#ddd"
                    }}>Common Question </p>
                    <h2 style={{
                        textAlign: "center",
                        fontSize: "44px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        color: "#ddd"
                    }}>Frequently asked questions</h2>
                    <Faq />
                </div>
            </div>
        </div>
    );
};

export default CommonQuestion;