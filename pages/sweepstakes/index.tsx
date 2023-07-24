import React from "react";
import { Box, ColumnStack, FlowStack } from "@design-system/components";
import {
  DashboardTable,
  Heading,
  Modal,
  Paragraph,
  RequireAuth,
} from "@design-system/template";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Sweepstakes = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <RequireAuth>
      <FlowStack spacing="50px" width="full" alignItems="flex-start">
        <ColumnStack spacing="16" className="!items-start w-2/3">
          <Flex
            direction="row"
            height="182px"
            justifyContent="space-evenly"
            width="full"
          >
            <ColumnStack
              h="full"
              className="!w-1/3 shadow shadow-md bg-white rounded-lg"
            ></ColumnStack>
            <ColumnStack
              h="full"
              className="!w-1/3 shadow shadow-md bg-white rounded-lg"
            ></ColumnStack>
          </Flex>
          <Box className="!space-y-[25px] !bg-white !px-[31px] !py-[28px] rounded-md shadow-md">
            <Heading fontWeight="500" className="!text-[#06152B] !text-[18px]">
              List Sweepstakes
            </Heading>
            <DashboardTable />
          </Box>
          <Heading>Draw Winners</Heading>
          <Heading>Manage Prizes</Heading>
        </ColumnStack>
        <ColumnStack spacing="30px" className="!flex-1 max-w-[375px] p-[15px]">
          <Flex
            height="335px"
            width="full"
            className="shadow shadow-md bg-white rounded-lg"
          ></Flex>
          <Flex
            height="335px"
            width="full"
            className="shadow shadow-md bg-white rounded-lg"
          ></Flex>
        </ColumnStack>
      </FlowStack>
    </RequireAuth>
  );
};

export default Sweepstakes;
