import * as Yup from 'yup';

export const checkMetaError = meta => (meta.touched && meta.error ? meta.error : null);

/* ⬇ I'm sure this is pretty close to what would
  go into the select in a real case scenario. */
export const selectValues = [
  'Trees',
  'Swan',
  'Cape',
  'A horse',
  'Triangles',
  'Witches',
  'A different horse',
  'Two horses',
];

export const initialFormValues = {
  registration: '',
  bonus: '',
  fnr: '',
  firstName: '',
  lastName: '',
  email: '',
};

const rq = 'Påkrevd felt';

export const validationSchema = Yup.object({
  registration: Yup.string()
    /* ⬇ I don't actually know what the rules for this
    would be, so here's some random requirements */
    .min(5, 'For kort!')
    .max(12, 'For langt!')
    .matches(/^[a-zA-ZÆØÅæøå][\w\s-]*/, 'Må starte med en bokstav!')
    .matches(/^((?!kevin).)*$/, 'Ikke prøv deg, Kevin!')
    .required(rq),
  bonus: Yup.mixed().oneOf(selectValues).required(rq),
  /* Someone have probably defined a regex for
  valid personnummer but this'll do for now */
  fnr: Yup.number()
    .min(10000000000, 'Fødselsnummer må ha 11 siffer')
    .max(99999999999, 'Fødselsummer kan ikke ha mer enn 11 siffer')
    .required(rq),
  firstName: Yup.string().min(1, rq).required(rq),
  lastName: Yup.string().min(1, rq).required(rq),
  email: Yup.string().email('Ugyldig e-postadresse').required(rq),
});

const chill = ms => new Promise(resolve => setTimeout(resolve, ms));
export async function simulateSubmit() {
  await chill(2000);
  return true;
}
