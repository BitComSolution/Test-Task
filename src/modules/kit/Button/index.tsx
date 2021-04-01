import './index.scss';
import React, { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  onClick?(e: any): void;
  className?: string;
}

const Button: FC<IProps> = function ({ children, onClick, className = '' }): ReactElement {
  const onClickButton = (e) => {
    onClick && onClick(e);
  };

  const params = {
    className: `button--primary ${className}`,
  };

  return (
    <div onClick={onClickButton} {...params}>
      {children}
    </div>
  );
};

export default Button;
