import { Divider } from '@dhis2/ui-core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./card.css"

export const CardAnalytics = () =>
    <div className='border card-analytics'>
        <Row className='w-100'>
            <Col xs={12} className="mb-5">
                <span className='title'>Analytics</span>
            </Col>
            <Col xs={12} className="grid-col mb-3">
                <span className='subtitle mb-1'>Time since last analytics table generation</span>
                <span className='text-muted'>2187 h, 58 m, 7 s</span>
                <Divider/>
            </Col>
            <Col xs={12} className="grid-col mb-3">
                <span className='subtitle mb-1'>Last analytics table generation</span>
                <span className='text-muted'>2187 h, 58 m, 7 s</span>
                <Divider/>
            </Col>
            <Col xs={12} className="grid-col mb-3">
                <span className='subtitle mb-1'>Server date</span>
                <span className='text-muted'>2187 h, 58 m, 7 s</span>
                <Divider/>
            </Col>
        </Row>
    </div>
