import React from "react";
import { Button, Form } from "antd";
import Input from "./../../components/form/input";
import InputPassword from "./../../components/form/inputPassword";
import { User as UserModel, user_type } from "./../../redux/user/models";
import "./user.style.scss";

interface DataValues {
  Nome: string;
  Cpf: string;
  Telefone: string;
  Email: string;
  password: string;
}

const User = () => {
  const onFinish = (values: DataValues) => {
    const newUser: UserModel = {
      name: values.Nome,
      cpf: values.Cpf,
      phone: values.Telefone,
      email: values.Email,
      password: values.password,
      type: [user_type.OWNER, user_type.RENTER],
    };
    console.log("Success:", newUser);
  };

  return (
    <div>
      <h1>Create User page</h1>

      <Form onFinish={onFinish} layout="vertical" className="create-user-form">
        <div className="create-user-form__inputs">
          <Input label={"Nome"} />
          <Input label={"Cpf"} />
          <Input label={"Telefone"} />
          <Input label={"Email"} />
          <InputPassword />
        </div>

        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default User;
