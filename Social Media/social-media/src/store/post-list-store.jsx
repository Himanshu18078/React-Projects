import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});
const postListReducer = (currentPost, action) => {
  return currentPost;
}
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => { };
  const deletePost = () => { };

  return (<PostList.Provider value={
    {
      postList: postList,
      addPost: addPost,
      deletePost: deletePost,
    }
  }>
    {children}
  </PostList.Provider>)
}
const DEFAULT_POST_LIST = [{
  id: '1',
  title: 'Going to Mumbai',
  body: 'Hi friends , I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace Lot',
  reactions: 2,
  userId: 'user-9',
  tags: ['Vacations', 'Mumbai', 'Enjoying']
},
{
  id: '2',
  title: 'Pass Ho Gye Bhai',
  body: '4 saal ki masti ke bad bhi ho gye hai pass. Hard to bellieve',
  reactions: 15,
  userId: 'user-12',
  tags: ['Graduating', 'Unbelievable']
}];
export default PostListProvider;