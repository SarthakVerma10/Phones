import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routers/App';

const PhoneContext = createContext();
const PhoneDispatchContext = createContext()

function PhoneProvider () {
  const [phoneDetails, setPhoneDetails] = useState([])

  return (
  <PhoneContext.Provider value={phoneDetails}>
      <PhoneDispatchContext.Provider value={setPhoneDetails}>
        <App />
      </PhoneDispatchContext.Provider>
  </PhoneContext.Provider>
  )
}

  ReactDOM.render(
    <PhoneProvider>
      <App />
    </PhoneProvider>,
    document.getElementById('root')
  );

export { PhoneContext, PhoneDispatchContext, PhoneProvider }