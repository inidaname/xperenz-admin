import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import {
  Input,
  InputFormControl,
} from "@design-system/components/inputs/input-control";
import {
  Box,
  InputGroup,
  InputRightElement,
  useBoolean,
} from "@chakra-ui/react";
import FormError from "../feedbacks/formerror";
import { Paragraph, Heading as HeadingText } from "@design-system/template";
import Button from "@design-system/components/controls/Button";
import { useLoginMutation } from "@app/services/auth/login.api-slice";
import { useDispatch } from "react-redux";
import { useToast } from "@hooks/useToast";
import { setCredentials } from "@app/features/auth-slice";
import { useRouter } from "next/router";
import { setSessionToken } from "@helpers/session-manager";

const LoginForm: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const toasted = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    clearErrors,
    trigger,
  } = useForm<IFormLogin>({ mode: "onChange" });

  const [show, setShow] = useBoolean();

  const onSubmit: SubmitHandler<IFormLogin> = (values) => {
    login({
      email: values.email,
      password: values.password,
    })
      .unwrap()
      .then((res) => {
        console.log(res);
        const token = res.token;
        setSessionToken(token);
        dispatch(setCredentials({ token: res.token, user: res.token }));
        // TODO: work on storing logged in
        toasted({
          message: "Logged In Successfully",
          type: "success",
        });

        if (token) {
          router.push("/");
        }
      })
      .catch((err) => {
        console.error(err);
        toasted({ message: err?.data?.message, type: "error" });
      });
  };

  const handleBlur = async (fieldName: keyof IFormLogin) => {
    if (touchedFields[fieldName]) {
      await trigger(fieldName);
      if (!errors[fieldName]) {
        clearErrors(fieldName);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xs:w-auto md:w-[622px] h-[649px] bg-white flex flex-col justify-center items-start space-y-[40px] p-[40px] pb-[64px] rounded-[16px] shadow-lg"
    >
      <Box className="space-y-[8px] mb-[24px]">
        <HeadingText fontSize="2xl" as="h5">
          Admin Login
        </HeadingText>
        <Paragraph noOfLines={4} color={"gray.600"}>
          Welcome to the Admin section
        </Paragraph>
      </Box>
      <InputFormControl label="Email">
        <Input
          placeholder="some@mail.me"
          type="email"
          {...register("email", {
            required: "Please provide login email",
          })}
          onBlur={() => handleBlur("email")}
        />
        <FormError errors={errors} name="email" />
      </InputFormControl>
      <InputFormControl label="Password">
        <InputGroup size="md">
          <Input
            placeholder="Password"
            type={show ? "text" : "password"}
            {...register("password", {
              required: "Please provide login password",
            })}
          />
          <InputRightElement right="2" h="full">
            {show ? (
              <EyeClosedIcon
                className="w-[20px] h-[20px] text-gray-600"
                onClick={setShow.toggle}
              />
            ) : (
              <EyeOpenIcon
                className="w-[20px] h-[20px] text-gray-600"
                onClick={setShow.toggle}
              />
            )}
          </InputRightElement>
        </InputGroup>
      </InputFormControl>
      <Paragraph>Forgot Password?</Paragraph>
      <Box width="full" className="space-y-[25px]">
        <Button
          isLoading={isLoading}
          isDisabled={!isValid}
          loadingText="Loading"
          type="submit"
          className="!bg-xbtnColor hover:!bg-hbtnColor hover:text-gray-100 disabled:!bg-[#dfb3d1]"
        >
          Login
        </Button>
        <Paragraph align="center">
          This is the admin section to login to user section click here
        </Paragraph>
      </Box>
    </form>
  );
};

export default LoginForm;
