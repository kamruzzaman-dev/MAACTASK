/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Select, message } from "antd";
import { useGetAllRegionQuery } from "../../redux/api/region/regioAPI";
import { useAddAreaMutation } from "../../redux/api/area/areaApi";
import { useState } from "react";
const { Option } = Select;

type IRegion = {
  region: string,
  name: string
  _id?: string
}

const CreateAreaForm = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: allRegionData } = useGetAllRegionQuery({ limit: 400, page: 1 });
  const [addArea] = useAddAreaMutation();

  const onFinish = async (values: IRegion) => {
    console.log(values);
    try {
      setIsLoading(true);
      const res: any = await addArea(values).unwrap();
      // console.log(res);
      if (res?.status === 'success') {
        message.success("Area created successfully!");
        setIsLoading(false);
        form.resetFields();
      }
    } catch (error: any) {
      message.error("something went wrong");
      setIsLoading(false);
    }
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
          {allRegionData?.region?.map((region: IRegion) => (
            <Option key={region?._id} value={region?._id}>
              {region?.name}
            </Option>
          ))}
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
          {isLoading ? "isLoading..." : "Add Area"}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CreateAreaForm;
