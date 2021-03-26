import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';


const LayoutRoute = (props) => {
    return (
        <div>

            { /* Main navgation */ }
            <NavBar 
                brand="OwnHomes" 
                links={
                [
                    {
                    'path': '/',
                    'label': 'Home'
                    },
                    {
                    'path': '/properties',
                    'label': 'Properties'
                    },
                    {
                    'path': '/about',
                    'label': 'About'
                    },
                    {
                    'path': '/contact',
                    'label': 'Contact'
                    },
                    {
                    'path': '/registration',
                    'label': 'Registration'
                    }
                ]
                } 
            />

            <div className="content" style={{minHeight: 'calc(100vh - 112px)'}}>
                <Route path={props.path} exact={props.exact} component={props.component} />
            </div>


            { /* Footer navigation */ }
            <NavBar 
                brand="OwnHomes" 
                links={
                [
                    {
                    'path': '/',
                    'label': 'Home'
                    },
                    {
                    'path': '/properties',
                    'label': 'Properties'
                    },
                    {
                    'path': '/about',
                    'label': 'About'
                    },
                    {
                    'path': '/contact',
                    'label': 'Contact'
                    }
                ]
                } 
            />

        </div>
    )
}

export default LayoutRoute;
