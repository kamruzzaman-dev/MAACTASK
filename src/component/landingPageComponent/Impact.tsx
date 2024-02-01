import Amara from '../../assets/icon/Amara.png';
import Aven from '../../assets/icon/Aven.png';
import Circle from '../../assets/icon/Circle.png';
import Kyan from '../../assets/icon/Treva.png';
import Treva from '../../assets/icon/Treva.png';

const Impact = () => {

    return (
        <div className='main-container' style={{ padding: "112px 0" }}>
            <h2 style={{
                fontSize: "32px",
                fontWeight: 600,
                color: "#0052CC",
                textAlign: "center",
            }}>5,000+ high-impact teams rely on Fieldx</h2>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center", gap: "76px", marginTop: "48px",
            }}>
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
