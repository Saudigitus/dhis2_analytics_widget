import { CircularLoader } from '@dhis2/ui-core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import { dateFormater } from '../utils/dateFormater';
import "./card.css"
import { CardContent } from './CardContent';

export const CardAnalytics = () => {
    const { data, loading, error } = useFetch();

    return (
        <div className='card-analytics'>
            {
                loading ? <CircularLoader small /> :
                    <Row className='w-100'>
                        <Col xs={12} className="mb-5">
                            <span className='title'>Analytics</span>
                        </Col>
                        {
                            data?.map((analytic, index) => (
                                <CardContent
                                    key={index}
                                    subject={analytic.name}
                                    data={analytic.value}
                                />
                            ))
                        }

                    </Row>
            }
        </div>
    )
}
