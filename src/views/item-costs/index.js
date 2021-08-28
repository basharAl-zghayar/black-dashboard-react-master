/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Form, Col, Spin, Tooltip, Typography, Card, Tabs, DatePicker } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { columns } from './columns';
import { expensesColumns } from './expenses-columns';
import * as services from '../../services/costs/item-costs/index';
import AddItemCostModal from "./add-modal";
import { useHistory } from "react-router-dom";
import moment from "moment";
import * as expensiveServices from '../../services/costs/expansive-costs/index';

function ItemCosts(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [record, setRecord] = useState();
    const [monthExpenses, setMonthExpenses] = useState(0);
    const [yearExpenses, setYearExpenses] = useState(0);
    const [yearMonthsExpenses, setYearMonthsExpenses] = useState([]);
    const [companies, setItemCosts] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [form] = Form.useForm();
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
            setDeleteModalVisible(false);
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

    const handleSelectMonth = (value) => {
        setSpinning(true);
        (async () => {
            const data = await expensiveServices.endPointMonth(value);
            setMonthExpenses(data.data.data);
            setSpinning(false);
        })();

    };
    const handleSelectYear = (value) => {
        setSpinning(true);
        (async () => {
            const data = await expensiveServices.endPointYear(value);
            const total = await expensiveServices.endPointAllMonthInYear(value);
            setYearExpenses(data.data.data);
            const array = [
                { month: 'Jan', expense: 0 },
                { month: 'Feb', expense: 0 },
                { month: 'Mar', expense: 0 },
                { month: 'Apr', expense: 0 },
                { month: 'May', expense: 0 },
                { month: 'Jun', expense: 0 },
                { month: 'Jul', expense: 0 },
                { month: 'Aug', expense: 0 },
                { month: 'Sep', expense: 0 },
                { month: 'Oct', expense: 0 },
                { month: 'Nov', expense: 0 },
                { month: 'Dec', expense: 0 },
            ];
            Object.entries(total.data.data).forEach((key) => {
                array[key[0] - 1].expense = key[1];

            });
            setYearMonthsExpenses(array);
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
                <Card>
                    <Tabs>
                        <Tabs.TabPane key='item-cost' tab='Item Costs' >
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
                        </Tabs.TabPane>
                        <Tabs.TabPane key='reports' tab='Reports'>
                            <Spin spinning={spinning} >
                                <Card style={{ minHeight: '85vh', borderRadius: '5px' }}>
                                    <Row justify='space-between'

                                    >
                                        <Col md={12} lg={12}
                                            style={{
                                                padding: '16px',
                                            }} >
                                            <Row align='middle' justify='space-between'
                                                style={{
                                                    padding: '24px 16px', borderRadius: '5px', border: '1px solid #ccc',
                                                    margin: '16px 0'
                                                }}
                                            >
                                                <Col md={24} lg={24}
                                                    style={{
                                                        padding: '16px',
                                                    }}
                                                >
                                                    <Tooltip title='Select month to view month total expenses'>
                                                        <span style={{ paddingRight: '16px' }}>
                                                            Month:
                                                        </span>
                                                    </Tooltip>
                                                    <DatePicker
                                                        picker="month"
                                                        style={{ width: '80%' }}
                                                        onChange={(value) => {
                                                            handleSelectMonth(moment(value).month() + 1);
                                                        }}
                                                    />
                                                </Col>
                                                <Col md={24} lg={24} style={{
                                                    padding: '16px',
                                                }}>
                                                    <span style={{ paddingRight: '16px' }}>
                                                        Total Expenses:
                                                    </span>
                                                    <span style={{ paddingRight: '16px' }}>
                                                        {monthExpenses}
                                                    </span>
                                                </Col>

                                            </Row>
                                            <Row align='middle' justify='space-between'
                                                style={{
                                                    padding: '24px 16px', borderRadius: '5px', border: '1px solid #ccc',
                                                    margin: '16px 0'
                                                }}
                                            >
                                                <Col md={24} lg={24}
                                                    style={{
                                                        padding: '16px',
                                                    }}
                                                >
                                                    <Tooltip title='Select month to view month total expenses'>
                                                        <span style={{ paddingRight: '16px' }}>
                                                            Year:
                                                        </span>
                                                    </Tooltip>
                                                    <DatePicker
                                                        picker="year"
                                                        style={{ width: '80%' }}
                                                        onChange={(value) => {
                                                            handleSelectYear(moment(value).year());
                                                        }}
                                                    />
                                                </Col>
                                                <Col md={24} lg={24} style={{
                                                    padding: '16px',
                                                }}>
                                                    <span style={{ paddingRight: '16px' }}>
                                                        Total Expenses:
                                                    </span>
                                                    <span style={{ paddingRight: '16px' }}>
                                                        {yearExpenses}
                                                    </span>
                                                </Col>

                                            </Row>
                                        </Col>
                                        <Col md={12} lg={12}
                                            style={{
                                                padding: '16px',
                                            }} >
                                            <Table
                                                pagination={{ pageSize: 12 }}
                                                size='small'
                                                dataSource={yearMonthsExpenses}
                                                columns={expensesColumns}
                                                style={{
                                                    width: '100%',
                                                    padding: ' 16px 0 0',
                                                    borderRadius: '7px'
                                                }} />
                                        </Col>
                                    </Row>
                                </Card>
                            </Spin>
                        </Tabs.TabPane>
                    </Tabs>
                </Card>
            </div>
        </>
    );
}

export default ItemCosts;
