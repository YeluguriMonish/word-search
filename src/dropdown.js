import React, {useState} from 'react';
import Select from 'react-select'


function Dropdown({onChangeHandler, options}) {
  return (
    <Select options={options} onChange={onChangeHandler} />
  );
}

export default Dropdown;


