import React from "react";
import {
  ColumnStack,
  FlowStack,
  Input,
  InputFormControl,
  Textarea,
} from "@design-system/components";
import { Heading, RequireAuth } from "@design-system/template";

const CreateSweepTake = () => {
  return (
    // <RequireAuth>
    <FlowStack width="full">
      <ColumnStack className="w-full h-auto h-14">
        <Heading as="h5" size="lg">
          Create a Sweepstake
        </Heading>
        <form className="w-full space-y-[24px]">
          <FlowStack alignItems="flex-start" justifyContent="space-evenly">
            <ColumnStack spacing="40px" className="!w-2/3">
              <InputFormControl label="Sweepstake Name">
                <Input type="text" placeholder="Sweepstake's Name" />
              </InputFormControl>
              <InputFormControl label="Description">
                <Textarea placeholder="Sweepstake's Description" />
              </InputFormControl>
              <InputFormControl label="Tickets Quantity">
                <Input type="number" placeholder="Sweepstake's Description" />
              </InputFormControl>
              <InputFormControl label="Tickets Quantity">
                <Input type="number" placeholder="Sweepstake's Description" />
              </InputFormControl>
              <InputFormControl
                label="Sweepstake Image
            "
              >
                <Input type="file" placeholder="Sweepstake's Description" />
              </InputFormControl>
              <InputFormControl label="Sweepstake Banner">
                <Input type="file" placeholder="Sweepstake's Description" />
              </InputFormControl>
            </ColumnStack>
          </FlowStack>
        </form>
      </ColumnStack>
      {/* <ColumnStack height="160px" border="1px" className="flex-1"></ColumnStack> */}
    </FlowStack>
    // </RequireAuth>
  );
};

export default CreateSweepTake;
