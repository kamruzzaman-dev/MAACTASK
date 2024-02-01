import about from "../../assets/image/about.png";
import ceo from "../../assets/image/ceo.png";

const About = () => {
    return (
        <div style={{ paddingBottom: "50px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
            <img src={about} alt="about" />
            <div style={{ padding: "40px", paddingTop:"100px", maxWidth: "40%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: "30px" }}>
                <h2 style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    color: "#0052CC"
                }}>About Us</h2>
                <p style={{
                    color: "#0B141F",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "700",
                }}>A dedicated solution for startups and enterprises</p>
                <p style={{
                    color: "#495057",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <hr style={{ display:"inline-block", border: "2px solid #C2D2EB" }} />
                <div style={{ maxWidth: "380px", padding: "0px 10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <img src={ceo} style={{ width: "60px" }} alt="ceo" />
                    <div>
                        <p style={{
                            color: "#0B141F",
                            fontFamily: "Manrope",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "500",
                        }}>"Fieldx is for teams that care about their product growth."</p>
                        <p style={{
                            color: "#0B141F",
                            fontFamily: "Manrope",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "800",
                        }}>CEO, FieldX</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;