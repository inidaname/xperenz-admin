import { Box, ColumnStack, FlowStack } from "@design-system/components";
import { joinClasses } from "@design-system/util";
import Head from "next/head";
import React, { memo } from "react";
import { Sidebar } from ".";
import { RequireAuth } from "../shared";

const DashboardLayout: React.FC<IStackLayout> = ({
  children,
  className,
  title,
  ...props
}) => {
  return (
    <RequireAuth>
      <Head>
        <title>{title ? title : "Xperenz Admin Dashboard"}</title>
      </Head>
      <ColumnStack
        as="div"
        className={joinClasses(className, "min-h-screen border-box")}
        {...props}
      >
        <FlowStack
          as="div"
          justifyContent="space-between"
          alignItems="flex-start"
          className="w-full min-h-screen"
          spacing="10"
          pr="10"
        >
          <Sidebar />
          <Box
            shadow="lg"
            flex="1"
            padding="10"
            rounded="lg"
            position="relative"
            top="5"
            className="min-h-{100%}"
          >
            {children}
          </Box>
        </FlowStack>
        <Box>Footer</Box>
      </ColumnStack>
    </RequireAuth>
  );
};

export default memo(DashboardLayout);
