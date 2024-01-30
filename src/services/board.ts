/* eslint-disable @typescript-eslint/no-unused-vars */
import { Task } from './../../types';
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL

export const getTasks = async (boardId: string) => {
  try {
    const { data }: { data: Task[] } = await axios.get(`${baseUrl}/${boardId}`);
    return data
  } catch (error) {
    console.error(error);
  }
}

export const editTask = async (id: string, task: Task) => {
  try {
    await axios.put(`${baseUrl}/${id}`, task);
  } catch (error) {
    console.error(error);
  }
}

export const deleteTask = async (id: string) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export const addTask = async (boardId: string) => {
  try {
    const { data }: { data: Task } = await axios.post(baseUrl, boardId);
    return data
  } catch (error) {
    console.error(error);
  }
}
