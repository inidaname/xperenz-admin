import {
  Box,
  Button,
  ColumnStack,
  DrawerComponent,
  FlowStack,
} from "@design-system/components";
import { joinClasses } from "@design-system/util";
import Head from "next/head";
import React, { memo } from "react";
import { Sidebar } from ".";
import { RequireAuth } from "../shared";
import { CreatePrize, CreateSweepTake } from "../sweeptakes";
import { Heading } from "../text";

const DashboardLayout: React.FC<IStackLayout> = ({
  children,
  title,
  ...props
}) => {
  return (
    <RequireAuth>
      <Head>
        <title>Xperenz Admin Dashboard</title>
      </Head>
      <ColumnStack
        as="div"
        className={joinClasses("min-h-screen border-box")}
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
            flex="1"
            padding="10"
            rounded="lg"
            position="relative"
            top="10"
            className="min-h-{100%}"
          >
            <ColumnStack
              spacing="72px"
              minHeight="full"
              className="!items-start"
            >
              <FlowStack className="!justify-between w-full">
                <Heading className="w-3/4" as="h1">
                  Dashboard
                </Heading>
                <ColumnStack
                  height="inherit"
                  shadow="none"
                  className="!items-start p-2 !h-full flex-1"
                  spacing="30px"
                >
                  <Box width="full" className="flex flex-row space-x-[25px]">
                    <DrawerComponent
                      size="md"
                      button={({ onOpen }) => (
                        <Button
                          alignSelf="center"
                          className="!bg-green-600 hover:!bg-hbtnColor !text-[12px] !w-2/4"
                          fontWeight="bold"
                          onClick={onOpen}
                        >
                          Create Prize
                        </Button>
                      )}
                    >
                      <CreatePrize />
                    </DrawerComponent>
                    <DrawerComponent
                      size="lg"
                      button={({ onOpen }) => (
                        <Button
                          alignSelf="center"
                          className="!bg-blue-600 hover:!bg-hbtnColor !text-[12px] !w-2/3"
                          fontWeight="bold"
                          onClick={onOpen}
                        >
                          Create Sweepstake
                        </Button>
                      )}
                    >
                      <CreateSweepTake />
                    </DrawerComponent>
                  </Box>
                </ColumnStack>
              </FlowStack>
              {children}
            </ColumnStack>
          </Box>
        </FlowStack>
      </ColumnStack>
    </RequireAuth>
  );
};

export default memo(DashboardLayout);
