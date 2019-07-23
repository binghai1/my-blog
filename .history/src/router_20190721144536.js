import React,{Component} from 'react';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Home from './page/home'
import  Article from './page/article'
class MainRouter extends Component{
    render(){
        return <BrowserRouter >
            <App>
                <Switch>
                     <Route  path='/' render={()=>()
                         <div><button>11</button></div>
                     }}/>
                     <Route  path='/article' Component={Article}/>
                </Switch>
            </App>
        </BrowserRouter>
    }
}

export default MainRouter