export const LIKE_POST = 'posts/LIKE_POST'
export const DISLIKE_POST = 'posts/DISLIKE_POST'
export const LIKE_ALL_POST = 'posts/LIKE_ALL_POST'
export const DISLIKE_ALL_POST = 'posts/DISLIKE_ALL_POST'
export const RESET_ALL_POST = 'posts/RESET_ALL_POST'

export const setLikePost = payload => {
  return {
    type: LIKE_POST,
    payload,
  }
}

export const setDislikePost = payload => {
  return {
    type: DISLIKE_POST,
    payload,
  }
}

export const setLikeAllPosts = () => {
  return {
    type: LIKE_ALL_POST,
  }
}

export const setDislikeAllPosts = () => {
  return {
    type: DISLIKE_ALL_POST,
  }
}

export const setResetAllPosts = () => {
  return {
    type: RESET_ALL_POST,
  }
}

const handleLikePost = payload => {
  return (dispatch, getState) => {
    dispatch(setLikePost(payload))
  }
}

const handleDislikePost = payload => {
  return (dispatch, getState) => {
    dispatch(setDislikePost(payload))
  }
}

const handleLikeAllPost = () => {
  return (dispatch, getState) => {
    dispatch(setLikeAllPosts())
  }
}

const handleDislikeAllPost = () => {
  return (dispatch, getState) => {
    dispatch(setDislikeAllPosts())
  }
}

const handleResetAllPost = () => {
  return (dispatch, getState) => {
    dispatch(setResetAllPosts())
  }
}

const PostAction = {
  likePost: handleLikePost,
  dislikePost: handleDislikePost,
  likeAllPost: handleLikeAllPost,
  dislikeAllPost: handleDislikeAllPost,
  resetAllPost: handleResetAllPost,
}

export default PostAction
