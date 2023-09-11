import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Buttons } from './Buttons';




function App() {

  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  let newCount1 = count1;
  let newCount2 = count2;
  let newCount3 = count3;

  function computeTotal() {
    setTotal(newCount1 * 9 + newCount2 * 3 + newCount3);
  }

  function addOneToCount1() {


    if (newCount1 < 2) {
      newCount1 += 1;
    } else {
      newCount1 = 0;
    }
    setCount1(newCount1);
    computeTotal();
  }


  function addOneToCount2() {
    if (newCount2 < 2) {
      newCount2 += 1;
    } else {
      newCount2 = 0;
      addOneToCount1();
    }
    setCount2(newCount2);
    computeTotal();
  }

  function addOneToCount3() {
    if (newCount3 < 2) {
      newCount3 += 1;
    } else {
      newCount3 = 0;
      addOneToCount2();
    }
    setCount3(newCount3);
    computeTotal();
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
        <br>
        </br>
        Total: {total}

        <Buttons onButtonClicked={printButtonName} />
      </header>
    </div>
  );
}

export default App;
