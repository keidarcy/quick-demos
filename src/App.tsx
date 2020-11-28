import React from 'react';
import './App.css';
import { EmbroideryPreview } from './screens/EmbroideryPreview';
import { ShopifyMultipass } from './screens/ShopifyMultipass';
import { Menu } from './screens/Menu';
import { HttpRequest } from './screens/HttpRequest';

function App() {
  const screens = ['http-request', 'embroidery-preview', 'shopify-multipass'];
  return (
    <>
      <Menu screens={screens} id="menu" />
      <HttpRequest id={screens[0]} />
      <EmbroideryPreview id={screens[1]} />
      <ShopifyMultipass id={screens[2]} />
    </>
  );
}

export default App;
