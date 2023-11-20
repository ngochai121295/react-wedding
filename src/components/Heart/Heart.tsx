import React from 'react'
import './Heart.css'

function Heart({ position, delay, distance }: any) {
    const blur = 20 * (1 - distance / window.innerHeight)
    return (
        <div
            className="heart"
            style={{
                left: position,
                animationDelay: `${delay}s`,
                fontSize: `30px`,
                filter: `blur(${blur}px)`,
            }}
        >
            <span role="img" aria-label="heart">
                ❤️
            </span>
        </div>
    )
}

export default Heart
