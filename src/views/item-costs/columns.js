import { Row } from "antd";

export const columns = [
    {
        dataIndex: 'id',
        title: 'Id',
        render: (text, record, index) => {

            return (
                <>
                    <Row>
                        {index + 1}
                    </Row>
                </>
            );
        },
    },
    {
        dataIndex: 'name',
        title: 'Name',
    },
    {
        dataIndex: 'code',
        title: 'Code',
    },

];
