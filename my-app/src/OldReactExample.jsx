import React from 'react';
import Row from './Row';
import { ThemeContext } from './ThemeContext';

export default class OldReactExample extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
      surname: 'Smith',
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    document.title = 'Old:' + this.state.name;
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentDidUpdate() {
    document.title = 'Old:' + this.state.name;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
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

  handleWindowResize = (e) => {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    const { fontColor, backgroundColor } = this.context;

    return (
      <div className="column" style={{ 'backgroundColor': backgroundColor, 'color': fontColor }}>
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
        <Row label="Width">
          <div>{this.state.width}</div>
        </Row>
      </div>
    );
  }
}
