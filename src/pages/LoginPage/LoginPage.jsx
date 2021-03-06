import React from 'react'
import './LoginPage.css'
import Main from '../../Components/Main/Main'
import Input from '../../Components/Input'
import { Helmet } from 'react-helmet'
import UserContext from '../../utils/UserContext'
import ErrorMessage from '../../Components/ErrorMessage/Error'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            message: ''
        }
    }
    static contextType = UserContext

    handleChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state
        try {
            const promise = await fetch(`http://localhost:9999/user/login`, {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const authToken = promise.headers.get('Authorization')
            document.cookie = `x-auth-token=${authToken}`
            const response = await promise.json()

            if (response.username && authToken) {
                this.context.user = { username: response.username, userId: response._id }
                window.location.href='/'
            }
            else if (response.message) {
                this.setState({ message: response.message })
            }

        } catch (e) {
            console.log(e);
        }

    }

    render() {
        const { username, password, message } = this.state

        return (
            <Main>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <div className="Container">
                    {message ? <ErrorMessage message={message} /> : null}
                    <h3>Login</h3>
                    <form className="Form-area" onSubmit={this.onSubmit}>
                        <Input value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label="Username"
                            id="username" />
                        <Input value={password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            label="Password"
                            type='password'
                            id="password" />
                            <br />
                        <button type="submit">Login</button>
                    </form>
                    <br />
                </div>
            </Main>
        )
    }

}

export default LoginPage