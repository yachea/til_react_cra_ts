import { MouseEvent, useState } from 'react';

type JSXElement = () => JSX.Element;
type HandleClick = (e: MouseEvent<HTMLButtonElement>) => void;
type IsOnType = boolean;

interface IJSXElement {
  (): JSX.Element;
}
interface IHandleClick {
  (): void;
}

const ToggleSwitch: JSXElement | IJSXElement = () => {
  // ts 자리
  const [isOn, setIsOn] = useState<IsOnType>(false);
  const handleClidk: HandleClick | IHandleClick = () => {
    setIsOn(!isOn);
  };

  // tsx 자리
  return (
    <div>
      <h2>ToggleSwitch : {isOn ? '밝아요' : '어두워요'}</h2>
      <div>
        <button onClick={handleClidk}>토글</button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
