import React from 'react';
import { Col, Row, Tag } from "antd";

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
        dataIndex: 'title',
        title: 'Question',
    },
    {
        dataIndex: 'answers',
        title: 'Student Answer',
        render: (text, record, index) => {
            return (
                <Row>
                    <Tag color='orange' >
                        {record?.answers?.answer}
                    </Tag>

                </Row>
            );
        }
    },
    {
        dataIndex: 'answerQuestion',
        title: 'Question Answers',
        render: (text, record, index) => {
            return (
                <Row >
                    {record?.answerQuestion?.map((answer) => {
                        if (answer?.state === 1)
                            return (
                                <>
                                    <Col>
                                        <Tag color='green' >
                                            {answer?.title}
                                        </Tag>
                                    </Col>
                                </>
                            );
                        if (answer?.state === 2)
                            return (
                                <>
                                    <Col>
                                        <Tag color='red' >
                                            {answer?.title}
                                        </Tag>
                                    </Col>
                                </>
                            );
                        return (<Col> </Col>);
                    })}
                </Row>
            );


        },
    },
];
