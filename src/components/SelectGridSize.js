import React, {Component} from 'react'
import Select from 'react-select';

const options = [
  {value: 3, label: '3x3'},
  {value: 5, label: '5x5'},
  {value: 10, label: '10x10'}
]

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#617d98',
    },
  };
}

export default class SelectGridSize extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <>
        <Select options={options} onChange={this.props.handleChange('gridSize')} theme={customTheme} placeholder='select grid size' />
        <button className='btn' onClick={this.continue}>
          confirm
      </button>
      </>
    )
  }
}

