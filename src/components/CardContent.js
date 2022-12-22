import { Divider } from '@material-ui/core'
import React from 'react'
import { Col } from 'react-bootstrap'

const CardContent = ({subject,data}) => {
    return (
        <Col xs={12} className="grid-col mb-4">
            <span className='subtitle mb-1'>{subject}</span>
            <span className='text-muted'>{data}</span>
            <Divider />
        </Col>
    )
}

export { CardContent }