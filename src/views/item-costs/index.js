/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Form, Col, Spin, Tooltip, Typography, Card } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { columns } from './columns';
import * as services from '../../services/costs/item-costs/index';
import AddItemCostModal from "./add-modal";
import { useHistory } from "react-router-dom";
import AppConst from "../../app-consts";

function ItemCosts(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [companies, setItemCosts] = useState([]);
    const [form] = Form.useForm();
    const [isUpdate, setIsUpdate] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (record) {

            form.setFieldsValue({
                name: record.name,
                code: record.code,
            });
        }

    }, [record, form]);
    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await services.showAllItemCosts();
            setItemCosts(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            const data = await services.deleteItemCost(record.code);
            setItemCosts(data.data.data);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {
        (async () => {
            await services.addItemCost(values);
            setModalVisible(false);
            getData();

        })();
    };

    const handleUpdate = (values) => {
        (async () => {
            await services.updateItemCost(values);
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
                        <Tooltip title={'Delete Item Cost'}>
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
                        <Tooltip title={'Edit Item Cost'}>
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
                    <Col>
                        <Tooltip title={'Course Details'}>
                            <Button
                                type='link'
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    history.push('expansive/' + `${record.code}`);
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
                            <Button type='primary' onClick={() => { setModalVisible(true); setIsUpdate(false); }} >
                                <Row align='middle'>
                                    <PlusOutlined /> Add Item Cost
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
                        <AddItemCostModal
                            isVisible={isModalVisible}
                            setVisible={setModalVisible}
                            addItemCost={onFinish}
                            formValues={record}
                            handleUpdate={handleUpdate}
                            isUpdate={isUpdate}
                        />
                        <Modal
                            title='Delete Item Cost'
                            visible={isDeleteModalVisible}
                            onCancel={() => { setDeleteModalVisible(false); }}
                            onOk={() => handleDelete()}

                        >
                            <Typography.Text strong>
                                Are you Sure You Want To Delete This Item Cost ?
                            </Typography.Text>

                        </Modal>
                    </Spin>
                </Card>
            </div>
        </>
    );
}

export default ItemCosts;
