import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Nav';
import CustomCursor from './components/Cursor';
import IndexPage from './pages/IndexPage';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.title = "Kirill Pavliashik";

    // Update the HTML class for theme switching
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  return (
    <LanguageProvider>
      <div className="App">
        <CustomCursor />
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
        <Footer/>
      </div>
    </LanguageProvider>
  );
}

export default App;