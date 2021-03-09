import React from 'react';
import './App.css';
import Footer from './components/Footer/footer';
import SignIn from './pages/login';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <SignIn />
      </div>
      <Footer />
    </div>
  );
}
export default App;