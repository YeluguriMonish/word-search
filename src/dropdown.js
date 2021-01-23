import React from 'react';
import Select from 'react-select'

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#617d98',
    },
  };
}

function Dropdown({onChangeHandler, options}) {
  return (
    <Select options={options} onChange={onChangeHandler} theme={customTheme} placeholder='select grid size' />
  );
}

export default Dropdown;


