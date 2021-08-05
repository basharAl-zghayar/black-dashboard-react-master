import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Col, Spin, Tooltip, Typography, Card } from 'antd';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { columns } from './columns';
import AddCourseModal from './add-modal';
import * as coursesServices from '../../services/courses/index';
import * as coursesQuestionsServices from '../../services/courses/question-course/index';
import AddCourseQuestionModal from "./add-course-question";
import AppConst from "app-consts";

function Courses(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isQuestionModalVisible, setQuestionModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await coursesServices.showAllCourses();
            setCourses(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            await coursesServices.deleteCourse(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const addQuestion = (values) => {
        (async () => {
            await coursesQuestionsServices.addQuestion(values);
            setQuestionModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {

        (async () => {
            await coursesServices.addCourse(values);
            setModalVisible(false);
            getData();

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
                        <Tooltip title={'Delete Course'}>
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
                                    setModalVisible(true);
                                }}
                            >
                                <EditOutlined />
                            </Button>
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title={'Add Question'}>
                            <Button
                                type='link'
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    window.location.href = `${AppConst.baseUrl}/admin/courses/${record.id}`;
                                }}
                            >
                                <ArrowRightOutlined />
                            </Button>
                        </Tooltip>
                    </Col>

                </Row>
            );
        },
    };


    return (
        <>
            <div className="content">
                <Card style={{ minHeight: '85vh', borderRadius: '5px' }}>
                    <Spin spinning={spinning} >
                        <Row justify='end' align='middle'>
                            <Button type='primary' onClick={() => setModalVisible(true)} >
                                <Row align='middle'>
                                    <PlusOutlined /> Add  Course
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
                        <AddCourseModal
                            isVisible={isModalVisible}
                            setVisible={setModalVisible}
                            addCourse={onFinish}
                            formValues={record} />
                        <AddCourseQuestionModal
                            isVisible={isQuestionModalVisible}
                            setVisible={setQuestionModalVisible}
                            addQuestion={addQuestion}
                            formValues={record} />
                        <Modal
                            title='Delete  Course'
                            visible={isDeleteModalVisible}
                            onCancel={() => { setDeleteModalVisible(false); }}
                            onOk={() => handleDelete()}

                        >
                            <Typography.Text strong>
                                Are you Sure You Want To Delete This  Course ?
                            </Typography.Text>

                        </Modal>
                    </Spin>
                </Card>
            </div>
        </>
    );
}

export default Courses;
