import React from 'react';
import Dropdown from './dropdown'

const gridSizeOptions = [
  {value: '10', label: '10x10'},
  {value: '15', label: '15x15'},
  {value: '20', label: '20x20'}
]

function onChangeHandler(value) {
  console.log(value);
};

function App() {
  return (
    <>
      <Dropdown options={gridSizeOptions} onChangeHandler={onChangeHandler} />
    </>
  );
}

export default App;
