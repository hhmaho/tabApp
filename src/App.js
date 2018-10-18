import React from 'react';
import './App.css';

const Body = ({ activeTab }) => {
  if (activeTab === "about") {
    return <AboutTab />
  } else if (activeTab === "contact") {
    return <ContactTab />
  } else { return <HomeTab /> }
}

function Tab({ title, tab, changeTab, active }) {
  return <button onClick={() => changeTab(tab)}>
    {title}{active ? "*" : ""}
  </button>
}

function Tabs({ changeTab, activeTab }) {
  return <div>
    <Tab title="Front" tab="home" changeTab={changeTab} active={activeTab === "home"} />
    <Tab title="About" tab="about" changeTab={changeTab} active={activeTab === "about"} />
    <Tab title="Contact us" tab="contact" changeTab={changeTab} active={activeTab === "contact"} />
  </div>
}

function HomeTab() {
  return <h1>inhoud van de homepage</h1>
}

function AboutTab() {
  return <h1>inhoud van de aboutpage</h1>
}

function ContactTab() {
  return <h1>inhoud van de contactpagina</h1>
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
        <Tabs activeTab={this.state.activeTab} changeTab={this.changeTab} />
        <Body activeTab={this.state.activeTab} />
      </div>
    );
  }
}

export default App;