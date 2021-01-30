import React, {Component} from 'react'
import SelectGridSize from './SelectGridSize';
import WordBank from './WordBank';
import WordGrid from './WordGrid';
import Output from './Output';
import algo from '../algo';

export class Parent extends Component {
  state = {
    step: 1,
    gridSize: 3,
    wordBank: 'cat dog cod',
    wordGrid: 'catdogead',
    wordCoordinates: [],
  };

  // Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  };

  startSearch = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });

    let wordGridTemp = this.state.wordGrid.replace(/[\r\n]+/gm, '');
    let wordGridFinal = [];
    let wordBankFinal = this.state.wordBank.split(' ');
    let wordCoordinates = [];

    for (let i = 0; i < this.state.gridSize; i++) {
      wordGridFinal.push([wordGridTemp.substring(i * this.state.gridSize, i * this.state.gridSize + this.state.gridSize)]);
    }

    const wordSearchInit = new algo(wordGridFinal, wordBankFinal);

    for (let j = 0; j < wordBankFinal.length; j++) {
      wordCoordinates = wordSearchInit.patternSearch(wordBankFinal[j]);
    }
    this.setState({wordGrid: wordGridFinal});
    this.setState({wordCoordinates: wordCoordinates});
  };

  // Handle fields change
  handleTextChange = input => e => {
    this.setState({[input]: e.target.value});
  };

  // Handle selection change
  handleSelectChange = input => e => {
    this.setState({[input]: e.value});
  };

  render() {
    const {step, wordGrid, wordCoordinates} = this.state;

    switch (step) {
      case 1:
        return (
          <SelectGridSize nextStep={this.nextStep} handleChange={this.handleSelectChange} />
        );
      case 2:
        return (
          <WordBank nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleTextChange} />
        );
      case 3:
        return (
          <WordGrid nextStep={this.startSearch} prevStep={this.prevStep} handleChange={this.handleTextChange} />
        );
      case 4:
        return (
          <Output prevStep={this.prevStep} wordGrid={wordGrid} wordCoordinates={wordCoordinates} />
        );

      default:
        (console.log('step error'));
    }
  }
}

export default Parent;
