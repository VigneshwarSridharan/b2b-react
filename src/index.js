import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { initialize, addTranslationForLanguage } from 'react-localize-redux';
import { renderToStaticMarkup } from "react-dom/server";
import english from './lang/en.json';

import './assets/scss/style.scss'; 

import App from './views/App';

const languages = [
  { name: 'English', code: 'en' },
  { name: 'French', code: 'fr' },
  { name: 'Spanish', code: 'es' }
];
store.dispatch(initialize({
  languages : languages,
  options: { renderToStaticMarkup }
}));
store.dispatch(addTranslationForLanguage(english, 'en'));

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
