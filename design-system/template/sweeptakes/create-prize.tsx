import React from "react";
import { Heading, RequireAuth } from "@design-system/template";
import {
  ColumnStack,
  FlowStack,
  Input,
  InputFormControl,
  Textarea,
} from "@design-system/components";

const CreatePrize = () => {
  return (
    <FlowStack width="full">
      <ColumnStack className="w-full h-auto h-14">
        <Heading as="h5" size="lg">
          Create Prize
        </Heading>
        <form className="w-full space-y-[24px]">
          <FlowStack alignItems="flex-start" justifyContent="space-evenly">
            <ColumnStack spacing="40px" className="!w-2/3">
              <InputFormControl label="Prize Title">
                <Input type="text" placeholder="Prize Title" />
              </InputFormControl>
              <InputFormControl label="Prize Description">
                <Textarea placeholder="Prize Description" />
              </InputFormControl>
              <InputFormControl label="Prize Level">
                <Input type="text" placeholder="Prize Level" />
                {/** First, Second or other level for the prize */}
              </InputFormControl>
              <InputFormControl label="Sweepstake Image">
                <Input type="file" placeholder="Sweepstake's Description" />
              </InputFormControl>
            </ColumnStack>
          </FlowStack>
        </form>
      </ColumnStack>
    </FlowStack>
  );
};

export default CreatePrize;
