import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

interface IProps {
    heading: string
    content: string
}

function AlertCustom({ heading, content }: IProps) {
    const [show, setShow] = useState(true)

    if (show) {
        return (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{heading}</Alert.Heading>
                <p>{content}</p>
            </Alert>
        )
    }
}

export default AlertCustom
