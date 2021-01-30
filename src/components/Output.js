import React, {Component} from 'react'
import '../style.css';

export default class Output extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  checkCoords = (x, y, wordCoordinates) => {
    let id = "inactive";
    const coords = [x, y];
    for (var i = 0; i < Object.keys(wordCoordinates).length; i++) {
      if (wordCoordinates[i][0] == coords[0] && wordCoordinates[i][1] == coords[1]) {
        id = "active";
      }
    }
    return id;
  }

  render() {
    return (
      <>
        <div>
          {this.props.wordGrid.map((row, x) => (
            <div id="flexcon">
              {row[0].split("").map((col, y) => (
                <div>
                  <span id={this.checkCoords(x, y, this.props.wordCoordinates)} >{col}</span>
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
