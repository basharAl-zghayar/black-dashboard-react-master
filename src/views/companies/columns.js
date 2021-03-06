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
        dataIndex: 'Email',
        title: 'Email',
    },
    {
        dataIndex: 'Location',
        title: 'Location',
    },
    {
        dataIndex: 'scope',
        title: 'Scope',
    },
    {
        dataIndex: 'PhoneNumber',
        title: 'PhoneNumber',
    },

];
