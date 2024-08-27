import './login.scss'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";


function Login(){

  return(
    <div className="login">
      <div className="formContainer">
        <form /*onSubmit={handleSubmit}*/>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button /*disabled={isLoading}*/>Login</button>
          {/* {error && <span>{error}</span>} */}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Login