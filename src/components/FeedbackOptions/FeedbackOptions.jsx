import PropTypes from 'prop-types';
import { BtnList, Button } from './FeedbackOptions.styled.jsx';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {options.map(item => (
        <li key={item}>
          <Button
            type="button"
            feedbackRating={item}
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </Button>
        </li>
      ))}
    </BtnList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
