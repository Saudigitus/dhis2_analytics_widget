import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./card.css"

export const CardAnalytics = () =>
    <div className='border card-analytics'>
        <Row className='w-100'>
            <Col xs={12}>
                <span className='title'>Analytics</span>
            </Col>
            <Col xs={12} className="grid-col">
                <span className='subtitle'>Time since last analytics table generation</span>
                <span className='text-muted'>2187 h, 58 m, 7 s</span>
            </Col>
            <Col xs={12} className="grid-col">
                <span className='subtitle'>Last analytics table generation</span>
                <span className='text-muted'>2187 h, 58 m, 7 s</span>
            </Col>
            <Col xs={12} className="grid-col">
                <span className='subtitle'>Server date</span>
                <span className='text-muted'>2187 h, 58 m, 7 s</span>
            </Col>
        </Row>
    </div>