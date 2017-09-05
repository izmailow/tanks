import React from 'react'
import './style.css';

export class Chat extends React.Component {

    state = {
        messages: [],
        clients: []
    }

    componentWillMount () {
        this.props.socket.on('chat message', message => {
            this.setState({
                messages: [...this.state.messages, {user: message.user, msg: message.msg}],
                clients: message.clients
            })
            if (this.state.messages.length > 3) {
                clearTimeout(this.timer);

                this.timer = setTimeout( () => {
                    this.setState({
                        messages: this.state.messages.splice(this.state.messages.length - 3)
                    })
                }, 3000)
            }
        })
    }

    handleSend = event => {
        if (event.keyCode === 13) {
            this.props.socket.emit('chat message', { user: "Сервер", msg: event.target.value});
            event.target.value = ''
        }
    }

    render () {
        return (
            <div className="chat-wrap">
                Чатик (последние 3):
                <ul>
                    {this.state.messages.map((e, i) => (<li key={i}>{e.user}: {e.msg}</li>))}
                </ul>
                <input type="text" onKeyUp={this.handleSend}/>
                Пользователей: {this.state.clients.length}
            </div>
        )
    }
}