import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: 4.1rem;
  line-height: 5.2rem;
  font-weight: 100;
  @media screen and (max-width: 320px) {
    width: 80%;
    margin: 2rem 0;
  }
`;

const Heading = ({ children, ...props }) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};

export default Heading;
