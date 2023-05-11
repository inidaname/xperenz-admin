interface ILayoutClass {
  base: string;
}

interface ReactChildren {
  children?: React.ReactNode | React.ReactElement;
}

interface className {
  className?: string;
}

// Screen component props interface
interface IContainer
  extends React.HTMLAttributes<HTMLDivElement>,
    ReactChildren,
    className {}

type IContainerProps = IContainer & import("@chakra-ui/react").ContainerProps;

interface IAuthLayoutProps extends ReactChildren {
  title?: string;
}

interface IFormLogin {
  email: string;
  password: string;
}

interface ILabel
  extends ReactChildren,
    React.HTMLAttributes<HTMLLabelElement>,
    className {
  labelFor: string;
}

interface IFieldSet extends ILayoutProp {}

interface IInputFormControl extends className {}

type IHeadingProp = import("@chakra-ui/react").HeadingProps & {};

interface IFormError extends ReactChildren, className {}
interface IRenderInput<T> {
  field: T;
}

interface IFormError {
  errors: {};
  name: string;
}

type IInputTypes = IInputFormControl & import("@chakra-ui/react").InputProps;

type ITextProps = import("@chakra-ui/react").TextProps & {};

type IButton = import("@chakra-ui/react").ButtonProps & {};
type ITextarea = import("@chakra-ui/react").TextareaProps & {};

// Redux, Reducer, Slice tyoes
interface IAuthSlice {
  user?: null | string;
  token?: null | string;
}

interface ILoginResData {
  error: boolean;
  token: string;
}

interface ILoginPayload {
  email: string;
  password: string;
}

interface IToastOptions {
  message: string;
  type?: "info" | "warning" | "success" | "error" | "loading";
}

interface IRequiredAuth extends ReactChildren, className {}

interface ILayout {
  title?: string;
}

type IStackLayout = ILayout & import("@chakra-ui/react").StackProps;

type ISideBarProps = import("@chakra-ui/react").FlexProps;

interface IAuthUserData {}

interface INavItemProp {
  icon: React.ForwardRefExoticComponent<
    import("@radix-ui/react-icons/dist/types").IconProps &
      React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  href?: string;
  description?: string;
  active?: boolean;
  navSize: string;
}

type IBox = import("@chakra-ui/react").BoxProps & {};

type ICard = import("@chakra-ui/react").CardProps;
type ICardFooter = import("@chakra-ui/react").CardFooterProps;
type ICardHeader = import("@chakra-ui/react").CardHeaderProps;
type ICardBody = import("@chakra-ui/react").CardBodyProps;

interface IListDashboardHeading {
  heading?: string;
  description?: string;
}

type IModal = import("@chakra-ui/react").ModalProps & {
  title?: string;
  footerContent?: string | JSX.Element;
};
