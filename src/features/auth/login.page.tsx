import AuthLayout from "./components/auth-layout";
import { LoginForm } from "./components/login-form";

import { Link } from "react-router";
import { ROUTES } from "@/shared/model/routes";

function LoginPage() {
  return <AuthLayout 
    title="Login Form"
    desc="форма для входа"
    form={<LoginForm />}
    footerText={<>У вас нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегестрироваться</Link></>}/>
}

export const Component = LoginPage;
