import Header from "./components/Header";

import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import router from "./router";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300} key={location.key}>
          <Routes location={location}>
            {router.map((route) => (
              <Route key={route.path} {...route}></Route>
            ))}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
