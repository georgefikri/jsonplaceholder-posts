import axios from "axios";

const route = "https://jsonplaceholder.typicode.com";
const serviceRoute = "posts";

export function getPosts() {
  return axios.get(`${route}/${serviceRoute}`);
}

export function getPostsById(id) {
  return axios.get(`${route}/${serviceRoute}/${id}`);
}

export function removePost(id) {
  return axios.delete(`${route}/${serviceRoute}/${id}`);
}
