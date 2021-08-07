import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Col, Spin, Tooltip, Typography, Card } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { columns } from './columns';
import AddVolunteerModal from './add-modal';
import * as volunteersServices from '../../services/volunteers/index';

function Volunteers() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [volunteer, setVolunteers] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await volunteersServices.showAllVolunteers();
            setVolunteers(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            const data = await volunteersServices.deleteVolunteer(record.id);
            setVolunteers(data.data.data);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {

        (async () => {
            await volunteersServices.addVolunteer(values);
            getData();
        })();
    };

    const updateVolunteer = (values) => {

        (async () => {
            await volunteersServices.updateVolunteer({ ...values, id: record.id });
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
                        <Tooltip title={'Delete Volunteer'}>
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
                        <Tooltip title={'EditVolunteer'}>
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
                                    <PlusOutlined /> Add  Volunteer
                                </Row>
                            </Button>
                        </Row>
                        <Row>
                            <Table dataSource={volunteer} columns={[...columns, actionColumn]} style={{
                                width: '100%',
                                padding: ' 16px 0 0',
                                borderRadius: '7px'
                            }} />
                        </Row>
                        <AddVolunteerModal
                            isVisible={isModalVisible}
                            setVisible={setModalVisible}
                            addTrainer={onFinish}
                            formValues={record}
                            updateVolunteer={updateVolunteer}
                            isUpdate={isUpdate}
                        />
                        <Modal
                            title='Delete  Volunteer'
                            visible={isDeleteModalVisible}
                            onCancel={() => { setDeleteModalVisible(false); }}
                            onOk={() => handleDelete()}

                        >
                            <Typography.Text strong>
                                Are you Sure You Want To Delete This  Volunteer ?
                            </Typography.Text>

                        </Modal>
                    </Spin>
                </Card>
            </div>
        </>
    );
}

export default Volunteers;
