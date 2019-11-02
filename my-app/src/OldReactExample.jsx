import React from 'react';
import Row from './Row';

export default class OldReactExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <section>
        <Row label="Name">
          <input 
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Row>
      </section>
    );
  }
}
