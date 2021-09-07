import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />
                
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <Route path="/about">
                            <AboutScreen />
                        </Route>
                        <Route path="/login">
                            <LoginScreen />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter
