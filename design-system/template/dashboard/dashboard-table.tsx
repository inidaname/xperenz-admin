import React, { memo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Heading } from "../text";

const DashboardTable: React.FC = () => {
  return (
    <TableContainer width="full" p="5" rounded="md">
      <Table
        className="bg-[#FCFCFC] table-fixed"
        variant="simple"
        size="sm"
        width="full"
        rounded="lg"
      >
        <TableCaption>Sweepstakes activitives in the last 7 days</TableCaption>
        <Thead backgroundColor="#F7F7F7" roundedTop="full">
          <Tr>
            <Th p="5">Sweepstakes</Th>
            <Th p="5">Status</Th>
            <Th p="5">End Date</Th>
            <Th p="5">Participants</Th>
            <Th p="5">Winner</Th>
            <Th p="5">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr p="5">
            <Td p="4">Go for the trips</Td>
            <Td p="4">In progress</Td>
            <Td p="4">June 20th 2023</Td>
            <Td p="4">45</Td>
            <Td p="4">Not Yet Selected</Td>
            <Td p="4">*</Td>
          </Tr>
          <Tr p="5">
            <Td p="4">Win iPhone 14</Td>
            <Td p="4">Ended</Td>
            <Td p="4">Feb 20th 2023</Td>
            <Td p="4">45</Td>
            <Td p="4">Selected</Td>
            <Td p="4">*</Td>
          </Tr>
          <Tr p="5">
            <Td p="4">Win Mercedes Benz</Td>
            <Td p="4">Cancelled</Td>
            <Td p="4">Feb 20th 2023</Td>
            <Td p="4">45</Td>
            <Td p="4">Not Selected</Td>
            <Td p="4">*</Td>
          </Tr>
        </Tbody>
        <Tfoot backgroundColor="#F7F7F7" roundedBottom="xl">
          <Tr>
            <Th p="5">Sweepstakes</Th>
            <Th p="5">Status</Th>
            <Th p="5">End Date</Th>
            <Th p="5">Participants</Th>
            <Th p="5">Winner</Th>
            <Th p="5">Actions</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default memo(DashboardTable);
