import React from 'react';
import { Row, Tag } from "antd";


export const columns = [
    {
        dataIndex: 'id',
        title: 'Id',
    },
    {
        dataIndex: 'title',
        title: 'Title',
    },

    {
        dataIndex: 'type',
        title: 'Type',
        render: (text, record, index) => {
            if (record.type === 1)
                return (
                    <>
                        <Row>
                            Free Question
                        </Row>
                    </>
                );
            if (record.type === 2)
                return (
                    <>
                        <Row>
                            Check Box
                        </Row>
                    </>
                );
            if (record.type === 3)
                return (
                    <>
                        <Row>
                            Radio Box
                        </Row>
                    </>
                );
        },
    },
    {
        dataIndex: 'required',
        title: 'Required',
        render: (text, record, index) => {
            if (record.required === 1)
                return (
                    <>
                        <Row>
                            <Tag color='green' >
                                Yes
                            </Tag>
                        </Row>
                    </>
                );
            if (record.required === 0)
                return (
                    <>
                        <Tag color='red' >
                            No
                        </Tag>
                    </>
                );
        },
    },
];
