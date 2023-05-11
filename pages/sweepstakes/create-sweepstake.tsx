import {
  ColumnStack,
  FlowStack,
  Input,
  InputFormControl,
  Textarea,
} from "@design-system/components";
import { DashboardLayout, Heading } from "@design-system/template";
import React from "react";

const CreateSweepTake = () => {
  return (
    <DashboardLayout>
      <FlowStack width="full">
        <ColumnStack className="w-2/3 h-auto h-14">
          <Heading as="h5" size="lg">
            Create a Sweepstake
          </Heading>
          <form className="w-full space-y-[24px]">
            <FlowStack alignItems="flex-start" justifyContent="space-evenly">
              <ColumnStack spacing="40px">
                <Heading as="h6" size="sm">
                  Sweepstake Details
                </Heading>
                <InputFormControl
                  className="!w-[350px]"
                  label="Sweepstake Name"
                >
                  <Input type="text" placeholder="Sweepstake's Name" />
                </InputFormControl>
                <InputFormControl className="!w-[350px]" label="Description">
                  <Textarea placeholder="Sweepstake's Description" />
                </InputFormControl>
                <InputFormControl
                  className="!w-[350px]"
                  label="Tickets Quantity"
                >
                  <Input type="number" placeholder="Sweepstake's Description" />
                </InputFormControl>
                <InputFormControl
                  className="!w-[350px]"
                  label="Tickets Quantity"
                >
                  <Input type="number" placeholder="Sweepstake's Description" />
                </InputFormControl>
                <InputFormControl
                  className="!w-[350px]"
                  label="Sweepstake Image
            "
                >
                  <Input type="file" placeholder="Sweepstake's Description" />
                </InputFormControl>
                <InputFormControl
                  className="!w-[350px]"
                  label="Sweepstake Banner"
                >
                  <Input type="file" placeholder="Sweepstake's Description" />
                </InputFormControl>
              </ColumnStack>
              <ColumnStack spacing="40px">
                <Heading as="h6" size="sm">
                  Price Details
                </Heading>
                <InputFormControl
                  className="!w-[350px]"
                  label="Sweepstake Name"
                >
                  <Input type="text" placeholder="Sweepstake's Name" />
                </InputFormControl>
                <InputFormControl className="!w-[350px]" label="Description">
                  <Textarea placeholder="Sweepstake's Description" />
                </InputFormControl>
                <InputFormControl
                  className="!w-[350px]"
                  label="Tickets Quantity"
                >
                  <Input type="number" placeholder="Sweepstake's Description" />
                </InputFormControl>
                <InputFormControl
                  className="!w-[350px]"
                  label="Tickets Quantity"
                >
                  <Input type="number" placeholder="Sweepstake's Description" />
                </InputFormControl>
                <InputFormControl
                  className="!w-[350px]"
                  label="Sweepstake Image
            "
                >
                  <Input type="file" placeholder="Sweepstake's Description" />
                </InputFormControl>
                <InputFormControl
                  className="!w-[350px]"
                  label="Sweepstake Banner"
                >
                  <Input type="file" placeholder="Sweepstake's Description" />
                </InputFormControl>
              </ColumnStack>
            </FlowStack>
          </form>
        </ColumnStack>
        <ColumnStack
          height="160px"
          border="1px"
          className="flex-1"
        ></ColumnStack>
      </FlowStack>
    </DashboardLayout>
  );
};

export default CreateSweepTake;
