import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { setNewsIdsList } from "./redux/actions/newsIdsList";
import { FullNews } from "./Components/FullNews/FullNews";

import { Main } from "./Pages/Main";
import { getAllNews } from "./utils/Api";

import "./App.css";

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    setInterval(() => {
      getAllNews().then((res) => dispatch(setNewsIdsList(res)));
    }, 1000 * 60);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" children={<Main />} exact />
        <Route path="/:id" children={<FullNews />} exact />
      </Switch>
    </BrowserRouter>
  );
};
