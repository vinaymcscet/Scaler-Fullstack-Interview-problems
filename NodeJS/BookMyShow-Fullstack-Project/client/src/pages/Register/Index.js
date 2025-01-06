import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../api/users";

const Register = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success(response.message);
        form.resetFields(); // This clears all the fields
      } else {
        message.error(response.message);
      }
    } catch (err) {
      message.error(err.message || "Something went wrong");
    }
  };
  return (
    <>
      <main className="App-header">
        <h1>Register to BookMyShow</h1>
        <section className="mw-500 text-left px-3">
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              label="Name"
              htmlFor="name"
              name="name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input id="name" type="text" placeholder="Enter your Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input id="email" type="text" placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                id="password"
                type="password"
                placeholder="Enter your Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
              Already a User ? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
