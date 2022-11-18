import React from "react";

import { Comment } from "./Comment";

import { getComments } from "../utils/Api";

export const Comments = ({ commentsId, getAllComments = false }) => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    if (commentsId) {
      getComments(commentsId).then((res) => setComments(res));
    }

    return setComments([]);
  }, []);

  console.log(comments);

  return (
    <ul>
      {comments.map((comment) => (
        <Comment
          key={comment.time}
          comment={comment}
          getAllComments={getAllComments}
        />
      ))}
    </ul>
  );
};
