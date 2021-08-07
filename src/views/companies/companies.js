import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Form, Col, Spin, Tooltip, Typography, Card } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { columns } from './columns';
import * as companiesServices from '../../services/companies/index';
import AddCompanyModal from "./add-modal";

function Companies(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [companies, setCompanies] = useState([]);
    const [form] = Form.useForm();
    const [isUpdate, setIsUpdate] = useState(false);


    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (record) {

            form.setFieldsValue({
                name: record.name,
                Email: record.Email,
                Location: record.Location,
                scope: record.scope,
                PhoneNumber: record.PhoneNumber,

            });
            console.log(record);
        }

    }, [record, form]);
    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await companiesServices.showAllCompanies();
            setCompanies(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            const data = await companiesServices.deleteCompany(record.id);
            setCompanies(data.data.data);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {
        (async () => {
            await companiesServices.addCompany(values);
            setModalVisible(false);
            getData();

        })();
    };

    const handleUpdate = (values) => {
        (async () => {
            await companiesServices.updateCompany({ ...values, id: record.id });
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
                        <Tooltip title={'DeleteCompany'}>
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
                        <Tooltip title={'EditCompany'}>
                            <Button
                                type='link'
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    setIsUpdate(true);
                                    setRecord(record);
                                    setModalVisible(true);
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
                            <Button type='primary' onClick={() => { setModalVisible(true); setIsUpdate(false); }} >
                                <Row align='middle'>
                                    <PlusOutlined /> Add Company
                                </Row>
                            </Button>
                        </Row>
                        <Row>
                            <Table dataSource={companies} columns={[...columns, actionColumn]} style={{
                                width: '100%',
                                padding: ' 16px 0 0',
                                borderRadius: '7px'
                            }} />
                        </Row>
                        <AddCompanyModal
                            isVisible={isModalVisible}
                            setVisible={setModalVisible}
                            addCourse={onFinish}
                            formValues={record}
                            handleUpdate={handleUpdate}
                            isUpdate={isUpdate}
                        />
                        <Modal
                            title='Delete Company'
                            visible={isDeleteModalVisible}
                            onCancel={() => { setDeleteModalVisible(false); }}
                            onOk={() => handleDelete()}

                        >
                            <Typography.Text strong>
                                Are you Sure You Want To Delete This Company ?
                            </Typography.Text>

                        </Modal>
                    </Spin>
                </Card>
            </div>
        </>
    );
}

export default Companies;
