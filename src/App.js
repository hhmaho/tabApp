import React from 'react';
import './App.css';

const Body = ({ activeTab }) => {
  if (activeTab === "about") {
    return <AboutTab /> //
  } else {
    return <HomeTab />
  }
}

function Tab({ title, tab, changeTab }) {
  return <button onClick={() => changeTab(tab)}>
    {title}
  </button>
}

function HomeTab() {
  return <h1>inhoud van de homepage</h1>
}

function AboutTab() {
  return <h1>inhoud van de aboutpage</h1>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "home" }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab(tab) {
    this.setState({
      activeTab: tab,
    })
  }

  render() {
    return (
      <div>
        <Tab title="Front" tab="home" changeTab={this.changeTab} />
        <button onClick={() => {
          this.setState({
            activeTab: "about"
          })
        }}>About</button>
        <Body activeTab={this.state.activeTab} />

      </div>
    );
  }
}

export default App;