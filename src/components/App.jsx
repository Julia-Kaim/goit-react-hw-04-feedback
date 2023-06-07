// import React, { Component } from 'react';
// import styles from './App.module.css';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Notification from './Notification/Notification';
// import Section from './Section/Section';
// import Statistics from './Statistics/Statistics';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = state => {
//     this.setState(prevState => ({
//       [state]: prevState[state] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);

//     return (
//       <div className={styles.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             handleLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
import React, { useState, useCallback } from 'react';
import styles from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = useCallback(state => {
    setFeedbackState(prevState => ({
      ...prevState,
      [state]: prevState[state] + 1,
    }));
  }, []);

  const { good, neutral, bad } = feedbackState;
  const options = Object.keys(feedbackState);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          handleLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
