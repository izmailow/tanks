import React from 'react'
import { Header } from './header'
import { Chat } from './chat'
import { Tank, Battlefield } from '../components'
import './style.css';

export class Page extends React.Component {

    render () {
        return (
            <div className="Page">
                <Header />
                <Chat />
                <Battlefield>
                    <Tank color="red" />
                    <Tank color="green" />
                    <Tank color="yellow" />
                    <Tank color="LightSkyBlue" />
                </Battlefield>
            </div>
        )
    }
}
