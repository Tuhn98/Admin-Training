import React from "react";
import ReactDOM from "react-dom";
import i18n from './translation/i18n';
import { I18nextProvider } from 'react-i18next';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  rootElement
);
  