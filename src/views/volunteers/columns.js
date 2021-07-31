import React from 'react';
import { Row } from "antd";

export const columns = [
    {
        dataIndex: 'id',
        title: 'Id',
    },
    {
        dataIndex: 'firstName',
        title: 'Name',
        render: (text, record, index) => {
            return (
                <>
                    <Row>
                        {record.firstName + ' ' + record.lastName}
                    </Row>
                </>
            );
        },
    },
    {
        dataIndex: 'phone',
        title: 'Phone',
    },
    {
        dataIndex: 'section',
        title: 'Section',
    },
    {
        dataIndex: 'specialization',
        title: 'Specialization',
    },
    {
        dataIndex: 'college',
        title: 'College',
    },

];
