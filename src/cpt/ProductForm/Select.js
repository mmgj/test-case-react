import React from 'react';
import { string } from 'prop-types';
import { Field, useField } from 'formik';

import { checkMetaError } from './lib/form.helpers';
import { StyledSelectAndLabel } from './lib/Form.styled';

import FieldMeta from './FieldMeta';

const Select = ({ children, label, id, name, help, ...props }) => {
  /* TODO: do a check here to make sure either id or name has a value */
  const [field, meta] = useField({ id, name, ...props });
  return (
    <StyledSelectAndLabel>
      <label htmlFor={id || name}>{label}</label>
      <Field
        as="select"
        required
        {...field}
        {...props}
        className={`select ${checkMetaError(meta) ? 'error' : ''}`}
        id={id || name}
        name={name || id}
      >
        {children}
      </Field>
      {checkMetaError(meta) ? (
        <FieldMeta mode="error">{meta.error}</FieldMeta>
      ) : (
        <FieldMeta mode="help">{help}</FieldMeta>
      )}
    </StyledSelectAndLabel>
  );
};

Select.defaultProps = {
  id: undefined,
  name: undefined,
  help: undefined,
};

Select.propTypes = {
  id: string,
  name: string,
  help: string,
  label: string.isRequired,
};

export default Select;
