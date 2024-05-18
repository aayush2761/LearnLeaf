import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import storageService from "../appwrite/storage";

function PostCard({ $id, title, featuredImg }) {
  const [loader, setLoader] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    setLoader(true);
    try {
      const src = storageService.getFilePreview(featuredImg, 100);
      setImgSrc(src);
    } catch (error) {
      console.log("Can't get image: ", error);
    }
    setLoader(false);
  }, [featuredImg]);

  return loader ? (
    <p className="text-center">Loading...</p>
  ) : (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-slate-100 rounded-xl p-4">
        <div
          className="w-full h-40 bg-cover bg-center mb-4 rounded-lg border-2 border-black"
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
