// // FS30-StrangersThings-PostView.jsx

import React from "react";
import { useState, useEffect } from "react";

import Messages from "./Messages";

export default function PostView({ post, token }) {
  return (
    <div className="post-view card">
      <div className="title">{post.title}</div>
      <div className="description">{post.description}</div>
      <div className="price">{`Price: ${post.price}`}</div>
      <div className="seller">{`Seller: ${post.author.username}`}</div>
      <div className="location">{`Location: ${post.location}`}</div>
      <Messages post={post} token={token} />
    </div>
  );
}
