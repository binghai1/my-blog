import React,{Component} from 'react';
import App from './App';
import {BrowserRouter,Router,Route,Switch} from 'react-router-dom'
import  Home from './page/home'
class MainRouter extends Component{
    render(){
        return <Router histroy={BrowserRouter}>
            <App>
                <Switch>
                     <Route path='/' Component={Home}></Route>
                </Switch>
            </App>
        </Router>
    }
}

export default MainRouter