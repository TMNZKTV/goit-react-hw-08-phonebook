import React from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm = ({
    name,
    email,
    password,
    handleSubmit,
    handleChange,
}) => {
    return (
        <>
            <h1 className={styles.title}>This is Register Page</h1>

            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className={styles.form}
            >
                <label className={styles.label}>
                    <span className={styles.label__text}> Name </span>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
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

                <button type="submit" className={styles.register__button}>
                    Register
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
