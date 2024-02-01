import productFeatures from '../../assets/logo/productFeatures.png';
import mobileFeature from '../../assets/image/mobileFeature.png';

const ProductFeatures = () => {
    return (
        <div style={{
            minHeight: "100vh",
            padding: "114px 0 44px"
        }}>
            <hr style={{ border: "1px solid #C2D2EB" }} />
            <div style={{ paddingTop: "50px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#0052CC",
                }}>Product Features</p>
                <h2 style={{
                    textAlign: "center",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "700",
                }}>Make more out of your data</h2>
            </div>


            <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <FeaturesLeft title={'Real-time analytics'} />
                    <FeaturesLeft title={'Intuitive dashboard'} />
                    <FeaturesLeft title={'Smart suggestions'} />
                </div>
                <div>
                    <img src={mobileFeature} alt="mobileFeature" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <FeaturesRight title={'Multiple views'} />
                    <FeaturesRight title={'AI-led diagnoses'} />
                    <FeaturesRight title={'Responsive'} />
                </div>
            </div>

        </div>
    );
};

export default ProductFeatures;

const FeaturesRight = ({ title }: { title: string }) => {
    return (<div>
        <div style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "280px",
            justifyContent: "flex-end",
            justifyItems: "end",
        }}>
            <img style={{ width: "60px" }} src={productFeatures} alt="productFeatures" />
            <p style={{
                color: "#0B141F",
                fontFamily: "Manrope",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "800",
            }}>{title}</p>
            <p style={{
                color: "#0B141F",
                fontFamily: "Manrope",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
            }}>See product usage, sign-ins, feature metrics change as users work on your.</p>
        </div>
    </div>
    )
}


const FeaturesLeft = ({ title }: { title: string }) => {
    return (<div>
        <div style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "280px",
            justifyContent: "flex-end",
            justifyItems: "end",
        }}>
            <img style={{ width: "60px", alignSelf: 'end' }} src={productFeatures} alt="productFeatures" />
            <p style={{
                color: "#0B141F",
                fontFamily: "Manrope",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "800",
                alignSelf: 'end'
            }}>{title}</p>
            <p style={{
                color: "#0B141F",
                fontFamily: "Manrope",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                alignSelf: 'end'
            }}>See product usage, sign-ins, feature metrics change as users work on your.</p>
        </div>
    </div>)
}

