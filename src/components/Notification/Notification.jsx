// import PropTypes from 'prop-types';
// import styles from './Notification.module.css';

// export const Notification = ({ message }) => {
//   return <p className={styles.title}>{message}</p>;
// };

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  const [notificationMessage, setNotificationMessage] = useState(message);

  return <p className={styles.title}>{notificationMessage}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

