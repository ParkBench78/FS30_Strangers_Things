// // FS30-StrangersThings-PostView.jsx
// console.log("the PostView component");
import React from "react";
import { useState, useEffect } from "react";

export default function PostView({ post }) {
  return (
    <div>
      <div className="title">{post.title}</div>
      <div className="description">{post.description}</div>
      <div className="price">{`Price: ${post.price}`}</div>
      <div className="seller">{`Seller: ${post.author.username}`}</div>
      <div className="location">{`Location: ${post.location}`}</div>
    </div>
  );
}
