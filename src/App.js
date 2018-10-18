import React from 'react';
import './App.css';

const Body = ({ activeTab }) => {
  if (activeTab === "about") {
    return <h1>about</h1> //
  } else {
    return <h1>home</h1>
  }
}

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
        <Body activeTab={this.state.activeTab} />
        {/* {this.state.activeTab} */}
      </div>
    );
  }
}

export default App;