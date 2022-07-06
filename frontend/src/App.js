import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CheeseList from './CheeseList';
import CheeseEdit from "./CheeseEdit";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/cheeseria-ui/' component={CheeseList}/>
                    <Route exact path='/cheeseria-ui/:id' component={CheeseEdit}/>
                </Switch>
            </Router>
        )
    }
}

export default App;