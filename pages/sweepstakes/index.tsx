import React from "react";
import { Button, ColumnStack, FlowStack } from "@design-system/components";
import {
  CreateSweepTake,
  DashboardLayout,
  Heading,
  Modal,
  Paragraph,
} from "@design-system/template";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Sweepstakes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <DashboardLayout>
      <FlowStack width="full" border="1px">
        <ColumnStack spacing="16" className="!items-start w-2/3">
          <Heading>Create SweepStakes</Heading>
          <Heading>List Sweepstakes</Heading>
          <Heading>Draw Winners</Heading>
          <Heading>Manage Prizes</Heading>
        </ColumnStack>
        <ColumnStack
          minHeight="screen"
          shadow="xs"
          border="1px"
          className="!items-start p-2 flex-1"
          spacing="30px"
        >
          <Button
            alignSelf="center"
            className="!bg-xbtnColor hover:!bg-hbtnColor !w-2/3"
            fontWeight="bold"
            onClick={() => router.push("/sweepstakes/create-sweepstake")}
          >
            Create Sweepstake
          </Button>
        </ColumnStack>
      </FlowStack>
    </DashboardLayout>
  );
};

export default Sweepstakes;
