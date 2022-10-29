import PropTypes from 'prop-types';
import { SectionTag, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionTag>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionTag>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
