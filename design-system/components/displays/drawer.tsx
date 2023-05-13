import React, { Children } from "react";
import {
  Drawer as CHakraDrawer,
  DrawerBody,
  DrawerContent as ChakraDrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export const Drawer: React.FC<IDrawer> = ({ children, ...props }) => {
  return <CHakraDrawer {...props}>{children}</CHakraDrawer>;
};

export const DrawerContent: React.FC<IDrawerContent> = ({
  children,
  ...props
}) => {
  return <ChakraDrawerContent {...props}>{children}</ChakraDrawerContent>;
};

const DrawerComponent: React.FC<IDrawerComponent> = ({
  children,
  header,
  footer,
  button,
  size,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {button({ isOpen, onClose, onOpen })}
      <Drawer size={size} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="">
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
