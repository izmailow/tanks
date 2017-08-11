import React from 'react'
import { Event } from 'react-socket-io';

export class Chat extends React.Component {

    state = {
        messages: []
    }

    onMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, message.msg]
        })
    }

    render () {
        return (
            <div>
                <Event event='chat message' handler={this.onMessage} />
                <ul>
                    {this.state.messages.map((e, i) => (<li key={i}>{e}</li>))}
                </ul>
            </div>
        )
    }
}