import React from "react";
import { Link } from "react-router-dom";

import { getNews } from "../utils/Api";
import { getTime } from "../utils/utils";

export const News = ({ newsId }) => {
  const [news, setNews] = React.useState({});
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    if (!isMounted) {
      getNews(newsId).then((res) => setNews(res));
      setIsMounted(true);
    }

    if (!news) {
      getNews(newsId).then((res) => setNews(res));
    }
  }, [news]);

  const newsDate = news && getTime(news.time);

  return (
    <li>
      <Link to={`${newsId}`}>
        <h2>Title: {news && news.title}</h2>
        <p>
          <strong>Rating: </strong>
          {news && news.score}
        </p>
        <p>
          <strong>Author: </strong>
          {news && news.by}
        </p>
        <p>
          <strong>Date: </strong>
          {news && newsDate}
        </p>
      </Link>
    </li>
  );
};
