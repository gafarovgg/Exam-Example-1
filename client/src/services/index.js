import { BASE_URL } from "./const";
import axios from "axios";

export async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function getDataById(id) {
  try {
    const response = await axios(`${BASE_URL}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function addPostData(payload) {
  try {
    const response = axios.post(BASE_URL, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}
