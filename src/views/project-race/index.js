import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Col, Spin, Tooltip, Typography, Card, Tabs } from 'antd';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { columns } from './columns';
import { logColumns } from './login-columns';
import AddProjectRaceModal from './add-modal';
import { useHistory } from "react-router-dom";
import * as projectRaceServices from '../../services/projects-races';
import * as exhibitionLoginServices from '../../services/projects-races/projects-races-login-request';
import AddLoginRequestModal from "./login-request";

function ProjectRace(props) {
    const history = useHistory();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [projectRace, setProjectRace] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [logModalVisible, setLogModalVisible] = useState(false);
    const [loginRequests, setLoginRequests] = useState([]);
    const id = localStorage.getItem('userId');
    const type = localStorage.getItem('userType');
    useEffect(() => {
        if (type === '2') {
            (async () => {
                const data = await exhibitionLoginServices.showOpportunityLoginRequestByStudentId(id);
                setLoginRequests(data?.data?.data);

            })();

        }
    }, [id, type]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await projectRaceServices.showAllProjectsRaces();
            setProjectRace(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            await projectRaceServices.deleteProjectsRaces(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {

        (async () => {
            await projectRaceServices.addProjectsRaces(values);
            setModalVisible(false);
            getData();

        })();
    };
    const updateProjectRace = (values) => {

        (async () => {
            await projectRaceServices.updateProjectsRaces({ ...values, id: record.id });
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
                type === '2' ? <Col>
                    <Tooltip title={'Add Request'}>
                        <Button
                            type='link'
                            size="small"
                            shape="circle"
                            onClick={() => {
                                setRecord(record);
                                setLogModalVisible(true);
                            }}
                        >
                            Add Request
                        </Button>
                    </Tooltip>
                </Col> :
                    <Row justify="space-between">
                        <Col>
                            <Tooltip title={'Delete Project Race'}>
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
                            <Tooltip title={'Edit Project Race'}>
                                <Button
                                    type='link'
                                    size="small"
                                    shape="circle"
                                    onClick={() => {
                                        setRecord(record);
                                        setModalVisible(true);
                                        setIsUpdate(true);
                                    }}
                                >
                                    <EditOutlined />
                                </Button>
                            </Tooltip>
                        </Col>
                        <Col>
                            <Tooltip title={'ProjectRace Details'}>
                                <Button
                                    type='link'
                                    size="small"
                                    shape="circle"
                                    onClick={() => {
                                        history.push(`project-race-details/${record.id}`);
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

    const addLogRequest = (values) => {
        const studentID = localStorage.getItem('userId');
        const data = {};
        data.studentID = Number(studentID);
        data.projectsRaceID = record.id;
        data.state = 1;
        data.Answers = values;
        (async () => {
            await exhibitionLoginServices.addProjectsRaceLoginRequest(data);
            setLogModalVisible(false);
        })();
    };
    return (
        <>
            <div className="content">
                <Card style={{ minHeight: '85vh', borderRadius: '5px' }}>
                    <Tabs>
                        <Tabs.TabPane tab='Project Races' key='courses'>
                            <Spin spinning={spinning} >
                                {type === '2' ? null : <Row justify='end' align='middle'>

                                    <Button type='primary' onClick={() => {
                                        type === '2' ? setLogModalVisible(true) :
                                            setModalVisible(true);
                                        setIsUpdate(false);
                                    }} >
                                        {type === '2' ? <Row align='middle'>
                                            <PlusOutlined /> Login  Course
                                        </Row> :
                                            <Row align='middle'>
                                                <PlusOutlined /> Add Project Race
                                            </Row>}
                                    </Button>
                                </Row>}
                                <Row>
                                    <Table dataSource={projectRace} columns={[...columns, actionColumn]} style={{
                                        width: '100%',
                                        padding: ' 16px 0 0',
                                        borderRadius: '7px'
                                    }} />
                                </Row>
                                <AddProjectRaceModal
                                    isVisible={isModalVisible}
                                    setVisible={setModalVisible}
                                    addProjectRace={onFinish}
                                    formValues={record}
                                    updateProjectRace={updateProjectRace}
                                    isUpdate={isUpdate}

                                />
                                <AddLoginRequestModal
                                    isVisible={logModalVisible}
                                    setVisible={setLogModalVisible}
                                    addCourse={addLogRequest}
                                    id={record?.id}
                                />
                                <Modal
                                    title='Delete  ProjectRace'
                                    visible={isDeleteModalVisible}
                                    onCancel={() => { setDeleteModalVisible(false); }}
                                    onOk={() => handleDelete()}

                                >
                                    <Typography.Text strong>
                                        Are you Sure You Want To Delete This  ProjectRace ?
                                    </Typography.Text>

                                </Modal>
                            </Spin>
                        </Tabs.TabPane>
                        {type === '2' ? <Tabs.TabPane tab="My Login Requests" key='login-requests'>
                            <Table dataSource={loginRequests} columns={logColumns} style={{
                                width: '100%',
                                padding: ' 16px 0 0',
                                borderRadius: '7px'
                            }} />
                        </Tabs.TabPane> : null}
                    </Tabs>
                </Card>
            </div>
        </>
    );
}

export default ProjectRace;
