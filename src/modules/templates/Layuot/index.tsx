import './index.scss';
import React, { Component, FC, ReactElement, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  className?: string;
  hide?: string;
  dark?: boolean;
}

interface IFields {
  [key: string]: string;
}

interface IParts {
  children?: ReactNode;
  className?: string;
}

const field: IFields = {
  app: 'app',
  head: 'app__head',
  foot: 'app__foot',
  body: 'app__body',
};

const layoutPart: FC<IParts> | Function = (children, className): ReactElement | Function => (
  <div className={className}>{children}</div>
);

export const Head: Function = ({ children }: IProps): ReactNode => layoutPart(children, field.head);

export const Body: Function = ({ children }: IProps): ReactNode => layoutPart(children, field.body);

export const Foot: Function = ({ children }: IProps): ReactNode => layoutPart(children, field.foot);

class Layout extends Component<IProps> {
  public static Head: Function = Head;

  public static Body: Function = Body;

  public static Foot: Function = Foot;

  render(): JSX.Element {
    const { children } = this.props;

    return <div className={field.app}>{children}</div>;
  }
}

export default Layout;
