/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Modal, Row, Spin, Table, Tabs, Tooltip, Typography } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

import * as expensiveServices from '../../../services/costs/expansive-costs/index';
import { useParams } from 'react-router-dom';
import { columns } from './columns';
import AddExpenseModal from './add-expense';

const ItemCostDetails = () => {
    const { code } = useParams();
    const [itemCostInfo, setItemCostInfo] = useState();
    const [spinning, setSpinning] = useState(true);
    const [isExpenseModalVisible, setExpenseModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [record, setRecord] = useState();
    const [isUpdate, setIsUpdate] = useState(false);


    useEffect(() => {
        getData();
    }, []);

    const handleDelete = () => {
        setSpinning(true);

        (async () => {
            await expensiveServices.deleteExpansiveCosts(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const addExpense = (values) => {
        setSpinning(true);
        (async () => {
            await expensiveServices.addExpansiveCosts(values);
            setExpenseModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const updateExpense = (values) => {
        setSpinning(true);
        (async () => {
            await expensiveServices.updateExpansiveCosts({ ...values, itemCode: record.itemCode });
            setExpenseModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await expensiveServices.showExpansiveByItemCode(code);
            setItemCostInfo(data.data.data);
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
                        <Tooltip title={'Delete Expense'}>
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
                                    setExpenseModalVisible(true);
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
                    <Tabs>
                        <Tabs.TabPane key='info' tab="Expense Cost Details">
                            <Spin spinning={spinning} >
                                <Row justify='end' align='middle'>
                                    <Button type='primary' onClick={() => {
                                        setExpenseModalVisible(true);
                                        setIsUpdate(false);
                                    }} >
                                        <Row align='middle'>
                                            <PlusOutlined /> Add  Expense
                                        </Row>
                                    </Button>
                                </Row>
                                <Row>
                                    <Table dataSource={itemCostInfo} columns={[...columns, actionColumn]} style={{
                                        width: '100%',
                                        padding: ' 16px 0 0',
                                        borderRadius: '7px'
                                    }} />
                                </Row>
                                <AddExpenseModal
                                    isVisible={isExpenseModalVisible}
                                    setVisible={setExpenseModalVisible}
                                    addExpense={addExpense}
                                    updateExpense={updateExpense}
                                    formValues={record}
                                    isUpdate={isUpdate}
                                    itemCode={code}
                                />
                                <Modal
                                    title='Delete  Expense'
                                    visible={isDeleteModalVisible}
                                    onCancel={() => { setDeleteModalVisible(false); }}
                                    onOk={() => handleDelete()}

                                >
                                    <Typography.Text strong>
                                        Are you Sure You Want To Delete This  Expense ?
                                    </Typography.Text>

                                </Modal>
                            </Spin>
                        </Tabs.TabPane>

                    </Tabs>

                </Card>

            </div>
        </>
    );
};

export default ItemCostDetails;