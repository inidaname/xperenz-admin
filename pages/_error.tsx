import React from "react";
// import Error from "next/error";
import { FlowStack } from "@design-system/components";
import { NextPage } from "next";
import { Heading, Paragraph, RequireAuth } from "@design-system/template";

interface IError {
  statusCode?: number;
}

const Error: NextPage<IError> = ({ statusCode }) => {
  return (
    <FlowStack
      spacing="50px"
      w="full"
      className="!min-h-[500px]"
      alignItems="center"
      justifyContent="center"
    >
      <Paragraph textAlign="center" className="flex items-center">
        <Heading>{statusCode}</Heading>
      </Paragraph>
    </FlowStack>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
