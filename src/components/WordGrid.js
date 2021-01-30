import React, {Component} from 'react'
import '../style.css';

export default class WordGrid extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <>
        <form onSubmit={this.continue}>
          <textarea id='puzzle-textarea' onChange={this.props.handleChange('wordGrid')} cols='130' rows='10' placeholder='enter word bank seperated by spaces'></textarea>
        </form>
        <button className='btn' onClick={this.continue}>
          start search
      </button>
        <button className='btn' onClick={this.back}>
          back
      </button>
      </>
    );
  }
}
