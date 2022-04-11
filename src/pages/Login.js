import { useState } from "react";
import { useForm  } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit} = useForm();
    const [isPending, setIsPending] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const login = (username, password) => {
        let userData = {
            username,
            password
        }

        isLoggedIn(false);
        setIsPending(true);

        fetch('http://localhost:8001/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(userData)
            }).then(res => res.json())
              .then(result => {
                  if (result.success) {
                      console.log("Login Successful");
                      setIsLoggedIn(true);
                      setIsPending(false);
                      navigate('/');
                  }
                  console.log("Invalid login credentials");
                  setIsPending(false);
              })
              .catch(err => {
                  alert("Unable to complete login request at this moment. Please try agin later.")
              })
    }

    return (
        <div className="create">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(login)}>
                <label>Username</label>
                <input 
                    type="text"
                    name="username"
                    id="blog-login"
                    required
                    {...register("username")}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    name="password"
                    id="blog-password"
                    required
                    {...register("password")}
                />
                {!isPending && <button type="submit">Login</button> }
                {isPending && <button type="submit" disabled>Login...</button> }
            </form>
        </div>
    );
}
 
export default Login;