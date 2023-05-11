import {
  Card as ChakraCard,
  CardBody as ChakraCardBody,
  CardHeader as ChakraCardHeader,
  CardFooter as ChakraCardFooter,
} from "@chakra-ui/react";
import { joinClasses } from "@design-system/util";

export const Card: React.FC<ICard> = ({ children, className, ...props }) => {
  return (
    <ChakraCard className={joinClasses("", className)} {...props}>
      {children}
    </ChakraCard>
  );
};

export const CardBody: React.FC<ICardBody> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ChakraCardBody className={joinClasses("", className)} {...props}>
      {children}
    </ChakraCardBody>
  );
};

export const CardFooter: React.FC<ICardFooter> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ChakraCardFooter className={joinClasses("", className)} {...props}>
      {children}
    </ChakraCardFooter>
  );
};

export const CardHeader: React.FC<ICardHeader> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ChakraCardHeader className={joinClasses("", className)} {...props}>
      {children}
    </ChakraCardHeader>
  );
};

// const CardGroup: React.FC = ({ }) => {
//   return (
//     <Card>

//     </Card>
//   )
// }
