// // FS30-StrangersThings-PostView.jsx

import React from "react";
import { useState, useEffect } from "react";

import MessageForm from "./MessageForm.jsx";

export default function PostView({ post, token }) {
  return (
    <div className="posts-view">
      <div className="post-title">{post.title}</div>
      <div className="description">{post.description}</div>
      <div className="price">{`Price: ${post.price}`}</div>
      {post.author.username && (
        <div className="seller">{`Seller: ${post.author.username}`}</div>
      )}

      <div className="location">{`Location: ${post.location}`}</div>
      <br />
      {token && <MessageForm post={post} token={token} />}
    </div>
  );
}
