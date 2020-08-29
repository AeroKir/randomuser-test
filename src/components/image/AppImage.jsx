import React from 'react';
import { Image } from 'antd';
import classNames from 'classnames';

import img from '../../assets/panda.jpg';

function AppImage({ className }) {
  const imageClasses = classNames(className);
  return (
    <Image
      src={img}
      className={imageClasses}
    />
  );
}

export default AppImage;
