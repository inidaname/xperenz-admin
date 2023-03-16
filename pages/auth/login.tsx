import LoginForm from "@design-system/template/forms/login-form";
import AuthLayout from "@design-system/template/layout/auth-layout";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
