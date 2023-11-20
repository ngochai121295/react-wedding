import React, { CSSProperties } from 'react'

interface IProps {
    children: any
    style?: CSSProperties
}

function Container({ children, style }: IProps) {
    return (
        <div
            style={{
                overflow: 'hidden',
                height: '100vh',
                background: `linear-gradient(#FFFFFF, rgba(247, 239, 236, 1))`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                ...style,
            }}
        >
            {children}
        </div>
    )
}

export default Container;
