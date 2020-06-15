// src >> App.js

import React, { Component } from 'react';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import Practice from './components/Practice';
import demoUseEffect from './components/demoUseEffect';
import useRefsTutorial from "./components/useRefsTutorial";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>
            React Crud Example
          </h2>
          <nav className="navbar">
          <ul className="navbar-nav mr-auto">
            <li >
              <Link to={'/postList'} className="nav-link" >
              Post List
              </Link>
              
            </li>
            <li className="nav-link">
            <Link to={'/addPost'} className="nav-link" >
              Add Post
              </Link>
            </li>
            <li className="nav-link">
            <Link to={'/practice'} className="nav-link">
              Practice
            </Link>
            </li>
            <li className="nav-link">
            <Link to={'/useEffect'} className="nav-link">
              useEffect
            </Link>
            </li>
            <li className="nav-link">
            <Link to={'/useRefs'} className="nav-link">
              useRefs
            </Link>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route exact path='/postList' component= {PostList} />
            <Route exact path='/addPost'  render={() => <NewPost key="1" />} />
            <Route exact path='/practice' component = {Practice}/>
            <Route exact path='/editPost/:id' render={() => <NewPost key="2" />}/>
            <Route exact path='/useEffect' component = {demoUseEffect}/>
            <Route exact path='/useRefs' component = {useRefsTutorial}/>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;