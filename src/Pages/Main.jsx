import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../utils/Api";

import { News } from "../Components/News";
import { setNewsIdsList } from "../redux/actions/newsIdsList";

export const Main = () => {
  const { newsIdsList } = useSelector((state) => state.newsIdsList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // let getNews = setTimeout(function tick() {
    //   getAllNews().then((res) => {
    //     dispatch(setNewsIdsList(res.slice(0, 100)));
    //     setNewsId(res.slice(0, 100));
    //   });
    //   getNews = setTimeout(tick, 5000);
    // }, 5000);

    setInterval(() => {
      getAllNews().then((res) => {
        dispatch(setNewsIdsList(res.slice(0, 100)));
        // setNewsIds(res.slice(0, 100));
      });
    }, 5000);
  }, []);

  const onClickGetAllNews = () => {
    getAllNews().then((res) => dispatch(setNewsIdsList(res.slice(0, 100))));
  };

  return (
    <ul className="container">
      <h1>API HACKER NEWS</h1>
      <button onClick={onClickGetAllNews}>Update Data</button>
      {newsIdsList.map((newsId) => {
        return <News key={newsId} newsId={newsId} />;
      })}
    </ul>
  );
};
