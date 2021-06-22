import React from 'react';
import { bool } from 'prop-types';
import { StyledButton } from './lib/Form.styled';

const Button = ({ children, inverted, ...props }) => {
  return (
    <StyledButton {...props} className={`${inverted ? 'inverted' : ''}`}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  inverted: false,
};

Button.propTypes = {
  inverted: bool,
};

export default Button;
