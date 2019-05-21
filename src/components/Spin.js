import React from 'react';
import { Alert, Spin } from 'antd';
import './Spin.css';

export default () => {
    return (
        <section className={'spin-wrapper'}>
            <Spin tip="Loading...">
                <Alert/>
            </Spin>
        </section>
    )
}