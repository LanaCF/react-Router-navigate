import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export const Login = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { signin } = useAuth();
    const [formData, setFormData] = useState({ userName: '', userPassword: '' });
    const [error, setError] = useState('');

    const fromPage = state?.from || '/';

    const usersBase = [
        {
            "id": "5a2b",
            "name": "Lana",
            "password": "3571"
        },
        {
            "id": "b331",
            "name": "JinHan",
            "password": "3572"
        },
        {
            "id": "d7c2",
            "name": "Leo",
            "password": "3573"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.userName.value;
        const password = form.userPassword.value;

        const userExists = usersBase.some(userData => userData.name === user && userData.password === password);

        if (userExists) {
            signin(user, () => navigate(fromPage, { replace: true }));
        } else {
            setError('Неправильний логін або пароль');
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const user = form.userName.value;
    //     const password = form.userPassword.value;
    
    //     try {
    //         const response = await fetch('http://localhost:3000/usersBase');
    //         const responseData = await response.json();
    //         console.log('Отримані дані з сервера:', responseData);
    
    //         if (Array.isArray(responseData.usersBase)) {
    //             const userExists = responseData.usersBase.find((userData) => userData.name === user && userData.password === password);
                
    //             if (userExists) {
    //                 signin(user, () => navigate(fromPage, { replace: true }));
    //             } else {
    //                 alert('Неправильні облікові дані');
    //             }
    //         } else {
    //             alert('Сталася помилка під час отримання даних з сервера.');
    //         }
    //     } catch (error) {
    //         console.error('Помилка під час отримання даних з сервера:', error);
    //         alert('Сталася помилка при спробі авторизації. Будь ласка, спробуйте ще раз.');
    //     }
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    return (
        <div className="login-page">
            <h1>Login page: { fromPage }</h1>

            <form onSubmit={ handleSubmit } className="login-page__form">
                <label>
                    User name: <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
                    <br/>
                    <br/>
                    Password: <input type="password" name="userPassword" value={formData.userPassword} onChange={handleChange} />
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>

            {error && <p>{error}</p>}
        </div>
    );
};