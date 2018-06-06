import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Welcome to the U.S. Senate!</h2>
    </div>
)

const Republicans = () => (
    <div>
        <h2>Republicans</h2>
    </div>
)

const Democrats = () => (
    <div>
        <h2>Democrats</h2>
    </div>
)

const Independents = () => (
    <div>
        <h2>Independents</h2>
    </div>
)

const byState = () => (
    <div>
        <h2>State</h2>
    </div>
)


const Routes = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Republicans">Repuplicans</Link></li>
                <li><Link to="/Democrats">Democrats</Link></li>
                <li><Link to="/Independents">Independents</Link></li>
                <li><Link to="/byState">State</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/republicans" component={Republicans}/>
            <Route path="/democrats" component={Democrats}/>
            <Route path="/Independents" component={Independents}/>
            <Route path="/byState" component={byState}/>
        </div>
    </Router>
)
export default Routes
