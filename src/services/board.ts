/* eslint-disable @typescript-eslint/no-unused-vars */
import { Task } from './../../types';
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL

export const getTasks = async (boardId: string) => {
  const { data }: { data: Task[] } = await axios.get(`${baseUrl}/${boardId}`);
  return data
}

export const editTask = async (id: string, task: Task) => {
  const { data }: { data: Task} = await axios.put(`${baseUrl}/${id}`, task);
  return data;
}

export const deleteTask = async (id: string) => {
  const { data } = await axios.delete(`${baseUrl}/${id}`);
  return data
}

export const addTask = async (boardId: string) => {
  const { data }: { data: Task } = await axios.post(baseUrl, boardId);
  return data
}
