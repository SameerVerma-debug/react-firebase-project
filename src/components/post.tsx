import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { Post as IPost } from "../pages/home";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
  post: IPost;
  key: number;
}

interface Like{
  userId: string,
}

export const Post = ({ post, key }: Props) => {
  const [user] = useAuthState(auth);
  const [likes,setLikes] = useState<Like[]>([]);
  const likesRef = collection(db, "likes");
  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(data.docs.map((doc) => ({userId: doc.data().userId})))
  };

  const isLikedByUser = ({userId}:Like) => {
    return userId === user?.uid;
  }

  const addLike = async () => {
    if(likes?.find(isLikedByUser)){
      return;
    }
     await addDoc(likesRef, { userId: user?.uid, postId: post.id });
     setLikes([...likes,{userId: user?.uid}] as Like[])
   };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div className="post" key={key}>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-description">{post.description}</p>
      <div className="footer">
        <p>@{post.username}</p>
        <button className="like-button" onClick={addLike}>&#128077;</button>
        <span>{likes?.length}</span>
      </div>
    </div>
  );
};
