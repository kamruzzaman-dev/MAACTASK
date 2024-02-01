import Amara from '../../assets/icon/Amara.png';
import Aven from '../../assets/icon/Aven.png';
import Circle from '../../assets/icon/Circle.png';
import Kyan from '../../assets/icon/Treva.png';
import Treva from '../../assets/icon/Treva.png';

const Impact = () => {

    return (
        <div className='main-container' style={{ padding: "120px" }}>
            <h2 style={{
                textAlign: "center",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "400",
                color: "#0052CC",
                paddingBottom: "50px",
                textTransform:"capitalize"
            }}>5,000+ high-impact teams rely on Fieldx</h2>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img src={Amara} alt="monitorMobile" />
                <img src={Kyan} alt="monitorMobile" />
                <img src={Aven} alt="monitorMobile" />
                <img src={Circle} alt="monitorMobile" />
                <img src={Treva} alt="monitorMobile" />
            </div>
        </div>
    );
};

export default Impact;
