import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../css/style.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;