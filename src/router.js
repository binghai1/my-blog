import React,{Component} from 'react';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Home from './page/home'
import  Article from './page/article'
import  Main from './page/main'
import  Category from './page/category'
import  Other from './page/other'
class MainRouter extends Component{
    render(){
        return <BrowserRouter >
            <App>
                <Switch>
                     <Route  path='/' render={()=>(
                         <Home>
                            <Switch>
                                <Route exact  path='/' component={Main}/>
                                <Route   path='/category' component={Category}/>
                                <Route   path='/other' component={Other}/>
                                <Route   path='/article/:id' component={Article}/>
                            </Switch>
                        </Home>
                     )} >
                       
                     </Route>
                </Switch>
            </App>
        </BrowserRouter>
    }
}

export default MainRouter