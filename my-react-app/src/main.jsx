import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './Store.jsx';
import "./main.css";
import "./pages/SignIn/sign-in.css";
import "./components/Features/features.css";
import "./components/Footer/footer.css";
import "./components/Header/header.css";
import "./components/Hero/hero.css";
import "./components/UserContent/user-content.css";
import "./components/SignInContent/sign-in-content.css";
import "./pages/User/user.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
