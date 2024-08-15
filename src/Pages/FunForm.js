import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Title from '../Components/Title';
import '../Pages/FunForm.css'
function FunForm() {
    const [userInputs, setUserInputs] = useState({
        name: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        nameErr: "",
        passwordErr: ""
    });

    const [loginFailed, setLoginFailed] = useState(false);
    const [noRegistration, setNoRegistration] = useState(false);
    const history = useHistory();

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const setData = (e) => {
        const { name, value } = e.target;

        setUserInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }));

        if (name === "name") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                nameErr: !emailReg.test(value) ? "Please enter a valid email - ex: xxxx@xxxxx.com" : ""
            }));
        } else if (name === "password") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                passwordErr: value.length === 0 ? "This field is required" : value.length < 8 ? "Please write a valid password (more than 8 numbers)" : ""
            }));
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUserInputs = JSON.parse(localStorage.getItem('userInputs'));

        if (storedUserInputs) {
            if (storedUserInputs.email === userInputs.name && storedUserInputs.password === userInputs.password) {
                localStorage.setItem('isLoggedIn', 'true');
                history.push('/products');
                window.dispatchEvent(new Event('storage')); // Force localStorage change event to trigger update in NavBar
            } else {
                setLoginFailed(true);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    nameErr: "Please enter a valid email - ex: xxxx@xxxxx.com",
                    passwordErr: "Please write a valid password (more than 8 numbers)"
                }));
            }
        } else {
            setNoRegistration(true);
        }
    };


    return (
        <div className="">
            <div className="container my-5">
                <Title title={"Login and feel free for shopping"} />

                <div className="row">
                    <form onSubmit={handleLogin}>
                        <label className="fw-bold py-3">Email Address :</label>
                        <div className="form-floating mb-3">
                            <input type="email"
                                className={`form-control ${errors.nameErr && 'border-danger'}`}
                                id="floatingInput"
                                // placeholder="name@example.com"
                                name="name"
                                value={userInputs.name}
                                onChange={setData}
                            />
                            <p className="text-danger">{errors.nameErr}</p>
                        </div>
                        <label className="fw-bold py-3">Password :</label>
                        <div className="form-floating">
                            <input type="password"
                                className={`form-control ${errors.passwordErr && 'border-danger'}`}
                                id="floatingPassword"
                                // placeholder="Password"
                                name="password"
                                value={userInputs.password}
                                onChange={setData}
                            />
                            <p className="text-danger">{errors.passwordErr}</p>
                        </div>
                        {loginFailed && (
                            <div className="alert alert-danger mt-3" role="alert">
                                Login failed. Please check your username and password.
                            </div>
                        )}
                        {noRegistration && (
                            <div className="alert alert-warning mt-3" role="alert">
                                No registration found. Please register first.
                            </div>
                        )}
                        <button disabled={errors.passwordErr || errors.nameErr} type="submit" className="btn btn-dark mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default FunForm;
