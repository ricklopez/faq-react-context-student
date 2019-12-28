import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocaleProvider from './context/LocaleContext';
import Greeting from './Greeting';
import ToggleLocale from './ToggleLocale';


class App extends React.Component {
  

  
  render() {
      return (
        
        <LocaleProvider>
        
          <Greeting />
          <ToggleLocale />

        </LocaleProvider>
       
  );
    
  }

}

export default App;
