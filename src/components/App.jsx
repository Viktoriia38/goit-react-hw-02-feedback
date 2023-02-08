import { Component } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountGoodChange = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleCountNeutralChange = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleCountBadChange = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return good ? Math.ceil((good / (good + neutral + bad)) * 100) : 0;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleCountGoodChange={this.handleCountGoodChange}
            handleCountNeutralChange={this.handleCountNeutralChange}
            handleCountBadChange={this.handleCountBadChange}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              className="feedback-title"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
