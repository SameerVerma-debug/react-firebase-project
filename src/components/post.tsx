import { Post as IPost } from "../pages/home";

interface Props{
  post:IPost,
  key: number,
}

export const Post = ({post,key}:Props) => {
  return (
    <div className="post" key={key}>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-description">{post.description}</p>
      <div className="footer">
        <p>@{post.username}</p>
        <button className="like-button">&#128077;</button>
        <span>0</span>
      </div>
    </div>
  );
};
