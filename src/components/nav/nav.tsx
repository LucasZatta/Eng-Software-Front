import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Dropdown, Form, Input, Menu, Modal } from "antd";
import { DownOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import { User } from "../../redux/user/models";
import "./nav.scss";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const history = useHistory();

  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);

  const loggedUser = useSelector<any, User>((state) => state.UserState.currentUser);

  const redirectToRegisterUser = () => {
    setLoginModalVisible(false);
    history.push("/user");
  };

  const ownerMenu = (
    <Menu onClick={() => {}}>
      <Menu.Item
        key="1"
        onClick={() =>
          history.push({
            pathname: "/new-property",
            search: `?user=${loggedUser ? loggedUser.cpf : ""}`,
          })
        }
      >
        Anunciar imóvel
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() =>
          history.push({
            pathname: "/properties",
            search: `?user=${loggedUser ? loggedUser.cpf : ""}`,
          })
        }
      >
        Meus imóveis
      </Menu.Item>
    </Menu>
  );

  const onFinish = (values: any) => console.log("Success:", values);

  return (
    <nav>
      <div className="menu">
        <span className="menu__span" onClick={() => history.push("/")}>
          logo
        </span>
        <span className="menu__span" onClick={() => history.push("/to-rent")}>
          Imóveis para alugar
        </span>
        <Dropdown overlay={ownerMenu} arrow>
          <span className="menu__span">
            Para proprietarios <DownOutlined />
          </span>
        </Dropdown>
        <span className="menu__span">Indicar imoveis</span>
        <span className="menu__span" onClick={() => history.push("/about-us")}>
          Sobre nós
        </span>
      </div>
      <div className="menu">
        <div className="menu__span">Ajuda</div>
        {loggedUser ? (
          <p>{loggedUser.name.charAt(0).toUpperCase()}</p>
        ) : (
          <Button type="primary" className="login-button" onClick={() => setLoginModalVisible(true)}>
            Entrar
          </Button>
        )}
      </div>
      <Modal
        title="Login"
        visible={loginModalVisible}
        onCancel={() => setLoginModalVisible(false)}
        footer={null}
        destroyOnClose
      >
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <div>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <strong onClick={redirectToRegisterUser}>register now!</strong>
          </div>
        </Form>
      </Modal>
    </nav>
  );
};

export default Nav;
