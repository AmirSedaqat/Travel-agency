import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styles from '../Styles/Form.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from "../components/Function/validate";
import { notify } from "../components/Function/toast";
const SignUp = () => {
    //Hooks
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false
    })
    useEffect(() => {
        setErrors(validate(data, 'signup'))
    }, [data])
    //State
    const [errors, setErrors] = useState({})
    const [toched, setToched] = useState({})

    //Handler
    const changeHandler = (event) => {
        if (event.target.name === 'isAccepted') {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const tochHandler = (e) => {
        setToched({ ...toched, [e.target.name]: true })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length) {
            notify('Invalid data !\nPlease Check your Form', 'error')
            setToched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        } else {
            notify('Your Sign In Successfully', 'success')
        }
    }



    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} autoComplete="off">
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                        className={(errors.name && toched.name) ? styles.unCompleted : (!toched.name) ? styles.formInput : (!errors.name && toched.name) ? styles.successfully : styles.unCompleted}
                        
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={tochHandler}
                    />
                    {errors.name && toched.name && <span>{errors.name} !</span>}
                </div>

                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={(errors.email && toched.email) ? styles.unCompleted : (!toched.email) ? styles.formInput : (!errors.email && toched.email) ? styles.successfully : styles.unCompleted}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={tochHandler} />
                    {errors.email && toched.email && <span>{errors.email} !</span>}
                </div>

                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={(errors.password && toched.password) ? styles.unCompleted : (!toched.password) ? styles.formInput : (!errors.password && toched.password) ? styles.successfully : styles.unCompleted}
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={tochHandler} />
                    {errors.password && toched.password && <span>{errors.password} ! </span>}
                </div>

                <div className={styles.formField}>
                    <label>Password Confirm</label>
                    <input
                        className={(errors.confirmPassword && toched.confirmPassword) ? styles.unCompleted : (!toched.confirmPassword) ? styles.formInput : (!errors.confirmPassword && toched.confirmPassword) ? styles.successfully : styles.unCompleted}
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={tochHandler} />
                    {errors.confirmPassword && toched.confirmPassword && <span>{errors.confirmPassword}  !</span>}
                </div>

                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I Accept terms of privacy policy</label>
                        <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={tochHandler} />
                    </div>
                    {errors.isAccepted && toched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons} >
                    <Link to='/login'>Login</Link>
                    <button type='submit'>SignUp</button>
                </div>

            </form>

            <ToastContainer theme='light' />
        </div>
    );
};

export default SignUp;