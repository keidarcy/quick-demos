import React from 'react';
import './App.css';
import { EmbroideryPreview } from './screens/EmbroideryPreview';
import { ShopifyMultipass } from './screens/ShopifyMultipass';
import { Menu } from './screens/Menu';
import { HttpRequest } from './screens/HttpRequest';
import { QRCodeGenerator } from './screens/QRCodeGenerator';
import { CanvasDraw } from './screens/CanvasDraw';
import { SpringAnimation } from './screens/SpringAnimation';

function App() {
  const screens = [
    'http-request',
    'embroidery-preview',
    'shopify-multipass',
    'QRCodeGenerator',
    'canvas-draw',
    'spring-animation'
  ];
  return (
    <div
      style={{
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        scrollSnapType: 'y mandatory',
        height: '100%'
      }}
    >
      <Menu screens={screens} id="menu" />
      <HttpRequest id={screens[0]} />
      <EmbroideryPreview id={screens[1]} />
      <ShopifyMultipass id={screens[2]} />
      <QRCodeGenerator id={screens[3]} />
      <CanvasDraw id={screens[4]} />
      <SpringAnimation id={screens[5]} />
    </div>
  );
}

export default App;
