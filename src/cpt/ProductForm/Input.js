import React from 'react';
import { string } from 'prop-types';
import { useField } from 'formik';

import { checkMetaError } from './lib/form.helpers';
import { StyledInputAndLabel } from './lib/Form.styled';

import FieldMeta from './FieldMeta';

const Input = ({ label, id, name, help, ...props }) => {
  /* TODO: do a check here to make sure either id or name has a value */
  const [field, meta] = useField({ id, name, ...props });
  return (
    <StyledInputAndLabel>
      <label htmlFor={id || name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`input ${checkMetaError(meta) ? 'error' : ''}`}
        id={id || name}
        name={name || id}
      />
      {checkMetaError(meta) ? (
        <FieldMeta mode="error">{meta.error}</FieldMeta>
      ) : (
        <FieldMeta mode="help">{help}</FieldMeta>
      )}
    </StyledInputAndLabel>
  );
};

Input.defaultProps = {
  id: undefined,
  name: undefined,
  help: undefined,
};

Input.propTypes = {
  id: string,
  name: string,
  help: string,
  label: string.isRequired,
};

export default Input;
