import React from 'react';
import Row from './Row';
import { ThemeContext, themes } from './ThemeContext';

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
      <ThemeContext.Provider value={themes.light}>
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
      </ThemeContext.Provider>
    );
  }
}
