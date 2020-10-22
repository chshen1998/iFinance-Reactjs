import React from 'react';
import CalendarPage from './screens/CalendarPage.js';
import HomePage from './screens/HomePage.js'
import SettingsPage from './screens/SettingsPage.js'
import ContextProvider from './Store.js'
import './App.css';

function App() {
  return (
    <ContextProvider className="App">
      <HomePage/>
    </ContextProvider>
  );
}

export default App;
