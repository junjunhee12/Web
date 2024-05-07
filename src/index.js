import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { PrContentProvider } from './coentexts/prContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PrContentProvider>
        <Main />
    </PrContentProvider>
    
);
