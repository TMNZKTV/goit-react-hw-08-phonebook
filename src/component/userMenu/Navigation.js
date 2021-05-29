import React from 'react';
import { Link } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';
import { connect } from 'react-redux';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
    return (
        <nav className={styles.nav}>
            <Link to={routes.home} className={styles.nav__link}>
                Main
            </Link>
            {isAuthenticated && (
                <Link to={routes.contacts} className={styles.nav__link}>
                    Contacts
                </Link>
            )}
        </nav>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
