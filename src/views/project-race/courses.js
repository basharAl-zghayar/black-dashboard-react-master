import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Col, Spin, Tooltip, Typography, Card } from 'antd';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { columns } from './columns';
import AddProjectRaceModal from './add-modal';
import { useHistory } from "react-router-dom";
import * as opportunityServices from '../../services/opportunities';

function ProjectRace(props) {
    const history = useHistory();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [opportunity, setProjectRace] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await opportunityServices.showAllProjectRace();
            setProjectRace(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            await opportunityServices.deleteProjectRace(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {

        (async () => {
            await opportunityServices.addProjectRace(values);
            setModalVisible(false);
            getData();

        })();
    };
    const updateProjectRace = (values) => {

        (async () => {
            await opportunityServices.updateProjectRace({ ...values, id: record.id });
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
                        <Tooltip title={'Delete ProjectRace'}>
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
                        <Tooltip title={'Edit ProjectRace'}>
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
                                    history.push(`opportunity-details/${record.id}`);
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

                            <Button type='primary' onClick={() => {
                                setModalVisible(true);
                                setIsUpdate(false);
                            }} >
                                <Row align='middle'>
                                    <PlusOutlined /> Add  ProjectRace
                                </Row>
                            </Button>
                        </Row>
                        <Row>
                            <Table dataSource={opportunity} columns={[...columns, actionColumn]} style={{
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
                </Card>
            </div>
        </>
    );
}

export default ProjectRace;
