import React from 'react'
import io from 'socket.io-client'
import './style.css';

export class Chat extends React.Component {

    state = {
        messages: []
    }

    componentWillMount () {
        this.socket = io('http://localhost:3001')
        this.socket.on('chat message', message => {
            this.setState({
                messages: [...this.state.messages, message.msg]
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
            this.socket.emit('chat message', { user: "Сервер", msg: event.target.value});
            event.target.value = ''
        }
    }

    render () {
        return (
            <div className="chat-wrap">
                Чатик (последние 3):
                <ul>
                    {this.state.messages.map((e, i) => (<li key={i}>{e}</li>))}
                </ul>
                <input type="text" onKeyUp={this.handleSend}/>
            </div>
        )
    }
}