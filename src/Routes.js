import React, { Suspense } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import PageLoader from './components/PageLoader'
import './style.css'

const AboutUs = React.lazy(() => import('./Pages/AboutUs'))
const Dashboard = React.lazy(() => import('./Pages/Dashboard'))

const Routes = () => {
    return (
        <HashRouter>
            <Suspense fallback={PageLoader}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/About" />}
                    />
                    <Route exact path="/About" component={AboutUs} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Suspense>
        </HashRouter>
    )
}

export default Routes
