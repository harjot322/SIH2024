import './login.scss'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import useLogin from '../../Hooks/useLogin';


function Login() {
	const [email , setEmail] = useState('')
	const [password , setPassword] = useState('')

	const {loginRequest , loading} = useLogin()

	const handleSubmit = async (e) => {

		e.preventDefault();

		await loginRequest(email, password);
		
		
	}


	return (
		<div className="login">
			<div className="formContainer">
				<form onSubmit={handleSubmit}>
					<h1>Welcome back</h1>
					<input
						name="email"
						required
						type='email'
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						name="password"
						type="password"
						required
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button disabled={loading} type='submit'>{loading ? 'Loading...' : "Login" }</button>
					
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