import React,{Component} from 'react';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Home from './page/home'
import  Article from './page/article'
import  Main from './page/home/main'
import  Other from './page/other'
import Admin from './page/admin'
import Edit from './page/admin/edit'
import Manage from './page/admin/manage'
import NotFound from './page/404'
import TagsList from './page/tagsList'
import TimeList from './page/timeList'
class MainRouter extends Component{
    render(){
        return <BrowserRouter >
            <App>
                <Switch>
                    <Route path='/admin' render={()=>(
                        <Admin>
                            <Switch>
                                <Route  path='/admin/articles/edit' component={Edit}/>
                                <Route path='/admin/articles/manage' component={Manage}/>
                            </Switch>
                        </Admin>
                    )}/>
                     <Route  path='/' render={()=>(
                         <Home>
                            <Switch>
                                <Route path='/' exact  component={Main}/>
                                <Route   path='/time' component={TimeList}/>
                                <Route   path='/other' component={Other}/>
                                <Route   path='/article/:id' component={Article}/>
                                <Route   path='/tags/:id/:name' component={TagsList}/>
                                  <Route  path='/*' component={NotFound} />
                            </Switch>
                        </Home>
                     )} />
                    
                </Switch>
            </App>
        </BrowserRouter>
    }
}

export default MainRouter