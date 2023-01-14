import React, { useEffect, useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostForm from "../PostForm";
import PostList from "../PostList";
import PostFilter from "../PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import Pagination from "../UI/pagination/Pagination";
import { getPegeCount } from "../../utils/pajes";
import MySelect from "../UI/select/MeSelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [namber, setNamber] = useState(1);
  // const lastElemnt = useRef();
  // const observer = useRef();

  const sortedAndSerchedPosts = usePosts(
    posts,
    filter.sort,
    filter.query.toLowerCase()
  );
  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPegeCount(totalCount, limit));
  });

  // useEffect(() => {
  //   function callback(entries, observer) {
  //     console.log("alfa");
  //   }

  //   observer.current = new IntersectionObserver(callback);
  //   observer.current.observer(lastElemnt.current);
  // }, []);

  useEffect(() => {
    fetchPost(limit, page);
  }, [page, limit]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function remowPost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function changePage(paga) {
    setNamber(`${paga}`);
    setPage(paga);
    console.log(paga);
  }

  return (
    <div className="App">
      <button onClick={() => setModal(true)}>Створити заяву</button>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1 style={{ color: "red" }}>Відбуласся помилка ${postError}</h1>
      )}
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaulValue="Кількість заяв на сторінці"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показати всі" },
        ]}
      />
      <PostList
        remowe={remowPost}
        posts={sortedAndSerchedPosts}
        title={`Списое заяв №${namber}`}
      />
      {isPostsLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
