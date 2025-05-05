import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store.jsx';
import "./main.css";
import "./pages/sign-in.css";
import "./components/features.css";
import "./components/footer.css";
import "./components/header.css";
import "./components/hero.css";
import "./components/user-content.css";
import "./components/sign-in-content.css";
import "./pages/user.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
