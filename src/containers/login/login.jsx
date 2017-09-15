import React from 'react'
import axios from 'axios'
import { RaisedButton, TextField } from 'material-ui'
import { Redirect } from 'react-router'
import './style.css'

export class Login extends React.Component {
    state = {
        status: "",
        message: ""
    }

    click = () => {
        this.setState({status:"logignig", message: ""})
        axios.get('/api/?name=guest&pass=', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(
            (response) => {
                console.log(response)
                //const resp = JSON.parse(response)
                if (response.data.sesionID) {
                    this.setState({status:"login", message: "Успешно! Перенапраляю."})
                    window.location.replace("/tanks")
                } else {
                    this.setState({status:"", message: "Что то не верно."})
                }
            }
        ).catch(() => {
            this.setState({status:"", message: "Запрос на сервер не удался."})
        })
    }

    render () {
        return (
            <div className="login">
                <h3>Welcome</h3>
                <TextField name="login" hintText="Логин"/>
                <TextField name="pass" hintText="Пароль" type="password"/>
                <RaisedButton
                    label="Войти"
                    primary
                    //href="tanks"
                    disabled={this.state.status !== ""}
                    onClick={this.click}
                />
                {this.state.message &&
                <p>
                    {this.state.message}
                </p>}
            </div>
        )
    }
}