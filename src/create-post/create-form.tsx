import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/form.css";
import {collection,addDoc} from "firebase/firestore";
import {auth, db} from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreatePostData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required("Title is Required!"),
    description: yup.string().required("Description is Required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db,"posts");
  const onCreatePost = async (data: CreatePostData) => {
    await addDoc(postsRef,{
      title:data.title,
      description:data.description,
      username:user?.displayName,
      userId:user?.uid,
    })

    navigate("/");
  };
  return (
    <div className="wrapper">
      <div className="form-container">
        <form id="form" onSubmit={handleSubmit(onCreatePost)}>
          <legend>Create Post</legend>
          <div className="title-div">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" {...register("title")} />
            <p className="error">{errors.title?.message}</p>
          </div>
          <div className="description-div">
            <label htmlFor="description">Description: </label>
            <textarea id="description" {...register("description")} />
            <p className="error">{errors.description?.message}</p>
          </div>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};
