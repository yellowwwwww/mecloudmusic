import Home from '../pages/home/index';
import Search from '../pages/search/index';
import Hot from '../pages/hot/index';
import React from 'react';
import TopBar from '../components/topbar'
import {HashRouter,Route,Switch} from 'react-router-dom'

const Routes = () => {
    return(
    <HashRouter>
        <TopBar></TopBar>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/hot" component={Hot}></Route>
            <Route exact path="/search" component={Search}></Route>
        </Switch>
    </HashRouter>
    
    )
}
export default Routes