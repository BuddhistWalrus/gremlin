import React, {Component} from 'react';
import './styles/splash.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Splash from "./Splash";
import Playground from "./Playground";
import Contact from "./Contact";
import PG13 from "./PG13";
import Gamestonk from "./Gamestonk";
import Whitepaper from "./Whitepaper";
import Gremlin from "./Gremlin";
class AppRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            response: null,
            response_asset: null,
            loading_asset: false,
        };
    }

    render () {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Splash />
                        </Route>
                        <Route exact path="/here">
                            <Splash />
                        </Route>
                        <Route path="/gamestonk">
                            <Gamestonk />
                        </Route>
                        <Route path="/gremlin">
                            <Gremlin />
                        </Route>
                        <Route path="/endgame">
                            <Splash />
                        </Route>
                        <Route path="/whitepaper">
                            <Whitepaper />
                        </Route>
                        <Route path="/pg-13">
                           <PG13 />
                        </Route>
                        <Route path="/contact">
                           <Contact />
                        </Route>
                        <Route path="/playground">
                            <Playground />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AppRouter;