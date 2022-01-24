import axios from 'axios';

export const api = axios.create({
  baseURL: "https://todo-pweb2.herokuapp.com",
})