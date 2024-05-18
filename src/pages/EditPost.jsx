import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import dataBaseService from "../appwrite/db";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      dataBaseService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          console.log("Can't get post");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8 min-h-10">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
