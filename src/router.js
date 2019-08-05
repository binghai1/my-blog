import React,{Component} from 'react';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {asyncComponent} from './util'
import Home from './page/home'
import Main from './page/home/main'
// const Main =asyncComponent(()=>import('./page/home/main'))
const Article =asyncComponent(()=>import('./page/article'))
const Other =asyncComponent(()=>import('./page/other'))
const Admin =asyncComponent(()=>import('./page/admin'))
const Edit =asyncComponent(()=>import('./page/admin/edit'))
const NotFound =asyncComponent(()=>import('./page/404'))
const TagsList =asyncComponent(()=>import( './page/timeList'))
const Manage =asyncComponent(()=>import('./page/admin/manage'))
const TimeList =asyncComponent(()=>import('./page/home/main'))
const UserMange =asyncComponent(()=>import( './page/admin/userManage'))
const Category =asyncComponent(()=>import('./page/category'))


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
                                <Route path='/admin/users/manage' component={UserMange}/>
                            </Switch>
                        </Admin>
                    )}/>
                     <Route  path='/' render={()=>(
                         <Home>
                            <Switch>
                                <Route path='/' exact  component={Main}/>
                                <Route   path='/time' component={TimeList}/>
                                <Route   path='/category' component={Category}/>
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