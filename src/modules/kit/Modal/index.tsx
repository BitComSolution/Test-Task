import './index.scss';
import React, { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  onClick?(e: any): void;
  className?: string;
}

const Modal: FC<IProps> = function ({ children, onClick, className = '' }): ReactElement {
  const onClickButton = (e) => {
    onClick && onClick(e);
  };

  const params = {
    className: `modal--primary ${className}`,
  };

  return (
    <div onClick={onClickButton} {...params}>
      {children}
    </div>
  );
};

export default Modal;
