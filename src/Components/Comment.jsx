import React from "react";

import { Comments } from "./Comments";

export const Comment = ({ comment, getAllComments = false }) => {
  const [isKidsComments, setIsKidsComments] = React.useState(false);

  const onClickGetComments = () => {
    if (comment.kids) {
      setIsKidsComments(true);
    }
  };

  return (
    <li>
      <p onClick={onClickGetComments}>{comment.text}</p>
      {getAllComments ? (
        <Comments commentsId={comment.kids} />
      ) : (
        isKidsComments && (
          <Comments commentsId={comment.kids} getAllComments={true} />
        )
      )}
      {/* {getAllComments && <Comments commentsId={comment.kids} />}
      {isKidsComments && (
        <Comments commentsId={comment.kids} getAllComments={true} />
      )} */}
    </li>
  );
};
