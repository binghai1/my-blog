import React,{Component} from 'react';
import App from './App';
import {browserHistory,Router,Route} from 'react-router-dom'
class MainRouter extends Component{
    render(){
        return <Router histroy={browserHistory}>
            <App>
                
            </App>
        </Router>
    }
}

export default router