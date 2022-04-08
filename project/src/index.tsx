import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { OffersType } from './types/offers';


export type appPropType = {
  countSnippet: number;
  offers: OffersType;
}

const appProp: appPropType = {
  countSnippet: 6,
  offers: offers,
};

ReactDOM.render(
  <React.StrictMode>
    <App countSnippet={appProp.countSnippet} offers={appProp.offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
