/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import { I18nProvider } from '@amoutonbrady/solid-i18n';
import './index.css';
import App from './App';
import { dictionary } from "./dictionary";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() =>
  <Router>
    <I18nProvider dict={dictionary} locale="vn">
      <App />
    </I18nProvider>
  </Router>
  , root);
