/* eslint-disable react-hooks/exhaustive-deps */
import { Spin, Row, Typography, Button, Table, Modal, Col, Tooltip } from 'antd';
import React, { useState, useEffect } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { columns } from './columns';
import AddCourseQuestionModal from "./add-course-question";
import * as coursesQuestionsServices from '../../../../services/courses/question-course/index';

const QuestionsTab = ({ courseID }) => {

    const [isQuestionModalVisible, setQuestionModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const handleDelete = () => {
        setSpinning(true);

        (async () => {
            await coursesQuestionsServices.deleteQuestion(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const addQuestion = (values) => {
        (async () => {
            await coursesQuestionsServices.addQuestion({ ...values, CourseID: Number(courseID) });
            setQuestionModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await coursesQuestionsServices.showQuestionById(courseID);
            setCourses(data.data.data);
            setSpinning(false);
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
                        <Tooltip title={'Delete Question'}>
                            <Button
                                type='link'
                                danger
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    setDeleteModalVisible(true);
                                    setRecord(record);
                                }}
                            >
                                <DeleteOutlined />
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
                <Row justify='end' align='middle'>
                    <Button type='primary' onClick={() => setQuestionModalVisible(true)} >
                        <Row align='middle'>
                            <PlusOutlined /> Add  Question
                        </Row>
                    </Button>
                </Row>
                <Row>
                    <Table dataSource={courses} columns={[...columns, actionColumn]} style={{
                        width: '100%',
                        padding: ' 16px 0 0',
                        borderRadius: '7px'
                    }} />
                </Row>
                <AddCourseQuestionModal
                    isVisible={isQuestionModalVisible}
                    setVisible={setQuestionModalVisible}
                    addQuestion={addQuestion}
                    formValues={record} />
                <Modal
                    title='Delete  Question'
                    visible={isDeleteModalVisible}
                    onCancel={() => { setDeleteModalVisible(false); }}
                    onOk={() => handleDelete()}

                >
                    <Typography.Text strong>
                        Are you Sure You Want To Delete This  Question ?
                    </Typography.Text>

                </Modal>
            </Spin>
        </>
    );
};

export default QuestionsTab;