// import PropTypes from 'prop-types';
// import styles from './FeedbackOptions.module.css';

// export const FeedbackOptions = ({ options, handleLeaveFeedback }) => {
//   return (
//     <>
//       <div>
//         {options.map(option => {
//           return (
//             <button
//               type="button"
//               onClick={() => handleLeaveFeedback(option)}
//               key={option}
//               className={styles.btn}
//             >
//               {option}
//             </button>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   handleLeaveFeedback: PropTypes.func.isRequired,
// };

import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => (
          <button
            type="button"
            onClick={() => handleLeaveFeedback(option)}
            key={option}
            className={styles.btn}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

