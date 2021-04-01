import './index.scss';
import React, { FC, ReactElement, ReactNode, useEffect, useRef } from 'react';

interface IProps {
  className?: string;
  placeholder?: string;
  value?: string;
  autoComplete?: string;
  onChange?: Function;
  label?: ReactNode;
}

const Textarea: FC<IProps> = function ({
  className = '',
  placeholder = '',
  value = '',
  onChange,
  children,
  label,
  autoComplete = 'off',
}): ReactElement {
  const ref = useRef(null) as any;

  const onHeight = () => {
    const textareaNode = ref.current;

    textareaNode.style.height = `${textareaNode.scrollHeight}px`;
  };

  const onInput = (e) => {
    onHeight();
    onChange && onChange(e);
  };

  useEffect(() => {
    onHeight();
  }, []);

  const params = {
    onChange: onInput,
    placeholder,
    value,
    ref,
    autoComplete,
  };

  return (
    <div className={`textarea--primary ${className}`}>
      <textarea {...params} />
      {label && <label>{label}</label>}
      {children}
    </div>
  );
};

export default Textarea;
