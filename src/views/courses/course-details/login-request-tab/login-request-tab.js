/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Spin, Row, Typography, Button, Table, Modal, Col, Tooltip } from 'antd';
import React, { useState, useEffect, useCallback } from 'react';
import { CheckOutlined, CloseOutlined, FileSearchOutlined } from '@ant-design/icons';
import { columns } from './columns';
import * as coursesLoginRequestServices from '../../../../services/courses/course-login-request/index';
import * as coursesAnswersServices from '../../../../services/courses/course-answers';
import * as studentServices from '../../../../services/students/index';
import StudentAnswersModal from './login-request-answers';

const LoginRequestsTab = ({ courseID, getQuestions }) => {

    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [courseLoginRequests, setCourseLoginRequests] = useState([]);
    const [isAcceptModalVisible, setAcceptModalVisible] = useState(false);
    const [isRejectModalVisible, setRejectModalVisible] = useState(false);
    const [loginRequestModalVisible, setLoginRequestModalVisible] = useState(false);
    const [courseQuestions, setCourseQuestions] = useState([]);
    const [studentAnswers, setStudentAnswers] = useState([]);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        setCourseLoginRequests(dataSource);

    }, [dataSource]);


    useEffect(() => {
        getQuestions(setCourseQuestions, setSpinning);
    }, []);

    const getData = useCallback(() => {
        setSpinning(true);
        (async () => {
            const data = await coursesLoginRequestServices.showCourseLoginRequestById(Number(courseID));
            const val = [];
            const values = data.data.data.map((request) => {
                setSpinning(true);

                (async () => {
                    const student = await studentServices.showStudentById(request?.studentID);
                    request.student = student.data.data;
                    val.push(request);
                })();
                setDataSource(val);
                return request;
            });
            setDataSource(values);


            setSpinning(false);
        })();
    }, []);
    const AcceptRequest = () => {
        setSpinning(true);
        (async () => {
            await coursesLoginRequestServices.acceptLoginRequest({ studentID: record.studentID, courseID: courseID });
            getData();
            setAcceptModalVisible(false);
            setSpinning(false);
        })();
    };
    const RejectRequest = () => {
        setSpinning(true);
        (async () => {
            await coursesLoginRequestServices.rejectLoginRequest({ studentID: record.studentID, courseID: courseID });
            getData();
            setRejectModalVisible(false);
            setSpinning(false);
        })();
    };

    const getStudentAnswers = (studentID) => {

        (async () => {
            const data = await coursesAnswersServices.showStudentAnswer(studentID);
            setStudentAnswers(data.data.data);
        })();
    };

    const actionColumn = {
        key: 'actions',
        width: '13%',
        className: 'actions',
        render: (text, record, index) => {
            return (
                <Row justify="space-between">

                    <Col>
                        <Tooltip title={'View Student Answers'}>
                            <Button
                                type='link'
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    setLoginRequestModalVisible(true);
                                    getStudentAnswers(record?.studentID);
                                }}
                            >
                                <FileSearchOutlined />
                            </Button>
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title={'Decline Request'}>
                            <Button
                                type='link'
                                size="small"
                                danger
                                shape="circle"
                                onClick={() => {
                                    setRejectModalVisible(true);
                                    setRecord(record);
                                }}
                            >
                                <CloseOutlined />
                            </Button>
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title={'Accept Request'}>
                            <Button
                                type='link'
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    setAcceptModalVisible(true);
                                    setRecord(record);
                                }}
                            >
                                <CheckOutlined />
                            </Button>
                        </Tooltip>
                    </Col>
                </Row>
            );
        },
    };
    return (
        <>
            <Spin spinning={spinning} >
                <Row>
                    <Table dataSource={courseLoginRequests} columns={[...columns, actionColumn]} style={{
                        width: '100%',
                        padding: ' 16px 0 0',
                        borderRadius: '7px'
                    }} />
                </Row>
                <Modal
                    title='Accept Request'
                    visible={isAcceptModalVisible}
                    onCancel={() => { setAcceptModalVisible(false); }}
                    onOk={() => AcceptRequest()}

                >
                    <Typography.Text strong>
                        Are you Sure You Want To Accept This Request ?
                    </Typography.Text>
                </Modal>
                <Modal
                    title='Reject Request'
                    visible={isRejectModalVisible}
                    onCancel={() => { setRejectModalVisible(false); }}
                    onOk={() => RejectRequest()}

                >
                    <Typography.Text strong>
                        Are you Sure You Want To Reject This Request ?
                    </Typography.Text>
                </Modal>
                <StudentAnswersModal
                    isVisible={loginRequestModalVisible}
                    setVisible={setLoginRequestModalVisible}
                    questions={courseQuestions}
                    answers={studentAnswers} />
            </Spin>
        </>
    );
};

export default LoginRequestsTab;