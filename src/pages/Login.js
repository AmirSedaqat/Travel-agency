import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Form.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validate } from "../components/Function/validate";
import { notify } from "../components/Function/toast";
const Login = () => {
    //Hooks
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    useEffect(() => {
        setErrors(validate(data, "login"));
    }, [data]);
    //State
    const [errors, setErrors] = useState({});
    const [toched, setToched] = useState({});

    //Handler
    const changeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const tochHandler = (e) => {
        setToched({ ...toched, [e.target.name]: true });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length) {
            notify("Invalid data!  Please Check your Form", "error");
            setToched({
                email: true,
                password: true,
            });
        } else {
            notify("Your Logged In Successfull", "success");
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} autoComplete="off">
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={errors.email && toched.email ? styles.unCompleted : !toched.email ? styles.formInput : !errors.email && toched.email ? styles.successfull : styles.unCompleted}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={tochHandler}
                    />
                    {errors.email && toched.email && <span>{errors.email} !</span>}
                </div>

                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={
                            errors.password && toched.password
                                ? styles.unCompleted
                                : !toched.password
                                ? styles.formInput
                                : !errors.password && toched.password
                                ? styles.successfully
                                : styles.unCompleted
                        }
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={tochHandler}
                    />
                    {errors.password && toched.password && <span>{errors.password} ! </span>}
                </div>
                <br />
                <br />
                <div className={styles.formButtons}>
                    <Link to="/signup">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>

            <ToastContainer theme="light" />
        </div>
    );
};

export default Login;
