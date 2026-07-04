import { createContext, useReducer } from "react";

export const PostList = createContext({
  // The Following are the default values
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList
  if (action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter(post => post.id !== action.payLoad.postId)
  }
  else if(action.type === 'ADD_POST'){
    newPostList = [action.payLoad , ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payLoad: {
        id: Date.now(),
        title: postTitle,
        body: postBody ,
        reactions: reaction,
        userId: userId,
        tags: tags,
      },
    })
  };

  const deletePost = (postId) => {
    dispatchPostList(
      {
        type: 'DELETE_POST',
        payLoad: {
          postId
        }
      })
  };
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi friends , I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace Lot',
    reactions: 2,
    userId: 'user-9',
    tags: ['Vacations', 'Mumbai', 'Enjoying'],
  },
  {
    id: '2',
    title: 'Pass Ho Gye Bhai',
    body: '4 saal ki masti ke bad bhi ho gye hai pass. Hard to bellieve',
    reactions: 15,
    userId: 'user-12',
    tags: ['Graduating', 'Unbelievable'],
  },
];

export default PostListProvider;