import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import LoginComponent from './../containers/LogInComponent/LoginComponent';
import DashBoardComponent from './../containers/Dashboard/DashboardComponent';

const RoutingComponent = () => {
    return(
        <>  
            <Switch>
                <Route exact path="/home" component={LoginComponent} />
                <Route path="/dashboard" component={DashBoardComponent} />
                <Redirect from="/" to="/home" />
            </Switch>
        </>
    );
}

export default RoutingComponent;