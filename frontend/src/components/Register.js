import React from "react";
import WelcomeForm from "./WelcomeForm";
import * as Auth from "../utils/Auth";
import { useHistory } from "react-router";

function Register({ onRegister, onStatus }) {
  const [registerData, setRegisterData] = React.useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  function handleEmailChange(e) {
    setRegisterData({ ...registerData, email: e.target.value });
  }

  function handlePasswordChange(e) {
    setRegisterData({ ...registerData, password: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = registerData;
    Auth.register(password, email)
      .then((res) => {
        if (res) {
          console.log(res);
          onStatus();
          history.push("/signin");
        } else {
          console.log(res);
          console.log("Что-то пошло не так!");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        onRegister();
      });
  }

  return (
    <WelcomeForm
      name="register-form"
      title="Регистрация"
      buttonText="Зарегистрироваться"
      bottomLinkText="Уже зарегистрированы? Войти"
      linkPuth="/signin"
      onEmail={handleEmailChange}
      onPassword={handlePasswordChange}
      onSubmit={handleSubmit}
      password={registerData.password}
      email={registerData.email}
    ></WelcomeForm>
  );
}

export default Register;
