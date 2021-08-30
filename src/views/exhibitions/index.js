import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Col, Spin, Tooltip, Typography, Card } from 'antd';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { columns } from './columns';
import AddExhibitionModal from './add-modal';
import * as exhibitionsServices from '../../services/exhibition/index';
import * as exhibitionLoginServices from '../../services/exhibition/exhibition-login-request';
import { useHistory } from "react-router-dom";
import AddLoginRequestModal from "./login-request";

function Exhibitions(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [logModalVisible, setLogModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [exhibitions, setExhibitions] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const history = useHistory();
    useEffect(() => {
        getData();
    }, []);
    const type = localStorage.getItem('userType');


    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await exhibitionsServices.showAllExhibitions();
            setExhibitions(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            await exhibitionsServices.deleteExhibition(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {

        (async () => {
            await exhibitionsServices.addExhibition(values);
            setModalVisible(false);
            getData();

        })();
    };
    const updateExhibition = (values) => {

        (async () => {
            await exhibitionsServices.updateExhibition({ ...values, id: record.id });
            setModalVisible(false);
            getData();

        })();
    };
    const addLogRequest = (values) => {
        const studentID = localStorage.getItem('userId');
        const data = {};
        data.studentID = Number(studentID);
        data.exhibitionID = record.id;
        data.state = 1;
        data.Answers = values;
        (async () => {
            await exhibitionLoginServices.addExhibitionLoginRequest(data);
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
                    <Tooltip title={record?.state === 1 ? 'Add Request' : 'You Can\'t Add Request'}>
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
                            <Tooltip title={'Delete Exhibition'}>
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
                            <Tooltip title={'Edit Exhibition'}>
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
                            <Tooltip title={'Exhibition Details'}>
                                <Button
                                    type='link'
                                    size="small"
                                    shape="circle"
                                    onClick={() => {
                                        history.push(`exhibition-details/${record.id}`);
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
                            <Table dataSource={exhibitions} columns={[...columns, actionColumn]} style={{
                                width: '100%',
                                padding: ' 16px 0 0',
                                borderRadius: '7px'
                            }} />
                        </Row>
                        <AddExhibitionModal
                            isVisible={isModalVisible}
                            setVisible={setModalVisible}
                            addExhibition={onFinish}
                            formValues={record}
                            updateExhibition={updateExhibition}
                            isUpdate={isUpdate}

                        />
                        <AddLoginRequestModal
                            isVisible={logModalVisible}
                            setVisible={setLogModalVisible}
                            addCourse={addLogRequest}
                            id={record?.id}
                        />
                        <Modal
                            title='Delete  Exhibition'
                            visible={isDeleteModalVisible}
                            onCancel={() => { setDeleteModalVisible(false); }}
                            onOk={() => handleDelete()}

                        >
                            <Typography.Text strong>
                                Are you Sure You Want To Delete This  Exhibition ?
                            </Typography.Text>

                        </Modal>
                    </Spin>
                </Card>
            </div>
        </>
    );
}

export default Exhibitions;
