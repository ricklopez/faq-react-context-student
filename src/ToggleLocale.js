import React from 'react';

import { LocaleContext } from './context/LocaleContext';

export default () => {
  return (
    <LocaleContext.Consumer>
      {localeVal => (
        <button onClick={localeVal.changeLocale}>Change language</button>
      )}
    </LocaleContext.Consumer>
  );
};