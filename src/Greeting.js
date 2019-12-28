import React from 'react';

import { LocaleContext } from './context/LocaleContext';

export default () => {
  return (
    <LocaleContext.Consumer>
      {localeVal =>
        localeVal.locale === 'en' ? <h1>Welcome!</h1> : <h1>Bienvenue!</h1>
      }
    </LocaleContext.Consumer>
  );
};