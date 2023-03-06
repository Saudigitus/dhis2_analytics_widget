import { CircularLoader } from '@dhis2/ui-core';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import "./card.css"
import { CardContent } from './CardContent';

export const CardAnalytics = () => {
    const { data, loading, error } = useFetch();

    if(error){
        
    }

    return (
        <div className='card-analytics'>
            {
                loading || (data === null && error==null) ?
                    <div className='isLoading'>
                        <CircularLoader />
                    </div>
                    :
                    <Row className='w-100'>
                        <CardContent data={data} />
                    </Row>
            }
        </div>
    )
}
