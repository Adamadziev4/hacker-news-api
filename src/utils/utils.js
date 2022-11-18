export const getTime = (newsTime) => {
  const ms = new Date(newsTime);

  const seconds =
    ms.getSeconds().length === "1" ? "0" + ms.getSeconds() : ms.getSeconds();

  const milliSeconds = ms.getMilliseconds().toString().substr(0, 2);

  return (
    ms.getDate() +
    ":" +
    ms.getMonth() +
    1 +
    ":" +
    ms.getFullYear() +
    " " +
    ms.getHours() +
    ":" +
    seconds +
    ":" +
    ms.getMilliseconds()
  );
};
