import React from 'react';
import { Row, Tag } from "antd";

export const columns = [
    {
        dataIndex: 'id',
        title: 'Id',
    },
    {
        dataIndex: 'scope',
        title: 'Scope',
    },
    {
        dataIndex: 'freeDesks',
        title: 'Free Desks',
    },
    {
        dataIndex: 'lastDateForRegister',
        title: 'Last Date For Register',
    },

    {
        dataIndex: 'type',
        title: 'Type',
        render: (text, record, index) => {
            if (record.type === 1) {
                return (
                    <>
                        <Row>
                            <Tag color='green'>
                                Placement
                            </Tag>
                        </Row>
                    </>
                );
            } else if (record.type === 2) {
                return (
                    <>
                        <Row>
                            <Tag color='orange'>
                                Training
                            </Tag>

                        </Row>
                    </>
                );
            }
        },
    },
    {
        dataIndex: 'time',
        title: 'Work Time',
        render: (text, record, index) => {
            if (record.time === 1) {
                return (
                    <>
                        <Row>
                            <Tag color='green'>
                                Part Time
                            </Tag>
                        </Row>
                    </>
                );
            } else if (record.time === 2) {
                return (
                    <>
                        <Row>
                            <Tag color='orange'>
                                Full Time
                            </Tag>

                        </Row>
                    </>
                );
            }
        },
    },
    {
        dataIndex: 'state',
        title: 'State',
        render: (text, record, index) => {
            if (record.state === 1) {
                return (
                    <>
                        <Row>
                            <Tag color='green'>
                                Active
                            </Tag>
                        </Row>
                    </>
                );
            } else if (record.state === 2) {
                return (
                    <>
                        <Row>
                            <Tag color='orange'>
                                Inactive
                            </Tag>

                        </Row>
                    </>
                );
            } else if (record.state === 3) {
                return (
                    <>
                        <Row>
                            <Tag color='red'>
                                Deleted
                            </Tag>

                        </Row>
                    </>
                );
            } else if (record.state === 2) {
                return (
                    <>
                        <Row>
                            <Tag color='gray'>
                                Finished
                            </Tag>

                        </Row>
                    </>
                );
            }
        },
    },

];
