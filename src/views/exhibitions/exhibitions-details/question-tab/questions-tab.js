/* eslint-disable react-hooks/exhaustive-deps */
import { Spin, Row, Typography, Button, Table, Modal, Col, Tooltip } from 'antd';
import React, { useState, useEffect } from 'react';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { columns } from './columns';
import AddCourseQuestionModal from "./add-exhibition-question";
import * as exhibitionsQuestionsServices from '../../../../services/exhibition/exhibition-question/index';
import * as exhibitionsQuestionAnswersServices from '../../../../services/exhibition/exhibition-question-answers';

const QuestionsTab = ({ exhibitionID }) => {

    const [isQuestionModalVisible, setQuestionModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [exhibitions, setCourses] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [exhibitionQuestion, setCourseQuestion] = useState();

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = () => {
        setSpinning(true);

        (async () => {
            await exhibitionsQuestionsServices.deleteQuestion(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const addQuestion = (values) => {
        (async () => {
            await exhibitionsQuestionsServices.addQuestion({ ...values, CourseID: Number(exhibitionID) });
            setQuestionModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const updateQuestion = (values) => {
        (async () => {
            await exhibitionsQuestionsServices.updateQuestion({ ...values, CourseID: Number(exhibitionID), id: record.id });
            setQuestionModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await exhibitionsQuestionsServices.showQuestionById(exhibitionID);
            setCourses(data.data.data);
            setSpinning(false);
        })();
    };
    const getQuestionAnswers = (record) => {
        setSpinning(true);
        (async () => {
            const data = await exhibitionsQuestionAnswersServices.showQuestionAnswerById(record.id);
            const questionsAnswers = data.data.data.map((answer) => {
                answer.state = answer.state === 1 ? true : false;
                return answer;
            });
            setCourseQuestion({
                questionsAnswers: questionsAnswers,
                title: record.title,
                CourseID: record.CourseID,
                type: record.type,
                id: record.id,
                required: record.required === 1 ? true : false,

            });
            setQuestionModalVisible(true);

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
                    <Col>
                        <Tooltip title={'Edit Course'}>
                            <Button
                                type='link'
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    setRecord(record);
                                    getQuestionAnswers(record);
                                    setIsUpdate(true);
                                }}
                            >
                                <EditOutlined />
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
                    <Button type='primary' onClick={() => {
                        setQuestionModalVisible(true);
                        setIsUpdate(false);
                    }} >
                        <Row align='middle'>
                            <PlusOutlined /> Add  Question
                        </Row>
                    </Button>
                </Row>
                <Row>
                    <Table dataSource={exhibitions} columns={[...columns, actionColumn]} style={{
                        width: '100%',
                        padding: ' 16px 0 0',
                        borderRadius: '7px'
                    }} />
                </Row>
                <AddCourseQuestionModal
                    isVisible={isQuestionModalVisible}
                    setVisible={setQuestionModalVisible}
                    addQuestion={addQuestion}
                    updateQuestion={updateQuestion}
                    formValues={exhibitionQuestion}
                    isUpdate={isUpdate} />
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