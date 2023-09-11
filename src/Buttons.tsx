/**
 * @jest-environment jsdom
 * 
 * Buttons to show how it all works
 * 
 * make 3 buttons that make a call back to the parent
 */

import React from 'react';

interface IProps {
    onButtonClicked: (buttonName: string) => void;
}

export const Buttons: React.FC<IProps> = ({ onButtonClicked }) => {
    return (
        <div>
            <button onClick={() => onButtonClicked('button1')}>Button 1</button>
            <button onClick={() => onButtonClicked('button2')}>Button 2</button>
            <button onClick={() => onButtonClicked('button3')}>Button 3</button>
        </div>
    );
}
export { }
export default Buttons;