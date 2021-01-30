import React, {Component} from 'react'

export default class WordBank extends Component {
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
          <textarea onChange={this.props.handleChange('wordBank')} cols='145' rows='10' placeholder='enter word bank seperated by spaces'></textarea>
        </form>
        <button className='btn' onClick={this.continue}>
          confirm
      </button>
        <button className='btn' onClick={this.back}>
          back
      </button>
      </>
    );
  }
}
