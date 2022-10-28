import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const setBtnStyle = props => {
  switch (props.feedbackRating) {
    case 'good':
      return 'background-color: #9f9; &:hover,&:focus {background-color: #6f6; color: #282}';
    case 'neutral':
      return 'background-color: #ffa; &:hover,&:focus {background-color: #ff0; color: #ba0}';
    case 'bad':
      return 'background-color: #f99; &:hover,&:focus {background-color: #f66; color: #f00}';
    default:
      return 'background-color: #ccc; &:hover,&:focus {background-color: #ddd; color: #333}';
  }
};

export const Button = styled.button`
  width: 100px;
  height: 50px;
  text-transform: uppercase;
  font-weight: bold;
  color: #555;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  ${setBtnStyle}
`;
