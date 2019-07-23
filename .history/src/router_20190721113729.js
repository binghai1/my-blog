import React,{Component} from 'react';
import App from './App';
import {Bro,Router,Route} from 'react-router-dom'
import  Home from './page/home'
class MainRouter extends Component{
    render(){
        return <Router histroy={browserHistory}>
            <App>
                <Route path='/' Component={Home}></Route>
            </App>
        </Router>
    }
}

export default router