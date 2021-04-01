import './index.scss';
import React, { FC, ReactElement } from 'react';

interface IProps {
  imgUrl?: string;
}

const Avatar: FC<IProps> = function ({ imgUrl }): ReactElement {
  const renderImage = () => {
    return imgUrl && <img src={imgUrl} alt="" />;
  };

  return (
    <div className="avatar">
      <div className="avatar__image">{renderImage()}</div>
    </div>
  );
};

export default Avatar;
