import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Buttons } from './Buttons';




function App() {

  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  function addOneToCount1() {
    if (count1 < 2) {
      setCount1(count1 + 1);
    } else {
      setCount1(0);
    }
  }

  function addOneToCount2() {
    if (count2 < 2) {
      setCount2(count2 + 1);
    } else {
      setCount2(0);
      addOneToCount1();
    }
  }

  function addOneToCount3() {
    if (count3 < 2) {
      setCount3(count3 + 1);
    } else {
      setCount3(0);
      addOneToCount2();
    }
  }



  function printButtonName(buttonName: string) {
    console.log(buttonName);
    switch (buttonName) {
      case 'button1':
        addOneToCount1();
        break;
      case 'button2':
        addOneToCount2();
        break;
      case 'button3':
        addOneToCount3();
        break;
      default:
    }
  }

  React.useEffect(() => {
    console.log('count1', count1);
    console.log('count2', count2);
    console.log('count3', count3);
  }, [count1, count2, count3]);

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {count1}
        {count2}
        {count3}

        <Buttons onButtonClicked={printButtonName} />
      </header>
    </div>
  );
}

export default App;
