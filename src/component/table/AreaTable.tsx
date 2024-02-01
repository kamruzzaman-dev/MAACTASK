import { Input, Select, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const columns = [
    Table.SELECTION_COLUMN,
    {
        title: "Sl. No.",
        dataIndex: "serial",
        render: (_text: string, _record: string, index: number) => {
            return `${index + 1}`;
        },
        width: 150,
    },
    {
        title: "Region",
        dataIndex: "region",
        render: (region: { id: string, name: string }) => <>{region?.name}</>,
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

const AreaTable = ({ data, limit, setLimit }: { data: IData, limit: number, setLimit: (newLimit: number) => void }) => {


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
                            },
                            {
                                value: 50,
                                label: 50,
                            },
                            {
                                value: 100,
                                label: 100,
                            },
                            {
                                value: 500,
                                label: 500,
                            },
                        ]}
                    />
                </div>
            </div>
            <Table
                columns={columns}
                rowSelection={{}}
                dataSource={data || []}
                pagination={{
                    position: ["none"],
                    pageSize: limit,
                }}
            />
        </div>
    );
};

export default AreaTable;
