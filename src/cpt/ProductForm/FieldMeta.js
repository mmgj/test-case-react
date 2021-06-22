import React from 'react';
import { oneOf } from 'prop-types';
import { StyledMetaMessage } from './lib/Form.styled';

/** NOTE:
 * There is a decision being made here to render this
 * component – even when it doesn't have a message to
 * show – as an easy fix for jumpy layout changes.
 * Feels iffy.
 */

const FieldMeta = ({ children, mode, ...props }) => {
  return (
    <StyledMetaMessage className={mode} {...props}>
      {children || <>&nbsp;</>}
    </StyledMetaMessage>
  );
};

FieldMeta.defaultProps = {
  mode: 'error',
};

FieldMeta.propTypes = {
  mode: oneOf(['error', 'warning', 'help']),
};

export default FieldMeta;
