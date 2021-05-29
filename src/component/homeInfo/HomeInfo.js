import React from 'react';
import styles from '../homeInfo/HomeInfo.module.css';
// import Container from '../container/Container/';

const HomeInfo = () => {
    return (
        <>
            <h1 className={styles.title}>
                Welcome to your personal contacts book!
            </h1>

            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </>
    );
};

export default HomeInfo;
