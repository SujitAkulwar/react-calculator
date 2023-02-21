import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import './Calculator.css';

const Index = () => {
  
  return (
    <Calculator />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);