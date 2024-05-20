import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import dataBaseService from "../appwrite/db";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      dataBaseService.getPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    } catch (error) {
      console.log("Can't get posts: ", error);
    }
  }, []);

  return (
    <div className="w-fyll py-8  min-h-128">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
