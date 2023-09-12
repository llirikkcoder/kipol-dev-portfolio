import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Nav';
import CustomCursor from './components/Cursor';
import IndexPage from './pages/IndexPage';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.title = "Kirill Pavliashik";
  }, []);


  return (
    <div className="App">
      <Theme theme={theme}>
        <CustomCursor />
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
        <Footer/>
      </Theme>
    </div>
  );
}

export default App;