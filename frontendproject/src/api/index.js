//to make api calls
import axios from 'axios';
//url for backend route
const url ='http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url)

