import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  padding: 4rem;
  padding-bottom: 10rem;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    padding: 2rem;
    padding-bottom: 5rem;
  }
  @media screen and (max-width: 320px) {
    padding: 1.5rem;
    padding-bottom: 5rem;
  }
`;

const Page = ({ children, ...props }) => {
  return <StyledWrap {...props}>{children}</StyledWrap>;
};

export default Page;
