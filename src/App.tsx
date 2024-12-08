import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components/layout/sidebar';
import { Header } from './components/layout/header';
import { MainContent } from './components/layout/main-content';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <MainContent />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;