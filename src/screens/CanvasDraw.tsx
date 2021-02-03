import React, { useEffect, useState } from 'react';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { Stage, Layer, Text, Image } from 'react-konva';
import useImage from 'use-image';
interface CanvasDrawProps {
  id: string;
}
const url = 'https://konvajs.github.io/assets/yoda.jpg';
export const CanvasDraw: React.FC<CanvasDrawProps> = ({ id }) => {
  const textProps = {
    x: 100,
    y: 10,
    text: 'nice',
    fontFamily: "'Josefin Sans'",
    fontSize: 56
  };

  const text2Props = {
    x: 100,
    y: 50,
    text: 'nice',
    fontFamily: "'Pinyon Script'",
    fontSize: 56
  };

  const [draw, setDraw] = useState(false);
  const [image, status] = useImage(url);
  useEffect(() => {
    setTimeout(() => {
      setDraw(true);
    }, 4000);
  }, []);
  return (
    <ScreenWrapper id={id} color="bg-green-200">
      <div className="bg-red-300">
        <Stage width={600} height={300}>
          {draw && (
            <Layer>
              <Image image={image} x={20} y={90} width={400} height={200} />
              <Text {...textProps} />
              <Text {...text2Props} />
            </Layer>
          )}
        </Stage>
      </div>
    </ScreenWrapper>
  );
};
