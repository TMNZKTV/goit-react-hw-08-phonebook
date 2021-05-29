import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Container from '../component/container/Container';
import RegisterForm from '../component/registerForm/RegisterForm';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <Container>
                <RegisterForm
                    name={name}
                    email={email}
                    password={password}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                {/* <h1>This is Register Page</h1>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <label>
                        Имя
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Почта
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Пароль
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit">Зарегистрироваться</button>
                </form> */}
            </Container>
        );
    }
}

const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
