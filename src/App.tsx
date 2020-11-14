import React, { useReducer } from 'react';
import './App.css';
import EmbroideryPreview from './components/EmbroideryPreview';
import ShopifyMultipass from './components/ShopifyMultipass';

function App() {
  return (
    <>
      <EmbroideryPreview />
      <ShopifyMultipass />
    </>
  );
}

export default App;
