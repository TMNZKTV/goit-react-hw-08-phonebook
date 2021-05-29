import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={styles.auth__nav}>
            <NavLink className={styles.auth__link} to="/register" exact>
                Register
            </NavLink>

            <NavLink className={styles.auth__link} to="/login" exact>
                Login
            </NavLink>
        </div>
    );
};

export default AuthNav;
