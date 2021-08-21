import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Col, Spin, Tooltip, Typography, Card } from 'antd';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { columns } from './columns';
import AddOpportunityModal from './add-modal';
import { useHistory } from "react-router-dom";
import * as opportunityServices from '../../services/opportunities';
import * as opportunityLogServices from '../../services/opportunities/opportunities-login-request';
import AddLoginRequestModal from "./login-request";

function Opportunity(props) {
    const history = useHistory();
    const [isModalVisible, setModalVisible] = useState(false);
    const [logModalVisible, setLogModalVisible] = useState(false);

    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [opportunity, setOpportunity] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const type = localStorage.getItem('userType');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await opportunityServices.showAllOpportunity();
            setOpportunity(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            await opportunityServices.deleteOpportunity(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {

        (async () => {
            await opportunityServices.addOpportunity(values);
            setModalVisible(false);
            getData();

        })();
    };
    const updateOpportunity = (values) => {

        (async () => {
            await opportunityServices.updateOpportunity({ ...values, id: record.id });
            setModalVisible(false);
            getData();

        })();
    };
    const addLogRequest = (values) => {
        const studentID = localStorage.getItem('userId');
        const data = {};
        data.studentID = studentID;
        data.opportunityID = record.id;
        data.state = 1;
        data.Answers = values;
        (async () => {
            await opportunityLogServices.addOpportunityLoginRequest(data);
            setLogModalVisible(false);
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
                            <Tooltip title={'Delete Opportunity'}>
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
                            <Tooltip title={'Edit Opportunity'}>
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
                            <Tooltip title={'Opportunity Details'}>
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
                                        <PlusOutlined /> Add  Exhibition
                                    </Row>}
                            </Button>
                        </Row>}
                        <Row>
                            <Table dataSource={opportunity} columns={[...columns, actionColumn]} style={{
                                width: '100%',
                                padding: ' 16px 0 0',
                                borderRadius: '7px'
                            }} />
                        </Row>
                        <AddOpportunityModal
                            isVisible={isModalVisible}
                            setVisible={setModalVisible}
                            addOpportunity={onFinish}
                            formValues={record}
                            updateOpportunity={updateOpportunity}
                            isUpdate={isUpdate}

                        />
                        <AddLoginRequestModal
                            isVisible={logModalVisible}
                            setVisible={setLogModalVisible}
                            addCourse={addLogRequest}
                            id={record?.id}
                        />

                        <Modal
                            title='Delete  Opportunity'
                            visible={isDeleteModalVisible}
                            onCancel={() => { setDeleteModalVisible(false); }}
                            onOk={() => handleDelete()}

                        >
                            <Typography.Text strong>
                                Are you Sure You Want To Delete This  Opportunity ?
                            </Typography.Text>

                        </Modal>
                    </Spin>
                </Card>
            </div>
        </>
    );
}

export default Opportunity;
