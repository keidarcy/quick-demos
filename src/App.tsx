import React from 'react';
import './App.css';
import { EmbroideryPreview } from './screens/EmbroideryPreview';
import { ShopifyMultipass } from './screens/ShopifyMultipass';
import { Menu } from './screens/Menu';

function App() {
  const screens = ['embroidery-preview', 'shopify-multipass'];
  return (
    <>
      <Menu screens={screens} id="menu" />
      <EmbroideryPreview id={screens[0]} />
      <ShopifyMultipass id={screens[1]} />
    </>
  );
}

export default App;
