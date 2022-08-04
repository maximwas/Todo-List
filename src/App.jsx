import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import router from "./router";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        {router.map((route) => (
          <Route key={route.path} {...route}></Route>
        ))}
      </Routes>
    </div>
  );
};

export default App;
