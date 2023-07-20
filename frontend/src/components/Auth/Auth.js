import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import "./Auth.css";

export const Auth = (props) => {

    let [authMode, setAuthMode] = useState(props.role);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            navigate("/home");
        }
    });

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (authMode === "signup") {
            await fetch("http://localhost:5001/register", {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((r) => {
                console.log(r)
                alert('Account Created !, Login Now !!');
                navigate('/');
            }).catch((e) => {
                console.log(e);
                alert("Some Error Occurred");
            });
        } else {
            await fetch('http://localhost:5001/login', {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',

                }
            }).then(async (result) => {
                result = await result.json();
                if (result.result !== "no user found" && result.result !== "oh plz") {
                    alert('logged in')
                    console.log(result.user)
                    localStorage.setItem('user', JSON.stringify(result.user));
                    navigate('/home');
                } else {
                    alert('oh please ')
                }
            }).catch((e) => {
                console.log(e);
                alert("Some Error Occurred");
            });
        }
    };

    return (
        <div className="size-full Auth-form-container bg-primary">
            <fieldset>
                <legend className='h1 text-center text-white fw-bolder'>
                    Welcome to TakeMeToo <br /> <br />
                </legend>
                <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">{authMode === "signup" ? "Sign Up" : "Sign in"}</h3>
                        <div className="text-center">
                            {authMode === "signin" ? "Not registered yet?" : "Already registered?"}{" "}
                            <span className="link-primary cursor-pointer" onClick={changeAuthMode}>
                                {authMode === "signup" ? "Sign in" : "Sign up"}
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                placeholder={authMode === "signup" ? "Enter email address" : "Email address"}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder={authMode === "signup" ? "Password here" : "Enter your password"}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-4 mb-5">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}
