import Home from '../pages/home/index';
import Search from '../pages/search/index';
import Hot from '../pages/hot/index';
import React from 'react';

import PlayMusic from '../components/playmusic/index'
import SongList from '../pages/songlist/index'
import {HashRouter,Route,Switch} from 'react-router-dom'

const Routes = () => {
    return(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/hot" component={Hot}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/list/:id/:title"  component={SongList}></Route>
        </Switch>
        <PlayMusic></PlayMusic>
    </HashRouter>
    
    )
}
export default Routes