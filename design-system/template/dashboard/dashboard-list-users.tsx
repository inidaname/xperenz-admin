import React, { memo } from "react";
import {
  Table,
  Tr,
  Td,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Heading } from "..";

const DashboardListUsers: React.FC = () => {
  return (
    <TableContainer
      width="full"
      bgColor="#F7F7F7"
      className="space-y-[20px] rounded-lg"
      py="32px"
    >
      <Heading size="xs" textAlign="center" width="full" fontWeight="medium">
        List of Most Active Sweeptakes
      </Heading>
      <Table
        variant="unstyled"
        className="!table-fixed !text-xs"
        width="fit-content"
      >
        <Tr>
          <Td>image</Td>
          <Td>Name</Td>
          <Td>Participants count</Td>
          <Td>Prize worth</Td>
        </Tr>
        <Tr>
          <Td>image</Td>
          <Td>Name</Td>
          <Td>Sweepstakes</Td>
          <Td>Xpoints</Td>
        </Tr>
        <Tr>
          <Td>image</Td>
          <Td>Name</Td>
          <Td>Participants count</Td>
          <Td>Prize worth</Td>
        </Tr>
      </Table>
      <Heading>See here</Heading>
    </TableContainer>
  );
};

export default memo(DashboardListUsers);
