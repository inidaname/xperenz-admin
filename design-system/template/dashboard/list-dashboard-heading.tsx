import React, { memo } from "react";
import { Card } from "@design-system/components";
import { Heading, Paragraph } from "../text";

const ListDashboardHeading: React.FC<IListDashboardHeading> = ({
  heading,
  description,
}) => {
  return (
    <Card
      width="227px"
      height="90px"
      shadow="lg"
      className="flex justify-center items-start px-4 space-y-[8px]"
    >
      <Heading as="h6" size="lg">
        {heading}
      </Heading>
      <Paragraph as="p" className="!text-xs">
        {description}
      </Paragraph>
    </Card>
  );
};

export default memo(ListDashboardHeading);
