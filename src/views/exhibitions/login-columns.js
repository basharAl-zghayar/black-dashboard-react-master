import React from 'react';
import { Row, Tag } from "antd";

export const logColumns = [
    {
        dataIndex: 'id',
        title: 'Id',
    },
    {
        dataIndex: 'Course',
        title: 'Exhibition',
        render: (text, record, index) => {

            return (
                <>
                    <Row>
                        {record.opportunity?.title}
                    </Row>
                </>
            );
        },
    },

    {
        dataIndex: 'state',
        title: 'State',
        render: (text, record, index) => {
            if (record?.state === 3)
                return (
                    <>
                        <Row>
                            <Tag color='green' >
                                Accepted
                            </Tag>
                        </Row>
                    </>
                );
            if (record?.state === 2)
                return (
                    <>
                        <Tag color='red' >
                            Rejected
                        </Tag>
                    </>
                );
            if (record?.state === 1)
                return (
                    <>
                        <Tag color='blue' >
                            Stuck
                        </Tag>
                    </>
                );
        },

    },
];
