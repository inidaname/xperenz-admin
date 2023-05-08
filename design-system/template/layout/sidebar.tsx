import React, { useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import {
  BackpackIcon,
  CalendarIcon,
  GearIcon,
  HamburgerMenuIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import NavItem from "../Items/nav-item";
import BrandLogo from "@public/img/login-brand-logo.svg";
import Logo from "@public/img/xperenz.svg";

const Sidebar: React.FC<ISideBarProps> = ({
  classstyle,
  children,
  ...props
}) => {
  const [navSize, changeNavSize] = useState("large");
  const [active, setActive] = useState(false);
  return (
    <Flex
      border="1px"
      as={props.as || "aside"}
      pos={props.pos || "sticky"}
      left={props.left || "5"}
      h={props.h || "95vh"}
      top={props.top || "1"}
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
          href="/"
          title="Dashboard"
          description="This is the description for the dashboard."
          active
        />
        <NavItem
          navSize={navSize}
          icon={CalendarIcon}
          title="Sweepstakes"
          href="/sweepstakes"
        />
        <NavItem
          navSize={navSize}
          icon={PersonIcon}
          title="Participants"
          href="/participants"
        />
        <NavItem
          navSize={navSize}
          icon={BackpackIcon}
          title="Reports"
          href="/reports"
        />
        <NavItem
          navSize={navSize}
          icon={GearIcon}
          title="Settings"
          href="/settings"
        />
      </Flex>

      <Box as="div" className="w-fill p-5">
        {navSize === "small" ? <Logo width="100%" /> : <BrandLogo />}
      </Box>
    </Flex>
  );
};

export default Sidebar;
