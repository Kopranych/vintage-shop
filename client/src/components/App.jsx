import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";

import {Redirect, Route, Switch} from "react-router";
import MainPage from "./MainPage.jsx";
import AdminPage from "./AdminPage.jsx";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/admin" component={AdminPage}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        );
    }

}

export default App;