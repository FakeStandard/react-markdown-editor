import React from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import useMode from './useMode';

function App() {
  const { theme, toggleTheme } = useMode()
  
  const themeStyle = theme === 'dark' ? {
    backgroundColor: '#302f2f',
    color: '#fff'
  } : {
    backgroundColor: '#eee',
    color: '#000'
  }

  return (
    <div className="App" style={themeStyle}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
