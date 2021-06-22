import React from 'react';
import { func } from 'prop-types';
import { Formik, Form } from 'formik';

import Loader from '../Loader';
import Input from './Input';
import Select from './Select';

import { StyledPairedInputs } from './lib/Form.styled';
import Button from './Button';
import {
  validationSchema,
  initialFormValues,
  selectValues,
  simulateSubmit,
} from './lib/form.helpers';

const ProductForm = ({ onWin }) => {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await simulateSubmit(values);
        if (res) {
          setSubmitting(false);
          onWin();
        } else {
          // ...todo
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {isSubmitting && <Loader />}
          <Input label="Bilens registreringsnummer" name="registration" placeholder="AB 12345" />

          <Select label="Din Bonus" name="bonus" help="Velg et alternativ">
            <option value="" disabled hidden>
              Velg din bonus-type
            </option>
            {selectValues.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>

          <Input label="Fødselsnummer" name="fnr" type="number" placeholder="11 siffer" />

          <StyledPairedInputs>
            <Input label="Fornavn" name="firstName" placeholder="Navn" />
            <Input label="Etternavn" name="lastName" placeholder="Navnesen" />
          </StyledPairedInputs>

          <Input label="Email Address" name="email" type="email" placeholder="navn@navnesen.no" />

          <Button disabled={isSubmitting} type="submit">
            Beregn pris!
          </Button>
          <Button inverted type="reset">
            Avbryt
          </Button>
        </Form>
      )}
    </Formik>
  );
};

ProductForm.propTypes = {
  onWin: func.isRequired,
};

export default ProductForm;
