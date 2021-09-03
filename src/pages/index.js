import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { Routes } from '../constants/Routes'
import HomePage from './HomePage'
import PortfolioPage from './PortfolioPage'
import ServicePage from './ServicesPage'
function index() {
    return (
        <Switch>
            <Route exact path={Routes.home} component={HomePage}/>
            <Route exact path={Routes.portfolio} component={PortfolioPage}/>
            <Route exact path={Routes.service} component={ServicePage}/>
            
        </Switch>
    )
}

export default index
