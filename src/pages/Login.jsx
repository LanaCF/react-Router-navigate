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

    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, userPassword } = formData;

       if (!userName || !userPassword) {
            setError('Будь ласка, введіть ім\'я користувача та пароль');
            return;
        }

        fetchData(userName, userPassword);
    };

    const fetchData = (user, password) => {
        fetch('http://localhost:3000/usersBase')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                let userExists = false;
                for (let i = 0; i < json.length; i++) {
                    const userData = json[i];
                    if (userData.name === user && userData.password === password) {
                        userExists = true;
                        break;
                    }
                }
                if (userExists) {
                    console.log('Успішний вхід!');
                    signin(user, () => navigate(fromPage, { replace: true }));
                } else {
                    setError('Неправильні облікові дані');
                }
            })
            .catch(error => {
                console.error('Помилка при взаємодії з сервером:', error);
            });
    };
    

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

            <form onSubmit={handleSubmit} className="login-page__form">
                <label>
                    User name: <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
                    <br/>
                    <br/>
                    Password: <input type="password" name="userPassword" value={formData.userPassword} onChange={handleChange} />
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>

            {error && <p className="error">{error}</p>}
        </div>
    );
};







































// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import { useState } from "react";

// export const Login = () => {
//     const { state } = useLocation();
//     const navigate = useNavigate();
//     const { signin } = useAuth();
//     const [formData, setFormData] = useState({ userName: '', userPassword: '' });
//     const [error, setError] = useState('');

//     const fromPage = state?.from || '/';

//     // const usersBase = [
//     //     {
//     //         "id": "5a2b",
//     //         "name": "Lana",
//     //         "password": "3571"
//     //     },
//     //     {
//     //         "id": "b331",
//     //         "name": "JinHan",
//     //         "password": "3572"
//     //     },
//     //     {
//     //         "id": "d7c2",
//     //         "name": "Leo",
//     //         "password": "3573"
//     //     }
//     // ];

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     const form = e.target;
//     //     const user = form.userName.value;
//     //     const password = form.userPassword.value;

//     //     const userExists = usersBase.some(userData => userData.name === user && userData.password === password);

//     //     if (userExists) {
//     //         signin(user, () => navigate(fromPage, { replace: true }));
//     //     } else {
//     //         setError('Неправильний логін або пароль');
//     //     }
//     // }





//     const fetchData = (user, password) => {
//         fetch('http://localhost:3000/usersBase')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(json => {
//                 if (json && json.usersBase) {
//                     const userExists = json.usersBase.find(userData => userData.name === String(user) && userData.password === String(password));
//                     if (userExists) {
//                         console.log('Успішний вхід!'); // Якщо логін та пароль вірні
//                     } else {
//                         console.log('Неправильні облікові дані'); // Якщо логін або пароль не вірні
//                     }
//                 } else {
//                     console.log('Неправильний формат даних від сервера');
//                 }
//             })
//             .catch(error => {
//                 console.error('Помилка при взаємодії з сервером:', error);
//                 // Обробка помилки, якщо вона виникає
//             });
//     };
    









//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const form = e.target;
//     //     const user = String(form.userName.value);
//     //     const password = String(form.userPassword.value);

//     //     console.log('Введене ім\'я користувача:', user);
//     //     console.log('Введений пароль:', password);
    
//     //     try {
//     //         const response = await fetch('http://localhost:3000/usersBase');
//     //         const responseData = await response.json();
//     //         console.log('Отримані дані з сервера:', responseData);
    
//     //         if (Array.isArray(responseData.usersBase)) {
//     //             const userExists = responseData.usersBase.find((userData) => userData.name === user && userData.password === password);
                
//     //             if (userExists) {
//     //                 signin(user, () => navigate(fromPage, { replace: true }));
//     //             } else {
//     //                 console.log('Неправильні облікові дані');
//     //             }
//     //         } else {
//     //             console.log('Сталася помилка під час отримання даних з сервера.');
//     //         }
//     //     } catch (error) {
//     //         console.error('Помилка під час отримання даних з сервера:', error);
//     //         console.log('Сталася помилка при спробі авторизації. Будь ласка, спробуйте ще раз.');
//     //     }
//     // };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//           ...prevState,
//           [name]: value
//         }));
//     };

//     return (
//         <div className="login-page">
//             <h1>Login page: { fromPage }</h1>

//             <form onSubmit={ handleSubmit } className="login-page__form">
//                 <label>
//                     User name: <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
//                     <br/>
//                     <br/>
//                     Password: <input type="password" name="userPassword" value={formData.userPassword} onChange={handleChange} />
//                 </label>
//                 <br/>
//                 <button type="submit">Login</button>
//             </form>

//             {error && <p>{error}</p>}
//         </div>
//     );
// };