import axios from "axios";

const route = "https://jsonplaceholder.typicode.com";
const serviceRoute = "posts";

// export const getFn = () => {
//   axios.get(`${route}/${serviceRoute}`).then(function (response) {
//     console.log("el response", response);
//   });
// };

export function getFn() {
  return axios.get(`${route}/${serviceRoute}`);
}

export function removePost(id) {
  return axios.delete(`${route}/${serviceRoute}/${id}`);
}
