import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://67ae3e0c9e85da2f020cea1d.mockapi.io/todos/todoList",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
