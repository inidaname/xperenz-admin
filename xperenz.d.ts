interface ILayoutClass {
  base: string;
}

interface ReactChildren {
  children?: React.ReactNode | React.ReactElement;
}

interface ClassStyle {
  classstyle?: string;
}

// Screen component props interface
interface ILayoutProp  extends React.HTMLAttributes<HTMLDivElement>, ReactChildren, ClassStyle {}

interface IAuthLayoutProps extends ReactChildren {
  
}

interface IFormLogin {
  email: string;
  password: string;
}

interface ILabel extends ReactChildren, React.HTMLAttributes<HTMLLabelElement>, ClassStyle {
  labelFor: string;
}

interface IFieldSet extends ILayoutProp {}

interface IInputFormControl extends ClassStyle {

}


type IHeadingProp = import("@chakra-ui/react").HeadingProps & ClassStyle & {}

interface IFormError extends ReactChildren, ClassStyle {}
interface IRenderInput<T> {
  field: T
}

interface IFormError {
  errors: {};
  name: string;
}

type IInputTypes = IInputFormControl & import("@chakra-ui/react").InputProps

type ITextProps = import("@chakra-ui/react").TextProps & ClassStyle & {}

type IButton = import("@chakra-ui/react").ButtonProps & ClassStyle & {}