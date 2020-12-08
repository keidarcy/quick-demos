import React, { useState } from 'react';
import { ScreenWrapper } from '../components/ScreenWrapper';

interface QRCodeGeneratorProps {
  id: string;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ id }) => {
  const [url, setUrl] = useState(window.location.href);

  return (
    <>
      <ScreenWrapper id={id} color="bg-gradient-to-r from-teal-400 to-blue-500">
        <input
          id="text"
          type="text"
          value={url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUrl(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              // @ts-expect-error
              const qrcode = new QRCode('react-darcy-qrcode');
              qrcode.makeCode(url);
            }
          }}
        />
        <br />
        <div id="react-darcy-qrcode" style={{ width: '160px', height: '160px' }}></div>
      </ScreenWrapper>
    </>
  );
};
