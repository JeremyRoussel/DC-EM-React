import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import thunk from 'redux-thunk'

import Welcome from './components/Welcome';
import Feature from './components/Feature';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import About from './components/About';

import Dashboard from './components/Dashboard'
import Compose from './components/Compose'
import Drafts from './components/Drafts'
import Subscribers from './components/Subscribers'
import Sentmail from './components/Sentmail'
import BaseLayout from './components/layout/BaseLayout'

import {loadState, saveState} from './reducers/localStorage'
import {throttle} from 'lodash'

import reducers from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const persistedState = loadState();

let store = createStore(reducers, persistedState,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

store.subscribe(throttle(() => {
  saveState(
    store.getState()
  );
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    {/* Menu Bar <- Links that display based on state */}
        <BrowserRouter>
            <BaseLayout>
              <Switch>
                    {/* Base Home Page */}
                    <Route exact path='/' component={Welcome}/>
                    {/* Auth Login Pages */}
                    <Route path='/signup' component={Signup}/>
                    <Route path='/signin' component={Signin}/>

                    {/* Other Un-Auth Routes */}
                    <Route path='/signout' component={Signout}/>
                    {/* AboutUs */}
                    <Route path='/about' component={About}/>

                    {/* UserHome */}
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/feature' component={Feature}/>
                    <Route path='/compose' component={Compose}/>
                    <Route path='/drafts' component={Drafts}/>
                    <Route path='/subscribers' component={Subscribers}/>
                    <Route path='/sentmail' component={Sentmail}/>
              </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


