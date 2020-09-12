import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

import NATIONALITIES from '../../constants/nationalities';

function NationalityTag({ userNationality }) {
  return (
    <>
      {
        Object.keys(NATIONALITIES).map((nationality, item) => {
          if (nationality === userNationality) {
            const tagName = Object.values(NATIONALITIES)[item].name;
            const tagColor = Object.values(NATIONALITIES)[item].color;
            return <Tag color={tagColor}>{tagName}</Tag>;
          }
          return null;
        })
      }
    </>
  );
}

NationalityTag.propTypes = {
  userNationality: PropTypes.string.isRequired,
};

export default NationalityTag;
