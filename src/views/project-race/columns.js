import React from 'react';
import { Row } from "antd";

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
        dataIndex: 'location',
        title: 'Location',
    },
    {
        dataIndex: 'startDate',
        title: 'Duration',
        render: (text, record, index) => {
            return (
                <>
                    <Row>
                        {record.startDate + ' to ' + record.endDate}
                    </Row>
                </>
            );
        },
    },
    {
        dataIndex: 'manager',
        title: 'Manager',

    },
    {
        dataIndex: 'description',
        title: 'Description',
    },
];
