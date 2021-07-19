import { useState } from 'react'
import './App.css';

function App() {

  const [value, setValue] = useState(0)
  const [value1, setValue1] = useState(0)

  const toRadian = (grades) => {
    return grades * 0.01745;
  };
  const toDegrees= (radians) => {
    return radians * 57.296;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Degrees</h3>
        <input value={value} onChange={e => setValue(e.target.value)}/>
        <h3>radians</h3>
        <input value={value1} onChange={e => setValue1(e.target.value)}/>
        <button onClick={() => {
            setValue1(toRadian(value))
            setValue(toDegrees(value1))
            }}>Convert</button>
      </header>
    </div>
  );
}

export default App;
