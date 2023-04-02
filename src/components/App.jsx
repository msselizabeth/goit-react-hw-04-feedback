import PropTypes from 'prop-types';

import { useState } from "react";
import {Section} from './Section/Section'
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import {Notification} from './Notification/Notification'

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackClick = (event) => {
    const { name } = event.currentTarget;
    
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break
      default:
        return;
    }

   };
  
    const options = ['good', 'neutral', 'bad'];
    const totalFeedbacks = good + neutral + bad;
    const positivePercentage = totalFeedbacks && (good / totalFeedbacks * 100).toFixed();
  

    return (
      <div>
        <Section title={'Please, leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedbackClick}
          />
        </Section>
        
        <Section title={'Statistics'}>
          {totalFeedbacks ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positive={positivePercentage} />
            : <Notification text="There is no feedback" />
          }
        </Section>
        
      
    </div>
    );
  
 
  
};

   App.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    event: PropTypes.object,
  }
