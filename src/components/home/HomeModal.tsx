import React, { FC, ReactElement, useState } from 'react';
import { IconClose, IconFacebook, IconGlobal, IconUser } from '../../modules/icons';
import Avatar from '../../modules/kit/Avatar';
import Button from '../../modules/kit/Button';
import Textarea from '../../modules/kit/Textarea';

const HomeModal: FC = function (): ReactElement {
  const [value, setValue] = useState('');

  const onChangeTextarea = (e) => {
    const { value } = e.target;

    setValue(value);
  };

  return (
    <div className="home-modal">
      <div className="home-modal__head">
        <IconClose />
      </div>
      <div className="home-modal__body">
        <Avatar />
        <Textarea value={value} onChange={onChangeTextarea} placeholder="Write your post here" />
      </div>
      <div className="home-modal__foot">
        <IconGlobal />
        <IconFacebook />
        <IconUser />
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default HomeModal;
