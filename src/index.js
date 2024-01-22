import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App';
import Header from './components/Header';  
import Home from './components/Home';
import Wedo from './components/Wedo'; 
import Clients from './components/Clients';    
import Contacts from './components/Contacts';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Home />
    <Wedo />
    <Clients />
    <Contacts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
