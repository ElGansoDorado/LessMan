import AuthLayout from "./components/auth-layout";
import { RegisterForm } from "./components/register-form";

import { Link } from "react-router";
import { ROUTES } from "@/shared/model/routes";

function RegisterPage() {
  return (
    <AuthLayout
      title="Register Form"
      desc="форма для регистрации"
      form={<RegisterForm />}
      footerText={
        <>
          У вас есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
        </>
      }
    />
  );
}

export const Component = RegisterPage;
