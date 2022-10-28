import PropTypes from 'prop-types';
import { StatList, StatListItem, StatListTotal } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatList>
      <StatListItem>Good: {good}</StatListItem>
      <StatListItem>Neutral: {neutral}</StatListItem>
      <StatListItem>Bad: {bad}</StatListItem>
      <StatListTotal>Total: {total}</StatListTotal>
      <StatListTotal>Positive feedback: {positivePercentage}%</StatListTotal>
    </StatList>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
