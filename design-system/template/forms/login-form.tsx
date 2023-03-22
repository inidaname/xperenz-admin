import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/toast";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import {
  Input,
  InputFormControl,
} from "@design-system/components/inputs/input-control";
import HeadingText from "@design-system/text/heading";
import { Box, InputGroup, InputRightElement, useBoolean } from "@chakra-ui/react";
import FormError from "../feedbacks/formerror";
import Paragraph from "@design-system/text/paragraph";
import Button from "@design-system/components/controls/Button";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    clearErrors,
    trigger,
  } = useForm<IFormLogin>({ mode: "onChange" });

  const toast = useToast();

  const [show, setShow] = useBoolean();

  const onSubmit: SubmitHandler<IFormLogin> = () => ({});

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
        <Button classstyle="!bg-xbtnColor !hover:bg-cyan-600 hover:text-gray-700">Login</Button>
        <Paragraph align="center">This is the admin section to login to user section click here</Paragraph>
      </Box>
    </form>
  );
};

export default LoginForm;
