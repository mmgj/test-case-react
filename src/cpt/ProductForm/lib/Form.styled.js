import React from 'react';
import { renderToString } from 'react-dom/server';
import styled from 'styled-components';
import ArrowIcon from '../ArrowIcon';

/** The irony of using a scoped styling method such as styled-components
 * only to centralize most of the styles in a single file is not lost on me.
 */

const goodBlue = '#000afa';
const badRed = '#aa1f23';
const nopeGray = 'gray';
const black = '#000';
const white = '#fff';
const niceFade = 300;

const fieldSetMargin = '.4rem';

const stringifiedSvgArrow = `data:image/svg+xml;utf8,${renderToString(<ArrowIcon />)}`;

/* This setup needs a component for shared values for all {field/label}'s. Not very DRY as of now */

export const StyledButton = styled.button`
  @keyframes backgroundTransition {
    from {
      background-color: ${black};
    }
    to {
      background-color: ${goodBlue};
    }
  }
  @keyframes borderTransition {
    from {
      border-color: ${black};
    }
    to {
      border-color: ${goodBlue};
    }
  }
  outline: 0;
  cursor: pointer;
  border-width: 0;
  border-radius: 999px;
  padding: 0.8rem 2.4rem;
  margin: 0 1rem 0 0;
  font-size: 1.4rem;
  color: ${white};
  background-color: ${black};
  transition: transform 200ms ease-out;
  &:hover,
  &:active {
    animation: backgroundTransition 200ms ease-out;
    background-color: ${goodBlue};
  }
  &.inverted {
    border-width: 1px;
    color: black;
    background: ${white};
    &:hover,
    &:active {
      animation: borderTransition 200ms ease-out;
      border-color: ${goodBlue};
      color: ${goodBlue};
    }
  }
`;

export const StyledMetaMessage = styled.div`
  font-size: 1.2rem;
  margin-top: 0.1rem;
  &.help {
    color: ${black};
  }
  &.error {
    color: ${badRed};
  }
  &.warning {
    color: yellow;
  }
`;

export const StyledInputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${fieldSetMargin};
  label {
    margin-bottom: 1rem;
    pointer-events: none;
  }
  input {
    padding: 0.8rem;
    font-size: 1.6rem;
    border: 1px solid;
    border-radius: 0.3rem;
    box-sizing: border-box;
    width: 23rem;
    transition: border, box-shadow ${niceFade}ms ease-out;
    &.error {
      border-color: ${badRed};
    }
    &:hover,
    &:focus {
      outline: none;
      border-color: ${goodBlue};
      box-shadow: 0 0 0 1px ${goodBlue};
      &.error {
        border-color: ${badRed};
        box-shadow: 0 0 0 1px ${badRed};
      }
    }
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    input,
    label {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const StyledSelectAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
  label {
    pointer-events: none;
    margin-bottom: 1rem;
  }
  select {
    background: transparent;
    background-image: url('${stringifiedSvgArrow}');
    background-repeat: no-repeat;
    background-position-x: calc(100% - 1.4rem);
    background-position-y: 1.1rem;
    background-size: 1.2rem;
    appearance: none;
    padding: 0.8rem;
    font-size: 1.8rem;
    border: 1px solid;
    border-radius: 0.3rem;
    box-sizing: border-box;
    width: 23rem;
    transition: border, box-shadow ${niceFade}ms ease-out;
    &.error {
      border-color: ${badRed};
    }
    &:hover,
    &:focus {
      outline: none;
      border-color: ${goodBlue};
      box-shadow: 0 0 0 1px ${goodBlue};
      &.error {
        border-color: ${badRed};
        box-shadow: 0 0 0 1px ${badRed};
      }
    }
  }
  select:required:invalid {
    color: ${nopeGray};
    border-color: ${black};
    &.error {
      border-color: ${badRed};
    }
    &:hover,
    &:focus {
      outline: none;
      border-color: ${goodBlue};
      &.error {
        border-color: ${badRed};
        box-shadow: 0 0 0 1px ${badRed};
      }
    }
  }
  @media screen and (max-width: 767px) {
    select {
      width: 100%;
    }
  }
`;

export const StyledPairedInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48rem;
  margin-bottom: ${fieldSetMargin};
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    max-width: 290px;
    padding: 0;
    input,
    label {
      margin: 0;
    }
  }
`;
