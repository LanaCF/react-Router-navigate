import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { signin } = useAuth();

    const fromPage = state?.from || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.userName.value;
 
        signin(user, () => navigate(fromPage, { replace: true }));
    }

    return (
        <div className="login-page">
            <h1>Login page: { fromPage }</h1>

            <form onSubmit={ handleSubmit } className="login-page__form">
                <label>
                    User name: <input type="text" name="userName"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};