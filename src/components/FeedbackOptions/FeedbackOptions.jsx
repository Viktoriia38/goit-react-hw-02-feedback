import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({
  handleCountGoodChange,
  handleCountNeutralChange,
  handleCountBadChange,
}) {
  return (
    <div className={css.feedback}>
      <button onClick={handleCountGoodChange} className={css.goodBtn}>
        Good
      </button>
      <button onClick={handleCountNeutralChange} className={css.neutralBtn}>
        Neutral
      </button>
      <button onClick={handleCountBadChange} className={css.badBtn}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleCountGoodChange: PropTypes.func.isRequired,
  handleCountNeutralChange: PropTypes.func.isRequired,
  handleCountBadChange: PropTypes.func.isRequired,
};
