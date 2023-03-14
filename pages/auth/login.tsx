import { useToast } from "@chakra-ui/toast";
import AuthLayout from "@design-system/template/auth-layout";
import { NextPage } from "next";

const Login: NextPage = () => {
  const toast = useToast();
  return (
    <>
    <AuthLayout>
      Save
    </AuthLayout>
    </>
  );
};

export default Login;
