import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Registration from './pages/Registration/Registration';
import Login from './pages/LoginDrawer/Login';
import Home from './pages/Home/Home';

import Auth from './utils/Auth';
import API from './utils/API';

import './App.css';
import styleApp from './styleApp';

import { Layout } from 'antd';

const { Content, Sider } = Layout;

class App extends Component {
  state = {
    loggedIn: false,
    collapsed: false,
    user: null,
    loginVisibility: true
  }

  componentDidMount() {
		this.getUser();
  }

  getUser = () => {
    Auth.getUser().then(response => {
			if (response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		})
  }

  signUp = (signUpData, adminData) => {
    Auth.signup(signUpData)
      .then(user => {
        const id = user.data._id;
        return API.createAdmin(id, adminData);
      })
      .then(user => {
        const { username, password } = signUpData;
        return Auth.login(username, password);
      })
      .then(response => this.setState({user: response.data.user, loggedIn: true}))
      .catch(err => console.log(err));
  }

  login = (username, password) => {
    Auth.login(username, password)
      .then(response => this.setState({user: response.data.user, loggedIn: true, loginVisibility: false}))
  }

  logout = () => {
    Auth.logout()
      .then(response => {
        this.setState({user: null, loggedIn: false});
      })
  }

  onClose = () => {
    this.setState({loginVisibility: false})
  }
  onCollapse = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    console.log("User", this.state.user);
    console.log("LoggedIn", this.state.loggedIn);
    return (
      <div className="App">
      {!this.state.loggedIn && (
        <Layout>
          <Header user={this.state.user} loggedIn={this.state.loggedIn}/>
          <Layout>
            <Sider width={200}
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              style={{background: "#fff"}}
              >
              <Navbar collapsed={this.state.collapsed}/>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content style={styleApp.content}>
                <Registration signUp={this.signUp} />
                <Switch>
                  <Redirect from="/" to="/register" />
                  <Route path="/" render={() => <Registration signUp={this.signUp}/>} />
                </Switch>
              </Content>
            </Layout>
            <Login login={this.login} onClose={this.onClose} visible={this.state.loginVisibility}/>
          </Layout>
        </Layout>
      )}

      {this.state.loggedIn && (
        <Layout>
          <Header user={this.state.user} loggedIn={this.state.loggedIn} logout={this.logout}/>
          <Layout>
            <Sider width={200}
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              style={{background: "#fff"}}
              >
              <Navbar collapsed={this.state.collapsed}/>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content style={styleApp.content}>
                <Switch>
                  <Redirect from="/register" to="/" />
                  <Route exact path="/" render={() => <Home user={this.state.user}/>} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      )}

      </div>
    );
  }
}

export default App;
