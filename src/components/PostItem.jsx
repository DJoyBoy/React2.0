import React from "react";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  let router = useNavigate();

  return (
    <div className="post__item">
      <div>
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body} </div>
      </div>
      <div>
        <button
          onClick={() => {
            router(`/posts/${props.post.id}`);
          }}
        >
          Коментарії
        </button>
      </div>
      <div>
        <button onClick={() => props.remowe(props.post)}>Видалити</button>
      </div>
    </div>
  );
};

export default PostItem;
