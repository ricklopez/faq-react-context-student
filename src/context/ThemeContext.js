import React from 'react';
import logo from './logo.svg';
import './App.css';

export const ThemeContext = React.createContext();

class LocaleProvider extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.changeLocale = () => {
      this.setState(state => {
        const newLocale = state.locale === 'en' ? 'fr' : 'en';
        return {
          locale: newLocale
        };
      });
    };
    
    this.state = {
      locale: 'en',
      changeLocale: this.changeLocale
    };
  }
  
  render() {
      return (
        
        <ThemeContext.Provider value={this.state}>
          {this.props.children}
        </ThemeContext.Provider>
       
  );
    
  }

}

export default LocaleProvider;
