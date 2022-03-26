import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


export type appPropType = {
  countSnippet: number;
}

const appProp: appPropType = {
  countSnippet: 6,
};

ReactDOM.render(
  <React.StrictMode>
    <App countSnippet={appProp.countSnippet}/>
  </React.StrictMode>,
  document.getElementById('root'));
