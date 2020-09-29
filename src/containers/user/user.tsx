import React, { useEffect } from "react";
import { Button, Form } from "antd";
import Input from "./../../components/form/input";
import InputPassword from "./../../components/form/inputPassword";
import { User as UserModel, user_type } from "./../../redux/user/models";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "./../../redux/user/actions";
import { useHistory } from "react-router-dom";
import "./user.style.scss";

const { registerUser } = UserActions;

interface DataValues {
  Nome: string;
  Cpf: string;
  Telefone: string;
  Email: string;
  password: string;
}

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedUser = useSelector<any, UserModel>((state) => state.UserState.currentUser);

  useEffect(() => loggedUser && history.push("/"), [loggedUser]);

  const onFinish = (values: DataValues) => {
    const newUser: UserModel = {
      name: values.Nome,
      cpf: values.Cpf,
      phone: values.Telefone,
      email: values.Email,
      password: values.password,
      type: [user_type.OWNER, user_type.RENTER],
    };
    dispatch(registerUser(newUser));
  };

  return (
    <div className="create-user-form">
      <h1>Registrar Novo Usuario</h1>
      <p className="create-user-form__text">
        Estamos muito felizes que voce queira utilizar nosso app, mas antes precisamos de algumas informcoes!
      </p>

      <Form onFinish={onFinish} layout="vertical">
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
