// src/index.js or src/main.js

import React from 'react'; // Import React
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App'; // Import App component
import store from './redux/store'; // Import the Redux store

// Create the root and render the App component wrapped in Provider
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
