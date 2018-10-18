import React from 'react';
import './App.css';

const Body = ({ activeTab }) => (
  <h1>test</h1>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "home" }
  }
  render() {

    return (
      <div>
        <button onClick={() => {
          this.setState({
            activeTab: "home"
          })
        }}>Home</button>
        <button onClick={() => {
          this.setState({
            activeTab: "about"
          })
        }}>About</button>
        <Body />
        {this.state.activeTab}
      </div>
    );
  }
}

export default App;