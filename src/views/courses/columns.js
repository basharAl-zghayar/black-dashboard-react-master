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
        dataIndex: 'CurrentStudents',
        title: 'Students',
        render: (text, record, index) => {

            return (
                <>
                    <Row>
                        {record.CurrentStudents + ' /' + record.maxStudents}
                    </Row>
                </>
            );
        },
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
        dataIndex: 'startTime',
        title: 'Time',
        render: (text, record, index) => {
            return (
                <>
                    <Row>
                        {record.startTime + ' to ' + record.endTime}
                    </Row>
                </>
            );
        },
    },
    {
        dataIndex: 'cost',
        title: 'Cost',
        render: (text, record, index) => {
            return (
                <>
                    <Row>
                        {record.cost + ' SYP'}
                    </Row>
                </>
            );
        },
    },
    {
        dataIndex: 'couchName',
        title: 'Couch',

    },

];
