import { useContext, useRef } from "react";
import{ PostList }from "../store/post-list-store";
const CreatePost = () => {
const {addPost} = useContext(PostList);

  const UserIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = UserIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.trim().split(' ');
    addPost(userId,postTitle,postBody,reaction,tags);
    UserIDElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  }
  return <>
    <form 
    className="create-post"
    onSubmit={handleSubmit}>
      <div className="mb-3">
        <label
          htmlFor="userId"
          className="form-label"
        >Enter your userId here</label>
        <input
          ref={UserIDElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id" />
      </div>
      <div className="mb-3">
        <label
          htmlFor="title"
          className="form-label"
        >Post Title</label>
        <input
        ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..." />
      </div>
      <div className="mb-3">
        <label
          htmlFor="title"
          className="form-label"
        >Post Content</label>
        <textarea rows={4} 
        ref={postBodyElement}
        type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..." />
      </div>
      <div className="mb-3">
        <label
          htmlFor="reactions"
          className="form-label"
        >Number of reactions</label>
        <input
        ref={reactionsElement} 
        type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post" />
      </div>
      <div className="mb-3">
        <label
          htmlFor="tags"
          className="form-label"
        >Enter your HashTags here</label>
        <input
        ref={tagsElement}        
        type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using sapce" />
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  </>
}
export default CreatePost;