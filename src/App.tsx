import React from 'react';
import './App.css';
import { EmbroideryPreview } from './screens/EmbroideryPreview';
import { ShopifyMultipass } from './screens/ShopifyMultipass';
import { Menu } from './screens/Menu';
import { HttpRequest } from './screens/HttpRequest';
import { QRCodeGenerator } from './screens/QRCodeGenerator';

function App() {
  const screens = [
    'http-request',
    'embroidery-preview',
    'shopify-multipass',
    'QRCodeGenerator'
  ];
  return (
    <>
      <Menu screens={screens} id="menu" />
      <HttpRequest id={screens[0]} />
      <EmbroideryPreview id={screens[1]} />
      <ShopifyMultipass id={screens[2]} />
      <QRCodeGenerator id={screens[3]} />
    </>
  );
}

export default App;
