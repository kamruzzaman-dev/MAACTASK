import LoginForm from "../../component/form/loginForm";

const Login = () => {
  return (
    <div className="main-bg">
      {/* Register form */}
      <div
        style={{
          paddingTop: "112px",

          paddingBottom: "120px",
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
