import React from 'react'
import './style.css'

export const Tank = ({posX = 0, posY = 0, color = 'red'}) => {
    return (
        <div
            className="tank-wrap"
            style={{
                transform: 'translate('
                + posX + 'px, '
                + posY + 'px ) ',
                backgroundColor: color
            }}
        >
            Tank
        </div>
    )
}