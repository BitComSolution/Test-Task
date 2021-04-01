import './index.scss';
import React, { FC, ReactElement, ReactEventHandler, ReactNode } from 'react';

interface IProps {
  className?: string;
  type?: string;
  placeholder?: string;
  label?: ReactNode;
  value?: any;
  onChange?: Function | ReactEventHandler;
  autoComplete?: string;
  defaultValue?: string;
}

const Input: FC<IProps> = function ({
  className = '',
  defaultValue,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  label,
  autoComplete = 'off',
}): ReactElement {
  const onInput: ReactEventHandler = (e): void => {
    onChange && onChange(e);
  };

  const params = {
    onChange: onInput,
    placeholder,
    defaultValue,
    value,
    type,
    autoComplete,
    className,
  };

  return (
    <div className="input--primary">
      <input {...params} />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Input;
