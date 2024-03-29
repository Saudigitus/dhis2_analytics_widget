import { Divider } from '@dhis2/ui-core'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const CardContent = ({ data }) => {
    return (
        <>
            <Col xs={12} md={6} className="grid-col mb-4">
                <span className='subtitle mb-1'>{data[0]?.name}</span>
                <span className="text-muted big-title">{data[0]?.value}</span>
            </Col>
            <Col xs={12} md={6}>
                <Row>
                    <Col xs={12} lg={6} className="grid-col mb-4">
                        <span className='subtitle mb-1'>{data[1]?.name}</span>
                        <span className="text-muted normal-title">{data[1]?.value}</span>
                        <div className="divider">
                            <Divider />
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="grid-col mb-4">
                        <span className='subtitle mb-1'>{data[2]?.name}</span>
                        <span className="text-muted normal-title">{data[2]?.value}</span>
                    </Col>
                </Row>
            </Col>
            
        </>
    )
}

export { CardContent }