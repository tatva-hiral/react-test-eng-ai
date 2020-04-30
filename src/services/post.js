import axios from './api';

export const GetPosts = page => axios.get(`search_by_date?tags=story&page=${page}`);
