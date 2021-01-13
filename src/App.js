import Episode1 from "./pages/Episode1";
import Error404 from "./pages/Error404";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./Reset.sass";
import "./App.sass";
import "./Fonts.sass";
import Home from "./pages/Home";
import Episode2 from "./pages/Episode2";

function App() {
    return (
        <HashRouter basename="/">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/articles/create-drone-1" component={Episode1} />
                <Route path="/articles/create-drone-2" component={Episode2} />
                <Route path="/" component={Error404} />
            </Switch>
        </HashRouter>
    );
}

export default App;