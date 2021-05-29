import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import defaultAvatar from '../userMenu/profile-default-image.jpg';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
    <div className={styles.user__card}>
        <img src={avatar} alt="avatar" width="15" />
        <span className={styles.user__name}>Welcome, {name}</span>
        <button onClick={onLogout} className={styles.logout__button}>
            Logout
        </button>
    </div>
);
const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
