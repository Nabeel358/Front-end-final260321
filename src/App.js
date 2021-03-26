import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutRoute from './LayoutRoute'
import MainScreen from './MainScreen';
import AboutScreen from './AboutScreen';
import RegistrationScreen from './RegistrationScreen';
import PropertiesScreen from './PropertiesScreen';
import Properties2 from './Properties2';
import Properties3 from './Properties3';
import ContactScreen from './ContactScreen';
import Card2 from './Card2';
import Grid from './Grid';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={MainScreen}  />
                <LayoutRoute path="/about" exact={true} component={AboutScreen}  />
                <LayoutRoute path="/registration" exact={true} component={RegistrationScreen}  />
                <LayoutRoute path="/properties" exact={true} component={PropertiesScreen}  />
                <LayoutRoute path="/properties2" exact={true} component={Properties2}  />
                <LayoutRoute path="/properties3" exact={true} component={Properties3}  />
                <LayoutRoute path="/contact" exact={true} component={ContactScreen}  />
                
            </Switch>
        </BrowserRouter>
    )    
};

export default App;