import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [isPending, setIsPending] = useState(false);

    const registerUser = () => {
        
    }

    return (
        <div className="create">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(registerUser)}>
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
                <label>Confirm Password</label>
                <input 
                    type="password" 
                    name="confirm-password"
                    id="blog-password"
                    required
                    {...register("confirm-password")}
                />
                {!isPending && <button type="submit">Register</button> }
                {isPending && <button type="submit" disabled>Register...</button> }
            </form>
        </div>
    );
}
 
export default Register;