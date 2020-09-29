import React from "react";
import { Form, Input } from "antd";

const InputPassword = () => {
  return (
    <>
      <Form.Item
        name="password"
        label="Senha"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirme a senha"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("The two passwords that you entered do not match!");
            },
          }),
        ]}
      >
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};

export default InputPassword;
