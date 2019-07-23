import React,{Component} from 'react';
class MainRouter extends Component{
    render(){
        return <Router histroy={BrowserRouter}>
            <App>
                <Route path='/' Component={Home}></Route>
            </App>
        </Router>
    }
}

export default MainRouter