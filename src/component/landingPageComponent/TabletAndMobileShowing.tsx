import tablet from "../../assets/image/tablet.png";
import phone from "../../assets/image/phone.png";

const TabletAndMobileShowing = () => {
    return (
        <div style={{ height: "100vh" }}>
            <div className="main-container" style={{

                position: "relative",
                marginTop: "-150px", display: "flex", alignItems: "center", justifyContent: "center"
            }}>
                <img style={{
                    width: "1080px",
                    margin: "auto",
                }} src={tablet} alt="Logo" />
                <img style={{ position: "absolute", bottom: "-50px", right: "200px" }} src={phone} alt="Logo" />
            </div>
            <hr style={{ margin: "50px 0px", border: "1px solid #C2D2EB" }} />
        </div>

    );
};

export default TabletAndMobileShowing;