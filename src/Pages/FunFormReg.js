import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Title from '../Components/Title';

function FunFormReg() {

    const [userInputs, setUserInputs] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        Repass: ""
    });

    const [errors, setErrors] = useState({
        nameErr: "",
        emailErr: "",
        usernameErr: "",
        passwordErr: "",
        RepassErr: "",
    });

    const [showAlert, setShowAlert] = useState(false);
    const history = useHistory();

    const emailReg = /^([a-z0-9]+)@(gmail|yahoo)\.(com|eg)$/;
    const userNameReg = /^[a-zA-Z_]+$/;
    const passReg = /^[0-9]{8,}/;

    const setData = (e) => {
        const { name, value } = e.target;

        setUserInputs({
            ...userInputs,
            [name]: value
        });

        if (name === 'name') {
            setErrors({
                ...errors,
                nameErr: value.length === 0 ? "Please enter your name" :
                    !userNameReg.test(value) ? "Please enter a valid name (without spaces and containg only characters a-z A-Z)" : ""
            });
        } else if (name === 'userName') {
            setErrors({
                ...errors,
                usernameErr: value.length === 0 ? "Please enter your username" :
                    !userNameReg.test(value) ? "Please enter a valid name (without spaces and containg only characters a-z A-Z)" : ""
            });
        } else if (name === 'email') {
            setErrors({
                ...errors,
                emailErr: value.length === 0 ? "Please enter your email" :
                    !emailReg.test(value) ? "Please enter a valid email (ex: xxxx@xxxx.com & xxxx@xxxx.eg)" : ""
            });
        } else if (name === 'password') {
            setErrors({
                ...errors,
                passwordErr: value.length === 0 ? "Please enter a password" :
                    !passReg.test(value) ? "Enter a valid password (containg more than 8 numbers)" : ""
            });
        } else if (name === 'Repass') {
            setErrors({
                ...errors,
                RepassErr: value.length === 0 ? "Please confirm your password" :
                    value !== userInputs.password ? "Passwords do not match" : ""
            });
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (userInputs.name && userInputs.userName && userInputs.email && userInputs.password && userInputs.Repass &&
            !errors.nameErr && !errors.usernameErr && !errors.emailErr && !errors.passwordErr && !errors.RepassErr) {

            localStorage.setItem('userInputs', JSON.stringify(userInputs));
            history.push('/');
        } else {
            setShowAlert(true);
        }
    };

    return (
        <div className="container my-5">
            {/* <Title title={"Register now and enjoy the latest Sales exclusive"} /> */}

            {showAlert && (
                <div className="alert alert-danger" role="alert">
                    Please fill in all required fields correctly before submitting the form.
                </div>
            )}

            <div className="row">
                <form onSubmit={submitForm}>
                    <label className="fw-bold py-2">First Name :</label>
                    <div className="form-floating mb-3">
                        <input type="text" required
                            className={`form-control ${errors.nameErr && 'border-danger'}`}
                            id="floatingInputName"
                            placeholder="Enter your full name"
                            name="name"
                            value={userInputs.name}
                            onChange={setData}
                        />
                        <p className="text-danger"> {errors.nameErr}</p>
                    </div>
                    <label className="fw-bold py-2">Last Name :</label>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.usernameErr && 'border-danger'}`}
                            id="floatingInputUsername"
                            placeholder="Choose a username"
                            name="userName"
                            value={userInputs.userName}
                            onChange={setData}
                        />
                        <p className="text-danger"> {errors.usernameErr}</p>
                    </div>
                    <label className="fw-bold py-2">Your Email :</label>

                    <div className="form-floating mb-3">
                        <input type="email"
                            className={`form-control ${errors.emailErr && 'border-danger'}`}
                            id="floatingInputEmail"
                            placeholder="Enter your email address"
                            name="email"
                            value={userInputs.email}
                            onChange={setData}
                        />
                        <p className="text-danger"> {errors.emailErr}</p>
                    </div>
                    <label className="fw-bold py-2">Your Password :</label>
                    <div className="form-floating">
                        <input type="password"
                            className={`form-control ${errors.passwordErr && 'border-danger'}`}
                            id="floatingPassword"
                            placeholder="Create a password"
                            name="password"
                            value={userInputs.password}
                            onChange={setData}
                        />
                        <p className="text-danger"> {errors.passwordErr}</p>
                    </div>
                    <label className="fw-bold py-2">Repeat Your Password :</label>
                    <div className="form-floating">
                        <input type="password"
                            className={`form-control ${errors.RepassErr && 'border-danger'}`}
                            id="floatingConfirmPassword"
                            placeholder="Confirm your password"
                            name="Repass"
                            value={userInputs.Repass}
                            onChange={setData}
                        />
                        <p className="text-danger"> {errors.RepassErr}</p>
                    </div>
                    <button disabled={!userInputs.name || !userInputs.userName || !userInputs.email || !userInputs.password || !userInputs.Repass ||
                        errors.nameErr || errors.usernameErr || errors.RepassErr || errors.emailErr || errors.passwordErr}
                        type="submit"
                        className="btn btn-dark">Register Now</button>
                </form>
            </div>
        </div>
    );
}

export default FunFormReg;
