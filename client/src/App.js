import { BrowserRouter, Route, Switch } from "react-router-dom";
import WelcomePage from "./componentes/pages/welcomePage/welcomePage";


function App() {
  return (
    <div className="container">

      <BrowserRouter>

        <Switch>
          <Route path="/" exact render={() => <WelcomePage/>}/>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;