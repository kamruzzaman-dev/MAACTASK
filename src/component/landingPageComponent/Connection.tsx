import monitorMobile from '../../assets/icon/monitorMobile.png';
import people from '../../assets/icon/people.png';
import user from '../../assets/icon/user.png';
import cup from '../../assets/icon/cup.png';

const Connection = () => {

    return (
        <div className='main-container' style={{ padding: "50px" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                <div style={{ maxWidth: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <img src={monitorMobile} alt="monitorMobile" />
                    <p style={{
                        color: "#0052CC",
                        fontSize: "28px",
                        fontStyle: "normal",
                        fontWeight: "700",
                    }}>10+</p>
                    <p style={{
                        color: "#4E4E4E",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                    }}>Platforms Created</p>
                </div >
                <div style={{ maxWidth: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <img src={people} alt="monitorMobile" />
                    <p style={{
                        color: "#0052CC",
                        fontSize: "28px",
                        fontStyle: "normal",
                        fontWeight: "700",
                    }}>1559</p>
                    <p style={{
                        color: "#4E4E4E",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                    }}>Total Users</p>
                </div >
                <div style={{ maxWidth: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <img src={user} alt="monitorMobile" />
                    <p style={{
                        color: "#0052CC",
                        fontSize: "28px",
                        fontStyle: "normal",
                        fontWeight: "700",
                    }}>10+</p>
                    <p style={{
                        color: "#4E4E4E",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                    }}>Total Clients</p>
                </div >
                <div style={{ maxWidth: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <img src={cup} alt="monitorMobile" />
                    <p style={{
                        color: "#0052CC",
                        fontSize: "28px",
                        fontStyle: "normal",
                        fontWeight: "700",
                    }}>10+</p>
                    <p style={{
                        color: "#4E4E4E",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "500",
                    }}>In Operations</p>
                </div >



            </div>
        </div>
    );
};

export default Connection;
