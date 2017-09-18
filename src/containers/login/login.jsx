import React from 'react'
import axios from 'axios'
import { RaisedButton, TextField, CircularProgress } from 'material-ui'
import { Redirect } from 'react-router'
import './style.css'

export class Login extends React.Component {
    state = {
        status: "",
        message: "",
        login: "",
        pass: "",
    }

    click = () => {
        this.setState({status:"authorization", message: ""})
        axios.get(`/api/?login=${this.state.login}&pass=${this.state.pass}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(
            (response) => {
                console.log(response)
                //const resp = JSON.parse(response)
                if (response.data.sesionID) {
                    this.setState({status:"authorized", message: "Успешно! Перенапраляю."})
                    window.location.replace("/tanks")
                } else {
                    this.setState({status:"", message: "Что то не верно."})
                }
            }
        ).catch(() => {
            this.setState({status:"", message: "Запрос на сервер не удался."})
        })
    }

    onLoginChange = (e) => {
        this.setState({login: e.target.value})
    }

    onPassChange = (e) => {
        this.setState({pass: e.target.value})
    }

    render () {
        return (
            <div className="login">
                <h3>Welcome</h3>
                <p>
                    <TextField name="login" floatingLabelText="Логин" onChange={this.onLoginChange} />
                    <TextField name="pass" floatingLabelText="Пароль" type="password" onChange={this.onPassChange} />
                </p>
                <p>
                    <RaisedButton
                        label="Войти"
                        primary
                        //href="tanks"
                        disabled={this.state.status !== ""}
                        onClick={this.click}
                    />
                </p>
                {this.state.status && <CircularProgress />}
                {this.state.message &&
                <p>
                    {this.state.message}
                </p>}
            </div>
        )
    }
}