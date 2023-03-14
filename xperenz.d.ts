interface ILayoutClass {
  base: string;
}

interface ReactChildren {
  children: React.ReactNode | React.ReactElement;
}

// Screen component props interface
interface ILayoutProp  extends React.HTMLAttributes<HTMLDivElement>, ReactChildren {
  classstyle?: string;
}

interface IAuthLayoutProps extends ReactChildren {
  
}