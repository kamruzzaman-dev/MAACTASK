import monitorMobile from '../../assets/icon/monitorMobile.png';
import people from '../../assets/icon/people.png';
import user from '../../assets/icon/user.png';
import cup from '../../assets/icon/cup.png';

const Connection = () => {

    return (
        <div
            className='main-container'
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "64px",
                marginBottom: "48px",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <div>
                    <img src={monitorMobile} alt="" />
                </div>
                <h2
                    style={{
                        fontSize: "40px",
                        fontWeight: 700,
                        color: "#0052CC",
                        margin: "16px 0",
                    }}
                >
                    10+
                </h2>
                <p
                    style={{
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "#4E4E4E",
                    }}
                >
                    Platforms Created
                </p>
            </div>
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <div>
                    <img src={people} alt="" />
                </div>
                <h2
                    style={{
                        fontSize: "40px",
                        fontWeight: 700,
                        color: "#0052CC",
                        margin: "16px 0",
                    }}
                >
                    1559+
                </h2>
                <p
                    style={{
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "#4E4E4E",
                    }}
                >
                    Total Users
                </p>
            </div>
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <div>
                    <img src={user} alt="" />
                </div>
                <h2
                    style={{
                        fontSize: "40px",
                        fontWeight: 700,
                        color: "#0052CC",
                        margin: "16px 0",
                    }}
                >
                    10+
                </h2>
                <p
                    style={{
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "#4E4E4E",
                    }}
                >
                    Total Clients
                </p>
            </div>
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <div>
                    <img src={cup} alt="" />
                </div>
                <h2
                    style={{
                        fontSize: "40px",
                        fontWeight: 700,
                        color: "#0052CC",
                        margin: "16px 0",
                    }}
                >
                    300 Days
                </h2>
                <p
                    style={{
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "#4E4E4E",
                    }}
                >
                    In Operations
                </p>
            </div>
        </div>
    );
};

export default Connection;
