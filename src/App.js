import React, { Component } from 'react';
import Login from './Login';
import ChatApp from './ChatApp';
import '@progress/kendo-theme-material/dist/all.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      loggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }


  handleLogin(event) {
    event.preventDefault();
    this.setState({ loggedIn: true });
  }
  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    let loginOrChat;
    if (this.state.loggedIn) {
      loginOrChat = <ChatApp username={this.state.username}/>;
    } else {
      loginOrChat = (
        <Login
          handleLogin={this.handleLogin}
          handleUsernameChange={this.handleUsernameChange}
          username={this.state.username}
        />
      );
    }
    return (
      <div className="container">
        <div className="row mt-3 justify-content-center">{loginOrChat}</div>
      </div>
    );
  }
}

export default App;
