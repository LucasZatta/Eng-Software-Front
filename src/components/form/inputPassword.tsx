import React from "react";
import { Form, Input } from "antd";
import "./form.style.scss";

const InputPassword = () => {
  return (
    <div className="input-password">
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
    </div>
  );
};

export default InputPassword;
