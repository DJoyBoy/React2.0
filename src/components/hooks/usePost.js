import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
  const sorterPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sorterPosts;
};

export const usePosts = (posts, sort, query) => {
  const sorterPosts = useSortedPost(posts, sort);
  const sortedAndSerchedPosts = useMemo(() => {
    return sorterPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sorterPosts]);
  return sortedAndSerchedPosts;
};
