import React, {Component} from 'react'
import '../style.css';

export default class Output extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <>
        <div>
          {this.props.wordGrid.map((row, x) => (
            <div>
              {row[0].split("").map((col, y) => (
                <div>
                  <span>{col}</span>
                  <span>{col}</span>
                  <span>{col}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className='btn' onClick={this.back}>
          back
      </button>

      </>
    );
  }
}
