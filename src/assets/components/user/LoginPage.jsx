import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="login-container my-5">
      <div className="login-card shadow">
        <h2 className="login-title text-center">Welcome Back</h2>
        <p className="login-subtitle text-center">Please login in your account</p>
        <form>
          <div className="mb-3">
            <lable htmlfor="username"  className="form-lable">UserName</lable>
            <input type="username" className="form-control" id='email' placeholder='Enter your username' required='required' />
          </div>
          <div className="mb-3">
            <lable htmlfor="passwprd"  className="form-lable">Password</lable>
            <input type="passwprd" className="form-control" id='passwprd' placeholder='Enter your passwprd' required='required' />
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>

        <div className="login-footer">
          <p className="text-center"><a href="#">Forget passwprd ?</a></p>
          <p className="text-center">Don't have an account ? <a href="#">Sign Up</a></p>
        </div>

      </div>
    </div>
  )
}

export default LoginPage