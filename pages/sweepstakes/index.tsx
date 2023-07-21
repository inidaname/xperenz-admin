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
      <FlowStack spacing="20px" width="full" alignItems="flex-start">
        <ColumnStack spacing="16" className="!items-start w-2/3">
          <Flex
            direction="row"
            border="1px"
            height="182px"
            justifyContent="space-evenly"
            width="full"
          >
            <ColumnStack h="full" border="1px" className="!w-1/3"></ColumnStack>
            <ColumnStack h="full" border="1px" className="!w-1/3"></ColumnStack>
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
      </FlowStack>
    </RequireAuth>
  );
};

export default Sweepstakes;
