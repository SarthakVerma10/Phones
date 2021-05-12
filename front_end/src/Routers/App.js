import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Dashboard from '../Components/Dashboard';
import Phone from '../Components/Phone'; 
import Add from '../Components/Add';

export default function App () {
    return (
        <div>
          <Header />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/phone" component={Phone} />
              <Route path="/add" component={Add} />
            </Switch>
          </BrowserRouter>
        </div>
    )
}