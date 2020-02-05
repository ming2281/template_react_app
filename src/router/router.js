import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import Button from "../pages/ui/Button";

import NoMatch from "../pages/NoMatch";

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/admin" render={() => (
                            <Admin>
                                <Route path="/admin/ui/button" component={Button}></Route>
                            </Admin>
                        )} />

                        <Route component={NoMatch}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
