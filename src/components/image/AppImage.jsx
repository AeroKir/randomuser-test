import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';
import classNames from 'classnames';

function AppImage({ src, className }) {
  const imageClasses = classNames(className);
  return (
    <Image
      src={src}
      className={imageClasses}
    />
  );
}

AppImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

AppImage.defaultProps = {
  className: '',
};

export default AppImage;
