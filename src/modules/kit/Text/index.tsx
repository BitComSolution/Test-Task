import './index.scss';
import React, { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  size?: string;
  children?: ReactNode;
  onClick?: Function;
}

const Text: FC<IProps> = function ({ size = 'lg', children, onClick }): ReactElement {
  const onChange = (e) => {
    onClick && onClick(e);
  };

  return (
    <div className={`text--eject text--${size}`} onClick={onChange}>
      {children}
    </div>
  );
};

export default Text;
