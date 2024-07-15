import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getColorFromName } from '../utils/colors';
import getAvatar from '../utils/avatar';

const Avatar = ({ className, iconUrl, author, size }) => {
  const avatarClass = classNames(className, 'avatar');
  const innerClass = classNames('rounded-full', {
    'w-10': size === undefined || size === 'sm',
    'w-16': size === 'lg',
  });
  return (
    <div className={avatarClass}>
      <div
        className={innerClass}
        style={{
          backgroundColor: !iconUrl ? getColorFromName(author) : undefined,
        }}
      >
        <img
          alt={`${author} profile`}
          src={
            iconUrl ||
            `data:image/svg+xml;utf8,${encodeURIComponent(getAvatar(author))}`
          }
        />
      </div>
    </div>
  );
};
Avatar.propTypes = {
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconUrl: PropTypes.string,
  size: PropTypes.string,
};

export default Avatar;
