import React, { Component } from 'react';

class LinkCreate extends Component {
  render() {
    return (
      <form action="">
        <div className="form-group">
          <label>Link to shorten</label>
          <input type="text" className="form-control"/>
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;