import React from "react";
import { Switch, Route } from "react-router-dom";
import Movies from "./Movies";
import Search from "./Search";

function App() {
  const [movie, setMovie] = React.useState("");

  return (
    <Switch>
      <Route exact path="/">
        <Search movie={movie} setMovie={setMovie} />
      </Route>
      <Route path="/movies">
        <Movies movie={movie} />
      </Route>
    </Switch>
  );
}

export default App;
