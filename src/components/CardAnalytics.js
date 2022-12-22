import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./card.css"
import { CardContent } from './CardContent';

export const CardAnalytics = () =>
    <div className='card-analytics'>
        <Row className='w-100'>
            <Col xs={12} className="mb-5">
                <span className='title'>Analytics</span>
            </Col>
            <CardContent
                subject="Time since last analytics table generation"
                data="2187 h, 58 m, 7 s" />
            <CardContent
                subject="Last analytics table generation"
                data="July 22, 2022 at 06:55" />
            <CardContent
                subject="Server date"
                data="December 22, 2022 at 02:31" />
        </Row>
    </div>
