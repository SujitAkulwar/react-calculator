import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import './Calculator.css';
import { Provider } from 'react-redux';
import store from "./store";

const Index = () => {
  
  return (
    <Provider store={store}>
    <Calculator />
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);