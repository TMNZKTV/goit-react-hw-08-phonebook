import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

// Если маршрут ограниченный и пользователь залогинен - отправка на /contacts
// Если нет - рендер компонента

const PublicRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isAuthenticated && routeProps.restricted ? (
                <Redirect to={redirectTo} />
            ) : (
                <Component {...props} />
            )
        }
    />
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(PublicRoute);
