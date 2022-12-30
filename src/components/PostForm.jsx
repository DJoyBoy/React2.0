import React, { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Назва заяви"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Опис заяви"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <button onClick={addNewPost}>Створити заяву</button>
    </form>
  );
};

export default PostForm;
