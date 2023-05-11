import React from "react";
import { Inter } from "next/font/google";
import {
  DashboardLayout,
  DashboardListUsers,
  DashboardTable,
  Heading,
  ListDashboardHeading,
  Paragraph,
} from "@design-system/template";
import { Box, Card, ColumnStack, FlowStack } from "@design-system/components";
import { Divider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const listHeading = [
  {
    heading: "30,000",
    description: "Sweepstakes",
  },
  {
    heading: "30,000",
    description: "Participants",
  },
  {
    heading: "30,000",
    description: "Worth of Tickets",
  },
  {
    heading: "12",
    description: "Winners",
  },
];

export default function Home({ children }) {
  return (
    <DashboardLayout title="Home">
      <ColumnStack spacing="72px" minHeight="full" className="!items-start">
        <FlowStack className="!justify-between border w-full">
          <Heading as="h1">Dashboard</Heading>
          <Box>See This here</Box>
        </FlowStack>
        <FlowStack className="!justify-between w-full">
          <ColumnStack spacing="16" className="!items-start w-2/3">
            <ColumnStack
              height="144px"
              width="full"
              alignItems="flex-start"
              spacing="5"
            >
              <Heading as="h6" fontWeight="medium" size="sm">
                In the last 7 days
              </Heading>
              <Box className="flex w-full justify-between">
                {listHeading.map((list, index) => (
                  <ListDashboardHeading key={list.heading + index} {...list} />
                ))}
              </Box>
            </ColumnStack>
            <ColumnStack width="full">
              <FlowStack height="56px" alignItems="space-between" width="full">
                <ColumnStack className="w-1/2" alignItems="flex-start" px="4">
                  <Heading as="h6" fontWeight="light" size="md">
                    Sweepstakes
                  </Heading>
                  <Paragraph className="!text-xs">
                    Summary of some recent sweepstakes
                  </Paragraph>
                </ColumnStack>
                <ColumnStack className="w-1/2" alignItems="flex-end" px="4">
                  <Paragraph className="!text-xs">Filter</Paragraph>
                </ColumnStack>
              </FlowStack>
              <DashboardTable />
            </ColumnStack>
            <Box>
              <Heading as="h3" size="lg">
                Recent Activities
              </Heading>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Reports and Analytics
              </Heading>
            </Box>
          </ColumnStack>
          <ColumnStack
            minHeight="screen"
            shadow="xs"
            className="!items-start p-2 w-1/4"
            spacing="30px"
          >
            <DashboardListUsers />
            <Divider />
            <DashboardListUsers />
          </ColumnStack>
        </FlowStack>
      </ColumnStack>
    </DashboardLayout>
  );
}
