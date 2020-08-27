import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoApp } from "./components/todoapp/TodoApp";

import 'react-datepicker/dist/react-datepicker.css';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Login from './components/Login'


localStorage.isLoggedIn = false;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: localStorage.isLoggedIn }
        this.handleLoginApp = this.handleLoginApp.bind(this);
    }

    render() {
        console.log(this.state.isLoggedIn);
        const LoginView = () => (
            <Login funct={this.handleLoginApp.bind(this)}/>
        );

        const TodoAppView = () => (
            <TodoApp />
        );


        let links;
        if (this.state.isLoggedIn) {
            links = <div>
                        <li><Link to="/">Logout</Link></li> 
                        <li><Link to="/todo">Todo</Link></li>
                    </div>;
        } else {
            links = <li><Link to="/">Login</Link></li>;
        }


        return (
            <Router>s
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br />
                    <br />

                    <ul>
                        {links}
                    </ul>

                    <div>
                        <Route path="/todo" component={TodoAppView} />
                        <Route exact path="/" component={LoginView} />
                    </div>
                </div>
            </Router>
        );
    }

    handleLoginApp(ans) {
        this.setState({
            isLoggedIn: ans
        });
        window.location.replace("/todo")
    }


}

export default App;
