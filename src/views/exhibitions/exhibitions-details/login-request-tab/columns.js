import React from 'react';
import { Row, Tag } from "antd";

export const columns = [
    {
        dataIndex: 'id',
        title: 'Id',
        render: (text, record, index) => {
            return (<Row>
                {index + 1}
            </Row>);
        }
    },
    {
        dataIndex: 'StudentName',
        title: 'Student',
        render: (text, record, index) => {
            return (<Row>
                {record?.student?.firstName + ' ' + record?.student?.lastName}
            </Row>);
        }
    },
    {
        dataIndex: 'CurrentStudents',
        title: 'Status',
        render: (text, record, index) => {
            if (record.state === 1)
                return (
                    <>
                        <Row>
                            <Tag color='green' >
                                Accepted
                            </Tag>
                        </Row>
                    </>
                );
            if (record.state === 0)
                return (
                    <>
                        <Tag color='red' >
                            Rejected
                        </Tag>
                    </>
                );
        },
    },
];
