import React from 'react';
import Row from './Row';

export default class OldReactExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
      surname: 'Smith',
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleSurnameChange = (e) => {
    this.setState({
      surname: e.target.value,
    })
  }

  render() {
    return (
      <div className="column">
        <p>Old React Example </p>
        <Row label="Name">
          <input 
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Row>
        <Row label="Surname">
          <input
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
        </Row>
      </div>
    );
  }
}
