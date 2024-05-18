import React, { useState, useEffect } from "react";
import dataBaseService from "../appwrite/db";
import authService from "../appwrite/auth";
import { Container, PostCard } from "../components";
import homeimg from "../assets/homeimg.jpg";
import { useTypewriter } from "react-simple-typewriter";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize authentication state

  const [typeEffect] = useTypewriter({
    words: ['Read Post', 'Update Post', 'Delete Post', 'Create Post'],
    loop: {},
    typeSpeed: 125,
    deleteSpeed: 40,
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const user = await authService.getCurrentUser();
        setIsAuthenticated(!!user); // Set authentication status
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
      }
    };

    const fetchPosts = async () => {
      try {
        const postsData = await dataBaseService.getPosts();
        if (postsData) {
          setPosts(postsData.documents);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    checkAuthStatus();
    fetchPosts();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="w-full py-4 mt-2 text-center bg-[#edf1f7]">
        <Container>
          <div className="flex flex-row flex-wrap justify-center items-center px-8">
            <div className="p-2 w-full md:w-1/2 min-h-4 flex justify-center md:justify-center items-center">
              <h1 className="text-5xl font-bold hover:text-gray-500 text-center pr-6">
                Login to <span>{typeEffect}</span>
              </h1>
            </div>
            <div className="p-2 w-full md:w-1/2 min-h-4 flex justify-center md:justify-center items-center pl-8">
              <img src={homeimg} alt="Home image" />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (isAuthenticated && posts.length === 0) {
    return (
      <div className="w-full py-4 mt-2 text-center bg-[#edf1f7]">
        <Container>
          <div className="flex flex-row flex-wrap justify-center items-center px-8">
            <div className="p-2 w-full md:w-1/2 min-h-4 flex justify-center md:justify-center items-center">
              <h1 className="text-5xl font-bold hover:text-gray-500 text-center pr-6">
                Add post
              </h1>
            </div>
            <div className="p-2 w-full md:w-1/2 min-h-4 flex justify-center md:justify-center items-center pl-8">
              <img src={homeimg} alt="Home image" />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
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

export default Home;
