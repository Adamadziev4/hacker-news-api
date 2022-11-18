const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const getNewsIds = `${baseUrl}/newstories.json`;
const itemUrl = `${baseUrl}/item/`;

export const getAllNews = async () => {
  console.log("halo");
  try {
    const res = await fetch(getNewsIds);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
  }
};

export const getNews = async (newsId) => {
  try {
    const res = await fetch(`${itemUrl + newsId}.json`).then((res) =>
      res.json()
    );
    return res;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
  }
};

export const getComments = async (commentsIdArr) => {
  const comments = [];
  try {
    for (let i = 0; i < commentsIdArr.length; i++) {
      const res = await fetch(`${itemUrl + commentsIdArr[i]}.json`).then(
        (res) => res.json()
      );
      comments.push(res);
    }

    return comments;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
  }
};
