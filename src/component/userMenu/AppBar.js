import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import React from 'react';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import Container from '../container/Container';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
    return (
        <header className={styles.page__header}>
            {/* <div className={styles.header__container}> */}
            <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
            {/* </div> */}
        </header>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
