import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Container from '../component/container/Container';
import Login from '../component/login/Login';

class LoginView extends Component {
    state = {
        email: '',
        login: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <Container>
                <Login
                    email={email}
                    password={password}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </Container>
        );
    }
}
const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
