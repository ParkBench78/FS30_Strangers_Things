// FS30-StrangersThings-PostList.jsx

import React from "react";
import { useState, useEffect } from "react";
import { APIURL } from "../API/api";
import PostView from "./PostView";

export default function PostList({ token }) {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  function filterPost(post) {
    return searchText === ""
      ? post
      : post.title.toLowerCase().includes(searchText.toLowerCase());
  }

  async function fetchPosts() {
    try {
      const response = await fetch(`${APIURL}/posts`);
      const results = await response.json();
      setPosts(results.data.posts);
      console.log(results.data.posts);
      return results;
    } catch (err) {
      console.error("Trouble fetching PostList!", err);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <h1>POSTS</h1>
      <label>
        Search
        <input
          type="text"
          placeholder="Looking for..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </label>
      <div>
        {posts &&
          posts.filter(filterPost).map((post) => {
            return (
              <PostView
                key={post._id}
                post={post}

                // fetchPosts={fetchPosts}
              />
            );
          })}
      </div>
    </>
  );
}
