import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Post } from "../components/post";

export interface Post {
  description: string;
  id: string;
  userId: string;
  title: string;
  username: string;
}

export const Main = () => {
  const postsRef = collection(db, "posts");
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [user] = useAuthState(auth);

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]);
  };

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div className="posts-container-wrapper">
      <h1>Home Page</h1>
      <div className="posts-container">
        {user && posts?.map((post, key) => <Post post={post} key={key} />)}
      </div>
    </div>
  );
};
