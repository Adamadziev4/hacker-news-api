import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCommentsIdsList } from "../../redux/actions/commentsIdsList";

import { Comments } from "../Comments";

import { getNews, getComments } from "../../utils/Api";
import { getTime } from "../../utils/utils";

import "./FullNews.css";

export const FullNews = () => {
  const { newsIdsList } = useSelector((state) => state.newsIdsList);
  const { commentsIdsList } = useSelector((state) => state.commentsIdsList);
  const dispatch = useDispatch();

  const { id } = useParams();

  const [news, setNews] = React.useState({});
  const [commentsCount, setCommentsCount] = React.useState(0);

  const newsId = newsIdsList.find((newsId) => newsId === +id);
  const newsDate = getTime(news.time);

  const getAllCommentsCount = async () => {
    if (commentsIdsList.length === 0) return "loading..";

    const commentsObj = await getComments(commentsIdsList);

    for (let i = 0; i < commentsObj.length; i++) {
      if (commentsObj[i].kids) {
        const arr = await getComments(commentsObj[i].kids);
        commentsObj.push(...arr);
      }
    }

    setCommentsCount(commentsObj.length);
  };

  const commentsIdsNull = () => {
    dispatch(setCommentsIdsList([]));
    setCommentsCount("loading..");
  };

  React.useEffect(() => {
    getNews(newsId).then((res) => {
      setNews(res);
      if (res.kids) {
        dispatch(setCommentsIdsList(res.kids));
      }
    });

    return commentsIdsNull();
  }, []);

  React.useEffect(() => {
    if (commentsIdsList.length > 0 && commentsCount === "loading..") {
      getAllCommentsCount();
    } else if (commentsIdsList.length === 0) {
      setCommentsCount(0);
    } else {
      getAllCommentsCount();
    }
  }, [commentsIdsList, commentsCount]);

  console.log(commentsIdsList);

  const onClickUpdateComments = () => {
    getNews(newsId).then((res) => {
      dispatch(setCommentsIdsList(res.kids));
    });
  };

  return (
    <div className="fullNews">
      <p>
        <a href={news.url && news.url}>
          <strong>News URL</strong>
        </a>
      </p>
      <p>
        <strong>Title: </strong>
        {news.title}
      </p>
      <p>
        <strong>Date: </strong>
        {newsDate}
      </p>
      <p>
        <strong>Author: </strong>
        {news.by}
      </p>
      <div className="fullNewsBtns">
        <Link to="/">
          <button className="onNewsList">Back to news list</button>
        </Link>
        <button className="updateComments" onClick={onClickUpdateComments}>
          Update comments
        </button>
      </div>
      <p>
        <strong>Comments: </strong> {commentsCount}
      </p>
      {commentsIdsList.length !== 0 && (
        <Comments commentsId={commentsIdsList} />
      )}
    </div>
  );
};
