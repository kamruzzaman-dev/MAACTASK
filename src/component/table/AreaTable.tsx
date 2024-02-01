import { Input, Select, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
const columns = [
    Table.SELECTION_COLUMN,
    {
        title: "Sl. No.",
        dataIndex: "serial",
        width: 150,
    },
    {
        title: "Region",
        dataIndex: "region",
        width: 200,
    },
    {
        title: "Area",
        dataIndex: "name",
    },
];

type IData = {
    serial: number | string,
    name: "string",
}[]

const AreaTable = () => {
    const [limit, setLimit] = useState<number>(10);

    const newData: IData = [];

    const handleChange = (value: number) => {
        setLimit(value);
    };


    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "end",
                    gap: "16px",
                    marginBottom: "24px",
                    alignItems: "center",
                }}
            >
                <div>
                    <Input
                        size="large"
                        placeholder="Search..."
                        style={{
                            width: "227px",
                            height: "36px",
                        }}
                        prefix={<SearchOutlined />}
                    />
                </div>
                <div>
                    <Select
                        defaultValue={10}
                        style={{
                            width: 290,
                            height: 36,
                            borderRadius: "20px",
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 10,
                                label: 10,
                            },
                            {
                                value: 20,
                                label: 20,
                            },
                            {
                                value: 30,
                                label: 30,
                            }
                        ]}
                    />
                </div>
            </div>
            <Table
                columns={columns}
                rowSelection={{}}
                dataSource={newData}
                pagination={{
                    position: ["none"],
                    pageSize: limit,
                }}
            />
        </div>
    );
};

export default AreaTable;
