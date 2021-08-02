import React from 'react';
import './App.scss';
import './common/init.scss';
import Routes from '../src/router/index';
import {Provider} from 'react-redux';
import store  from '../src/store/store';
function App(){

  return (<Provider store={store}><div className="l"><Routes/></div></Provider>)
}
export default App;
