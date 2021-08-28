import React from 'react';
import { Row } from "antd";


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
        dataIndex: 'collage',
        title: 'Collage',
        render: (text, record, index) => {
            return (<Row>
                {record?.student?.collage}
            </Row>);
        }
    },
    {
        dataIndex: 'specialization',
        title: 'Specialization',
        render: (text, record, index) => {
            return (<Row>
                {record?.student?.specialization}
            </Row>);
        }
    },

];
