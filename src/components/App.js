import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import Header from './layouts/Header';
import UserSection from './game/UserSection';
import { ContextUsersProvider, ContextCardProvider } from './game/context';

function App() {
  return (
    <ContextUsersProvider>
      <ContextCardProvider>
        <Header/>
        <UserSection/>
        <Routes/>
      </ContextCardProvider>
    </ContextUsersProvider>
  );
}

export default App;
