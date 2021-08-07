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
        dataIndex: 'name',
        title: 'Name',
    },
    {
        dataIndex: 'itemCode',
        title: 'Item Code',
    },
    {
        dataIndex: 'paidValue',
        title: 'Paid Value',
        render: (text, record, index) => {
            return (<Row>
                {record.paidValue + ' SYP'}
            </Row>);
        }
    },
    {
        dataIndex: 'date',
        title: 'Date',
    },
    {
        dataIndex: 'state',
        title: 'Status',
        render: (text, record, index) => {
            if (record.state === 1)
                return (
                    <>
                        <Row>
                            <Tag color='green'>
                                Paid
                            </Tag>
                        </Row>
                    </>
                );
            if (record.state === 2)
                return (
                    <>
                        <Row>
                            <Tag color='orange'>
                                Unpaid
                            </Tag>
                        </Row>
                    </>
                );
        }
    },

];
