import React, { Suspense, Component, lazy } from 'react';
import { Switch } from 'react-router-dom';

// Components
import AppBar from './component/userMenu/AppBar';
import routes from './routes';
import PrivateRoute from './component/userMenu/PrivateRoute';
import PublicRoute from './component/userMenu/PublicRoute';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

// Lazy load
const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
    componentDidMount() {
        this.props.onRefresh();
    }
    render() {
        return (
            <>
                <AppBar />

                <Suspense fallback={<h1>Загружаем!</h1>}>
                    <Switch>
                        <PublicRoute
                            exact
                            path={routes.home}
                            component={HomeView}
                        />
                        <PublicRoute
                            restricted
                            redirectTo="/contacts"
                            path={routes.register}
                            component={RegisterView}
                        />
                        <PublicRoute
                            restricted
                            redirectTo="/contacts"
                            path={routes.login}
                            component={LoginView}
                        />
                        <PrivateRoute
                            path={routes.contacts}
                            component={ContactsView}
                        />
                    </Switch>
                </Suspense>
            </>
        );
    }
}
const mapDispatchToProps = {
    onRefresh: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
