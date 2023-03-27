import React, { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { BackpackIcon, CalendarIcon, GearIcon, HamburgerMenuIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons"
import NavItem from "../Items/nav-item";

const Sidebar: React.FC<ISideBarProps> = ({
  classstyle,
  children,
  ...props
}) => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      as={props.as || "aside"}
      pos={props.pos || "sticky"}
      left={props.left || "5"}
      h={props.h || "95vh"}
      marginTop={props.marginTop || "2.5vh"}
      boxShadow={props.boxShadow || "0 4px 12px 0 rgba(0, 0, 0, 0.05)"}
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir={props.flexDir || "column"}
      justifyContent={props.justifyContent || "space-between"}
      {...props}
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          aria-label="Home"
          mt={5}
          _hover={{ background: "none" }}
          icon={<HamburgerMenuIcon />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={HomeIcon}
          title="Dashboard"
          description="This is the description for the dashboard."
        />
        <NavItem navSize={navSize} icon={CalendarIcon} title="Calendar" active />
        <NavItem navSize={navSize} icon={PersonIcon} title="Clients" />
        <NavItem navSize={navSize} icon={BackpackIcon} title="Reports" />
        <NavItem navSize={navSize} icon={GearIcon} title="Settings" />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
