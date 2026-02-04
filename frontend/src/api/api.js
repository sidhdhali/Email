import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,  // from .env
});

export const getMessages = () => API.get("/");
export const getMessageById = (id) => API.get(`/${id}`);
export const createMessage = (data) => API.post("/", data);
export const deleteMessage = (id) => API.delete(`/${id}`);
