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

import Compose from './components/Compose'
import Drafts from './components/Drafts'
import Subscribers from './components/Subscribers'
import Sentmail from './components/Sentmail'


import reducers from './reducers/index';

let store = createStore(reducers, {auth: {authenticated: localStorage.getItem('token')}},
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

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

                    {/* UserHome */}
                    <Route path='/feature' component={Feature}/>
              </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


