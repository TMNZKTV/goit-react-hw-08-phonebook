import React from 'react';
import styles from './Login.module.css';

const Login = ({ email, password, handleSubmit, handleChange }) => {
    return (
        <>
            <h1 className={styles.title}>This is Login Page</h1>

            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className={styles.form}
            >
                <label className={styles.label}>
                    <span className={styles.label__text}> Email </span>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.label}>
                    <span className={styles.label__text}> Password </span>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" className={styles.login__button}>
                    {' '}
                    Login{' '}
                </button>
            </form>
        </>
    );
};

export default Login;
