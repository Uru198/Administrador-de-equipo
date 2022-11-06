import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManagePlayerPage from "./componentes/pages/managePlayePage/ManagePlayerPage";
import NewPlayerPage from "./componentes/pages/newPlayerPage/NewPlayerPage";
import WelcomePage from "./componentes/pages/welcomePage/welcomePage";


function App() {
  return (
    <div className="container">

      <BrowserRouter>

        <Switch>
          <Route path="/" exact render={() => <WelcomePage/>}/>
          <Route path="/players/addplayer" exact render={() => <NewPlayerPage/>} />
          <Route path="/status/game/:id" exact render={(routeProps) => <ManagePlayerPage {...routeProps} />} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;