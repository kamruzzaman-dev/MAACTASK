import RegisterForm from "../../component/form/registerForm";

const Register = () => {
    return (
        <div className="main-bg">
            {/* Register form */}
            <div
                style={{
                    paddingTop: "112px",

                    paddingBottom: "120px",
                }}
            >
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;