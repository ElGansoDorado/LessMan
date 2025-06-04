import AuthInput from "../../components/common/input/authInput/AuthInput";

import { useState } from "react";
import { Link, useFetcher } from "react-router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");

  const [isShowPassword, setIsShowPassword] = useState("password");
  const fetcher = useFetcher();

  const handleFormReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  const resetErrorMessages = () => {
    setErrorName("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorPasswordConfirm("");
  };

  if (fetcher.data) {
    resetErrorMessages();
    if (fetcher.data === "auth/email-already-in-use") {
      setErrorEmail(
        "Посетитель c таким адресом электронной почты уже зарегистрирован",
      );
    } else if (fetcher.data === "auth/weak-password") {
      setErrorPassword("Слишком простой пароль");
    }
    fetcher.data = undefined;
  }

  const validate = () => {
    resetErrorMessages();

    if (!name) {
      setErrorName("Имя пользователя не указано");
      return false;
    }
    if (!email) {
      setErrorEmail("Адрес электронной почты не указан!");
      return false;
    }
    if (!password) {
      setErrorPassword("Пароль не указан!");
      return false;
    }
    if (!passwordConfirm) {
      setErrorPasswordConfirm("Повтор пароля не указан!");
      return false;
    }
    if (password !== passwordConfirm) {
      setErrorPassword("Выделенные пароли не совпадают!");
      return false;
    }
    return true;
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (validate()) {
      fetcher.submit(
        { email, password, name },
        { action: "/auth/sign-up", method: "post" },
      );
    }
  };

  return (
    <form
      className="container"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <span className="header">
        <h1 className="title">Sign Up</h1>
        <Link to="/auth/sign-in" className="link">
          Sign-in
        </Link>
      </span>
      <div>
        <span className="box">
          <AuthInput
            id="name"
            type="text"
            label="Name"
            value={name}
            setValue={setName}
            error={errorName}
          />

          <AuthInput
            id="email"
            type="email"
            label="Email"
            value={email}
            setValue={setEmail}
            error={errorEmail}
          />

          <AuthInput
            id="password"
            type={isShowPassword}
            label="Password"
            value={password}
            setValue={setPassword}
            error={errorPassword}
          />

          <AuthInput
            id="passwordConfirm"
            type={isShowPassword}
            label="Password confirm"
            value={passwordConfirm}
            setValue={setPasswordConfirm}
            error={errorPasswordConfirm}
          />
        </span>

        <div className="helper">
          <p
            onClick={() =>
              setIsShowPassword(
                isShowPassword === "password" ? "text" : "password",
              )
            }
          >
            {isShowPassword === "password"
              ? "Показать пароль"
              : "Скрыть пароль"}
          </p>
        </div>
      </div>

      <div className="submit">
        <input name="submit" type="submit" value="Create an account" />
        {errorName && <p className="error">{errorName}</p>}
        {errorEmail && <p className="error">{errorEmail}</p>}
        {errorPassword && <p className="error">{errorPassword}</p>}
        {errorPasswordConfirm && (
          <p className="error">{errorPasswordConfirm}</p>
        )}
      </div>

      <p className="separator">OR</p>

      <ul className="via-website">
        <li>G</li>
        <li>D</li>
        <li>V</li>
      </ul>
    </form>
  );
}
