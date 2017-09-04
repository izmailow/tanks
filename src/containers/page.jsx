import React from 'react'
import { Header } from './header'
import { Chat } from './chat'
import io from 'socket.io-client'
import { Tank, Battlefield } from '../components'
import './style.css';

export class Page extends React.Component {
    
    keyDown = (e) => {
        console.log('press key', e)
    }

    componentWillMount = () => {
        document.addEventListener("keydown", this.keyDown);
        this.socket = io('http://localhost:3001')
    }

    render () {
        return (
            <div className="Page">
                <Header />
                <Chat socket={this.socket}/>
                <Battlefield>
                    <Tank id={1} color="red" socket={this.socket} />
                    <Tank id={2} color="green" socket={this.socket} />
                    <Tank id={3} color="yellow" socket={this.socket} />
                    <Tank id={4} color="LightSkyBlue" socket={this.socket} />
                </Battlefield>
            </div>
        )
    }
}
