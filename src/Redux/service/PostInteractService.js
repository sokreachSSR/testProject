import { API } from "../../utils/Utils";

export const likeDisLikePost = async (postId) => {
    try {
      const response = await API.put(`/posts/${postId}/likeAndDislike`);
      return response;
    } catch (error) {
      return error;
    }
}

export const getLikeNumber = async (postId) => {
    try {
      const response = await API.get(`/posts/${postId}/likeNumber`);
      return response;
    } catch (error) {
      return error;
    }
}

export const isLike = async (postId) => {
    try {
      const response = await API.get(`/posts/${postId}/isLike`);
      return response;
    } catch (error) {
      return error;
    }
}

export const insertComment = async (postId, comment) => {
  try {
    const response = await API.post(`/posts/${postId}/comment?comment=${comment}`);
    return response;
  } catch (error) {
    return error;
  }
}

export const getComment = async (postId, page) => {
  try {
    const response = await API.get(`/posts/${postId}/comment?sort=DESC&page=${page}&size=20`);
    return response;
  } catch (error) {
    return error;
  }
}

export const deleteComment = async (postId, commentId) => {
  try {
    const response = await API.delete(`/posts/${postId}/comment/${commentId}`);
    return response;
  } catch (error) {
    return error;
  }
}