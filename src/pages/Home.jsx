import React, { useState, useEffect } from "react";
import dataBaseService from "../appwrite/db";
import authService from "../appwrite/auth";
import { Container, PostCard } from "../components";
import homeimg from "../assets/homeimg.jpg";
import { useTypewriter } from "react-simple-typewriter";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        setIsAuthenticated(!!user);
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
      <div className="w-full py-16 mt-4 bg-[#edf1f7]">
        <Container>
          {/* Existing Section */}
      <div className="flex flex-row flex-wrap justify-center items-center px-8">
        <div className="p-2 w-full md:w-1/2 min-h-4 flex flex-col justify-center items-center text-left">
          <h1 className="text-5xl font-bold text-gray-800 hover:text-green-600 text-left pr-6 mb-4">
            Login to <span className="text-green-500">{typeEffect}</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Unlock full access to create, update, and manage your posts.
          </p>
          <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
            Register Now
          </button>
        </div>
        <div className="p-2 w-full md:w-1/2 min-h-4 flex justify-center items-center pl-8">
          <img src={homeimg} alt="Home illustration" className="rounded-lg shadow-lg" />
        </div>
      </div>

          {/* CRUD Features Section */}
          <div className="flex flex-col items-center text-left mb-12 mt">
            <h2 className="text-sm font-semibold text-green-500">STUDENT CODE HUB</h2>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              A collaborative platform to grow with your coding journey.
            </h1>
            <p className="text-gray-500 text-lg mb-8 text-center max-w-2xl">
              Discover, share, and improve your coding skills with a community-driven blogging platform designed for students.
            </p>
          </div>
    
          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-60 h-64 bg-white shadow-lg rounded-lg flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 relative">
              <div className="w-full h-1 bg-green-500 rounded-t-lg absolute top-0" />
              <span className="text-4xl text-green-500 mt-4 mb-4">✍️</span>
              <h3 className="font-semibold text-gray-800">Create Posts</h3>
              <p className="text-gray-500 mt-2 text-center">
                Share your unique coding solutions, tips, and tutorials to help others learn.
              </p>
            </div>
    
            <div className="w-60 h-64 bg-white shadow-lg rounded-lg flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 relative">
              <div className="w-full h-1 bg-blue-500 rounded-t-lg absolute top-0" />
              <span className="text-4xl text-green-500 mt-4 mb-4">👓</span>
              <h3 className="font-semibold text-gray-800">Read & Explore</h3>
              <p className="text-gray-500 mt-2 text-center">
                Explore posts by other students and find insights that can help you solve coding challenges.
              </p>
            </div>
    
            <div className="w-60 h-64 bg-white shadow-lg rounded-lg flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 relative">
              <div className="w-full h-1 bg-yellow-500 rounded-t-lg absolute top-0" />
              <span className="text-4xl text-green-500 mt-4 mb-4">🔄</span>
              <h3 className="font-semibold text-gray-800">Update & Improve</h3>
              <p className="text-gray-500 mt-2 text-center">
                Update your own posts to refine your solutions and reflect your coding growth.
              </p>
            </div>
    
            <div className="w-60 h-64 bg-white shadow-lg rounded-lg flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 relative">
              <div className="w-full h-1 bg-red-500 rounded-t-lg absolute top-0" />
              <span className="text-4xl text-green-500 mt-4 mb-4">🗑️</span>
              <h3 className="font-semibold text-gray-800">Manage Your Content</h3>
              <p className="text-gray-500 mt-2 text-center">
                Delete posts when they’re no longer relevant or replace them with newer insights.
              </p>
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
            <div className="p-2 w-full md:w-1/2 min-h-4 flex flex-col justify-center items-center text-left">
              <h1 className="text-5xl font-bold text-gray-800 hover:text-green-600 text-left pr-6 mb-4">
                Add post
              </h1>
              <p className="text-gray-500 text-lg">
                Share your insights and coding solutions with the community.
              </p>
              <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                Create New Post
              </button>
            </div>
            <div className="p-2 w-full md:w-1/2 min-h-4 flex justify-center items-center pl-8">
              <img src={homeimg} alt="Home illustration" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-[#edf1f7]">
      <Container>
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          Explore Latest Posts
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
            <div key={post.$id} className="p-4 w-full sm:w-1/2 lg:w-1/4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
