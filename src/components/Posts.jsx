import React, { useState, useEffect } from "react";
import { PageHeader } from "antd";
import PostSnippet from "./PostSnippet";
// import api from "../../mock_api";
import _ from "lodash";
import db from "../../firebase";

export default function posts(props) {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    let postsRef = db.collection("posts");

    postsRef.get().then((posts) => {
      posts.forEach((post) => {
        let { id } = post;
        let data = post.data();
        let payload = {
          id,
          ...data,
        };
        setposts((posts) => [...posts, payload]);
      });
    });
  }, []);

  return (
    <div className="posts_container">
      <div className="page_header_container">
        <PageHeader
          style={{ border: "1px solid rgb(235, 237, 240)" }}
          title="posts"
        />
      </div>

      <div className="articles_container">
        {_.map(posts, (article, idx) => {
          <PostSnippet
            key={idx}
            id={article.id}
            title={article.title}
            content={article.content.substring(1, 1000)}
          />;
        })}
      </div>
    </div>
  );
}
