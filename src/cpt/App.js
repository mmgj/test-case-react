import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { pageTransition } from 'lib/helpers';

import Page from './Page';
import Heading from './Heading';
import ProductForm from './ProductForm';
import Button from './ProductForm/Button';

const TransitionPage = motion.article;

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      <AnimatePresence exitBeforeEnter initial={false}>
        {submitted ? (
          <TransitionPage key="submitted-page" {...pageTransition}>
            <Page>
              <Heading>Du får den beste prisen!</Heading>
              <h3>Her burde det ideelt sett finnes noe mer interessant enn lipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <Button onClick={() => setSubmitted(false)}>Tilbake</Button>
            </Page>
          </TransitionPage>
        ) : (
          <TransitionPage key="form-page" {...pageTransition}>
            <Page>
              <Heading>Kjøp Bilforsikring</Heading>
              <p style={{ marginBottom: '4rem' }}>
                Det er fire forskjellige forsikringer å velge mellom. <br />
                Ansvarsforsikring er lovpålagt om kjøretøyet er registrert og skal brukes på veien.
                I tillegg kan du utvide forsikringen avhengig av hvor gammel bilen din er og hvordan
                du bruker den.
              </p>
              <ProductForm onWin={() => setSubmitted(true)} />
            </Page>
          </TransitionPage>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
