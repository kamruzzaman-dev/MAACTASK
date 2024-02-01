import { Button, Form, Input, Select, message } from "antd";
const { Option } = Select;

type IRegion = {
  region: string,
  name: string
}

const CreateAreaForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: IRegion) => {
    console.log(values);
  };

  const onFinishFailed = () => {
    message.error("Fill the form!");
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        padding: "40px 48px",
        borderRadius: "10px",
        border: "1px solid #E6E6E6",
        background: "#fff",
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <p
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "#495057",
          marginBottom: "10px",
        }}
      >
        Region
      </p>
      <Form.Item
        name="region"
        rules={[
          {
            required: true,
            message: (
              <p style={{ margin: "8px 0 0 4px" }}>Please input Area!</p>
            ),
          },
        ]}
      >
        <Select
          showSearch
          placeholder="Select Region"
          optionFilterProp="children"
          style={{
            width: "380px",
            height: "44px",
            borderRadius: "10px",
          }}
        >
          <Option value="HUB">HUB</Option>
          <Option value="HUB">HUB</Option>
        </Select>
      </Form.Item>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "#495057",
          marginBottom: "10px",
        }}
      >
        Area
      </p>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: (
              <p style={{ margin: "8px 0 0 4px" }}>Please input Area!</p>
            ),
          },
        ]}
      >
        <Input
          placeholder="Type Area"
          style={{
            width: "380px",
            height: "44px",
            borderRadius: "6px",
          }}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 13,
          span: 16,
        }}
      >
        <Button
          style={{
            background: "#0B2E4E",
            marginTop: "24px",
            padding: "9px 15px",
            height: "46px",
            width: "173px",
            borderRadius: "10px",
          }}
          type="primary"
          htmlType="submit"
        >
          Add Area
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CreateAreaForm;
