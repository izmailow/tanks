import React from 'react'
import { Page, Login } from '.'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles'

export class App extends React.Component {
    render () {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route exact={true} path='/' component={Login} />
                        <Route exact={true} path='/tanks' component={Page} />
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}