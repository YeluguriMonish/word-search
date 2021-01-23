import React from 'react';
import Dropdown from './dropdown';
import './style.css';

const gridSizeOptions = [
  {value: '3', label: '3x3'},
  {value: '5', label: '5x5'},
  {value: '10', label: '10x10'},
]

var gridSize = "";

function onChangeHandler(value) {
  gridSize = value;
};
function onClickHandler(value) {
  console.log(gridSize);
};

function App() {
  return (
    <section className='main'>
      <Dropdown options={gridSizeOptions} onChangeHandler={onChangeHandler} />
      <button className='btn' onClick={onClickHandler}>
        confirm
      </button>
    </section>
  );
}

export default App;
