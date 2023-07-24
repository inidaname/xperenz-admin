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
  className,
  children,
  ...props
}) => {
  const [navSize, changeNavSize] = useState("large");
  const [active, setActive] = useState(false);

  const rest: ISideBarProps = {
    as: props.as || "aside",
    pos: props.pos || "sticky",
    minH: props.minH || "95vh",
    left: props.left || 0,
    top: props.top || "1",
    marginTop: props.marginTop || "2.5vh",
    boxShadow: props.boxShadow || "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
    flexDir: props.flexDir || "column",
    px: props.px || navSize == "small" ? "15px" : "0",
    justifyContent: props.justifyContent || "space-between",
    ...props,
  };
  return (
    <Flex
      className="bg-white"
      roundedRight={navSize == "small" ? "15px" : "30px"}
      // borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "218px"}
      {...rest}
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
        <Box as="div" className="w-fill p-5">
          {navSize === "small" ? <Logo width="100%" /> : <BrandLogo />}
        </Box>
        <Flex flexDir="column">
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
            title="Support"
            href="/support"
          />
          <NavItem
            navSize={navSize}
            icon={GearIcon}
            title="Settings"
            href="/settings"
          />
        </Flex>
      </Flex>
      <Box mb="5">See Here</Box>
    </Flex>
  );
};

export default Sidebar;
